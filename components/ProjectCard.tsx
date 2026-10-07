import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.090 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
);

/** Libellé d'un dépôt quand le projet en a plusieurs (ex. GameVerse-frontend → Front) */
const libelleDepot = (url: string, total: number) => {
  if (total === 1) return 'Code';
  if (/front/i.test(url)) return 'Code front';
  if (/back/i.test(url)) return 'Code back';
  return url.split('/').pop() ?? 'Code';
};

/** Vidéo en boucle lue uniquement quand la carte est à l'écran ; image fixe sinon */
const ProjectMedia: React.FC<{ project: Project }> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mouvementReduit] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.35 });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const classes = "w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]";

  if (!project.video || mouvementReduit) {
    return <img src={project.image} alt={`Aperçu du projet ${project.title}`} loading="lazy" className={classes} />;
  }
  return (
    <video
      ref={videoRef}
      src={project.video}
      poster={project.image}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`Aperçu animé du projet ${project.title}`}
      className={classes}
    />
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const depots = project.githubLink
    ? (Array.isArray(project.githubLink) ? project.githubLink : [project.githubLink])
    : [];

  const boutonSecondaire = "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors";

  const [detailOuvert, setDetailOuvert] = useState(false);
  const idDetail = `detail-projet-${project.id}`;

  return (
    <article id={`projet-${project.id}`} className="group flex flex-col scroll-mt-24 rounded-3xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl transition-all duration-500 hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent)]/[0.12]">
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <ProjectMedia project={project} />
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-7">
        <span className="text-[var(--accent)] font-mono text-[11px] font-bold uppercase tracking-widest mb-1.5">{project.category}</span>
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-2">{project.title}</h3>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{project.pitch}</p>

        <div className="flex gap-1.5 flex-wrap mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-0.5 text-[10px] bg-[var(--bg-primary)] text-[var(--text-secondary)] rounded-full border border-[var(--border-color)] uppercase font-bold">{tag}</span>
          ))}
        </div>

        {/* Détail repliable : le problème complet et les réalisations */}
        <div
          id={idDetail}
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${detailOuvert ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <div className="overflow-hidden" inert={!detailOuvert}>
            <div className="pb-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] mb-2">Le problème</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{project.problem}</p>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)] mb-2">Ce que j'ai réalisé</h4>
              <ul className="space-y-2">
                {project.highlights.map((item, i) => (
                  <li key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--accent)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-5 border-t border-[var(--border-color)]">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
            >
              Voir le site <ExternalIcon />
            </a>
          )}
          {depots.map((url) => (
            <a key={url} href={url} target="_blank" rel="noopener noreferrer" className={boutonSecondaire}>
              <GithubIcon /> {libelleDepot(url, depots.length)}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setDetailOuvert((o) => !o)}
            aria-expanded={detailOuvert}
            aria-controls={idDetail}
            className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
          >
            {detailOuvert ? 'Masquer' : 'Voir le détail'}
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform duration-300 ${detailOuvert ? 'rotate-180' : ''}`}>
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
