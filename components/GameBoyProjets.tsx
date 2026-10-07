import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Project } from '../types';

type Touche = 'up' | 'down' | 'left' | 'right' | 'a' | 'b' | 'start' | 'select';

interface GameBoyProjetsProps {
  projets: Project[];
  onToggleTheme: () => void;
}

/** Durée pendant laquelle un bouton reste visuellement enfoncé après un raccourci clavier */
const DUREE_APPUI_CLAVIER_MS = 140;

const premierDepot = (p: Project) =>
  Array.isArray(p.githubLink) ? p.githubLink[0] : p.githubLink;

const GameBoyProjets: React.FC<GameBoyProjetsProps> = ({ projets, onToggleTheme }) => {
  const [index, setIndex] = useState(0);
  const [enfoncees, setEnfoncees] = useState<Set<Touche>>(() => new Set());
  const [visible, setVisible] = useState(false);
  const [mouvementReduit] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const racineRef = useRef<HTMLDivElement>(null);
  const projet = projets[index];

  // --- États visuels des boutons (sprite « enfoncé » / « relâché ») ---
  const enfoncer = useCallback((t: Touche) => {
    setEnfoncees((prev) => (prev.has(t) ? prev : new Set(prev).add(t)));
  }, []);
  const relacher = useCallback((t: Touche) => {
    setEnfoncees((prev) => {
      if (!prev.has(t)) return prev;
      const suivant = new Set(prev);
      suivant.delete(t);
      return suivant;
    });
  }, []);

  // --- Actions ---
  const executer = useCallback((t: Touche) => {
    const p = projets[index];
    switch (t) {
      case 'left':
      case 'up':
        setIndex((i) => (i - 1 + projets.length) % projets.length);
        break;
      case 'right':
      case 'down':
        setIndex((i) => (i + 1) % projets.length);
        break;
      case 'a': {
        const url = p.link ?? premierDepot(p);
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
        break;
      }
      case 'b': {
        const url = premierDepot(p);
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
        break;
      }
      case 'start': {
        const carte = document.getElementById(`projet-${p.id}`);
        if (carte) {
          carte.scrollIntoView({ behavior: mouvementReduit ? 'auto' : 'smooth', block: 'center' });
          carte.classList.remove('projet-surligne');
          void carte.offsetWidth; // relance l'animation
          carte.classList.add('projet-surligne');
        }
        break;
      }
      case 'select':
        onToggleTheme();
        break;
    }
  }, [index, projets, onToggleTheme, mouvementReduit]);

  // Props communes à chaque bouton : enfoncé au pointeur, action au clic
  const propsBouton = (t: Touche) => ({
    'data-appuye': enfoncees.has(t),
    onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      enfoncer(t);
    },
    onPointerUp: () => relacher(t),
    onPointerCancel: () => relacher(t),
    onLostPointerCapture: () => relacher(t),
    onClick: () => executer(t),
  });

  // --- Raccourcis clavier, actifs seulement quand la console est à l'écran ---
  useEffect(() => {
    const el = racineRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const correspondance: Record<string, Touche> = {
      ArrowLeft: 'left', ArrowRight: 'right', a: 'a', A: 'a', b: 'b', B: 'b',
    };
    const onKeyDown = (e: KeyboardEvent) => {
      const cible = e.target as HTMLElement;
      if (cible.closest('input, textarea, select, [contenteditable="true"]')) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const t = correspondance[e.key];
      if (!t) return;
      e.preventDefault();
      enfoncer(t);
      if (!e.repeat) executer(t);
      window.setTimeout(() => relacher(t), DUREE_APPUI_CLAVIER_MS);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [visible, enfoncer, relacher, executer]);

  const direction = (['up', 'down', 'left', 'right'] as const).find((d) => enfoncees.has(d));

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-14">
      {/* ================= La console ================= */}
      <div ref={racineRef} className="gb-coque relative w-full max-w-[430px] shrink-0 px-6 pt-6 pb-12 select-none touch-manipulation">
        {/* Encadrement de l'écran */}
        <div className="rounded-[10px] rounded-br-[38px] bg-[var(--gb-bezel)] px-4 pt-3 pb-5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[3px] flex-1 rounded-full bg-[var(--gb-btn)]" />
            <span className="font-pixel text-[6px] tracking-wider text-white/60 whitespace-nowrap">PORTFOLIO · ECRAN COULEUR</span>
            <span className="h-[3px] w-6 rounded-full bg-[var(--gb-btn)]" />
          </div>

          <div className="flex items-center gap-3">
            {/* Voyant d'alimentation */}
            <div className="flex flex-col items-center gap-1 -ml-2">
              <span className="gb-led block h-2 w-2 rounded-full" />
              <span className="font-pixel text-[5px] text-white/50">PWR</span>
            </div>

            {/* L'écran */}
            <div className="relative flex-1 aspect-[16/10] overflow-hidden rounded-[3px] bg-black ring-1 ring-black/60">
              {projet.video && !mouvementReduit ? (
                <video
                  key={projet.id}
                  src={projet.video}
                  poster={projet.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <img key={projet.id} src={projet.image} alt="" className="h-full w-full object-cover object-top" />
              )}
              <div className="gb-scanlines pointer-events-none absolute inset-0" />
              <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-1.5 pt-1 font-pixel text-[7px] text-white [text-shadow:1px_1px_0_#000]">
                <span>▶ PROJET</span>
                <span>{index + 1}/{projets.length}</span>
              </div>
              <div key={`titre-${projet.id}`} className="gb-titre pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-1.5 pb-1.5 pt-4">
                <span className="font-pixel text-[9px] leading-tight text-white">{projet.title.toUpperCase()}</span>
              </div>
              {!mouvementReduit && <div key={`flash-${projet.id}`} className="gb-flash pointer-events-none absolute inset-0" />}
            </div>
          </div>
        </div>

        <div className="h-8" />

        {/* Croix + boutons A/B */}
        <div className="flex items-center justify-between px-1">
          {/* Croix directionnelle en volume : une face du dessus posée sur
              plusieurs tranches empilées en profondeur, qui bascule en perspective */}
          <div className="gb-dpad-puits relative grid h-[124px] w-[124px] place-items-center rounded-full">
            <div className="gb-dpad-ombre" data-dir={direction} aria-hidden="true" />
            <div className="gb-dpad-scene h-[108px] w-[108px]">
              <div className="gb-dpad-objet relative h-full w-full" data-dir={direction}>
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={i}
                    className="gb-croix gb-croix-tranche absolute inset-0"
                    style={{ transform: `translateZ(${-(i + 1) * 1.5}px)` }}
                    aria-hidden="true"
                  />
                ))}
                <div className="gb-croix gb-croix-dessus absolute inset-0 grid grid-cols-3 grid-rows-3">
                  <span />
                  <button type="button" aria-label="Projet précédent" className="gb-bras" data-sens="up" {...propsBouton('up')}><i /></button>
                  <span />
                  <button type="button" aria-label="Projet précédent" className="gb-bras" data-sens="left" {...propsBouton('left')}><i /></button>
                  <span className="grid place-items-center"><span className="gb-croix-centre" /></span>
                  <button type="button" aria-label="Projet suivant" className="gb-bras" data-sens="right" {...propsBouton('right')}><i /></button>
                  <span />
                  <button type="button" aria-label="Projet suivant" className="gb-bras" data-sens="down" {...propsBouton('down')}><i /></button>
                  <span />
                </div>
              </div>
            </div>
          </div>

          {/* A et B */}
          <div className="flex -rotate-[25deg] gap-4 rounded-full bg-black/10 px-2.5 py-2 shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)]">
            {(['b', 'a'] as const).map((t) => (
              <div key={t} className={`flex flex-col items-center gap-1.5 ${t === 'a' ? '-translate-y-3' : 'translate-y-1'}`}>
                <button
                  type="button"
                  aria-label={t === 'a' ? `Ouvrir le site de ${projet.title}` : `Voir le code de ${projet.title}`}
                  className="gb-rond h-[58px] w-[58px] rounded-full"
                  {...propsBouton(t)}
                />
                <span className="font-heading text-xs font-black text-[var(--gb-label)]">{t.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SELECT / START */}
        <div className="mt-8 flex justify-center gap-6">
          {(['select', 'start'] as const).map((t) => (
            <div key={t} className="flex -rotate-[25deg] flex-col items-center gap-1.5">
              <button
                type="button"
                aria-label={t === 'start' ? `Voir le détail de ${projet.title}` : 'Changer le thème du site'}
                className="gb-pilule h-[12px] w-[44px] rounded-full"
                {...propsBouton(t)}
              />
              <span className="font-heading text-[9px] font-black tracking-widest text-[var(--gb-label)]">{t.toUpperCase()}</span>
            </div>
          ))}
        </div>

        {/* Grille du haut-parleur */}
        <div className="gb-grille pointer-events-none absolute bottom-7 right-6 flex -rotate-[25deg] gap-[6px]" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="block h-[42px] w-[5px] rounded-full" />
          ))}
        </div>
      </div>

      {/* ================= Fiche du projet affiché ================= */}
      <div key={projet.id} className="gb-titre flex w-full flex-col justify-center" aria-live="polite">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-2">{projet.category}</span>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] mb-4">{projet.title}</h3>
        <p className="text-lg leading-relaxed text-[var(--text-secondary)] mb-5">{projet.pitch}</p>
        <div className="flex flex-wrap gap-1.5 mb-8">
          {projet.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 text-[10px] bg-[var(--bg-secondary)] text-[var(--text-secondary)] rounded-full border border-[var(--border-color)] uppercase font-bold">{tag}</span>
          ))}
        </div>

        {/* Légende des commandes */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 text-sm text-[var(--text-secondary)]">
          <Legende touche="✚ / ← →" texte="Changer de projet" />
          <Legende touche="A" texte={projet.link ? 'Ouvrir le site' : 'Ouvrir le code'} />
          <Legende touche="B" texte="Voir le code" />
          <Legende touche="START" texte="Voir le détail" />
          <Legende touche="SELECT" texte="Changer de thème" />
        </div>
      </div>
    </div>
  );
};

const Legende: React.FC<{ touche: string; texte: string }> = ({ touche, texte }) => (
  <div className="flex items-center gap-2.5">
    <kbd className="min-w-[2rem] rounded-md border border-[var(--border-color)] bg-[var(--bg-primary)] px-1.5 py-0.5 text-center font-heading text-[10px] font-black text-[var(--text-primary)] shadow-[0_2px_0_var(--border-color)]">
      {touche}
    </kbd>
    <span>{texte}</span>
  </div>
);

export default GameBoyProjets;
