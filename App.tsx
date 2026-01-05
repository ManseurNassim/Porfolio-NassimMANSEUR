
import React, { useState, useEffect, CSSProperties } from 'react';
import Navbar from './components/Navbar';
import Viewfinder from './components/Viewfinder';
import { EXPERIENCES, SKILL_GROUPS, PROJECTS, EDUCATION, IMAGES } from './constants';

const App: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
        setTimeout(() => setFormSubmitted(false), 4000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire', error);
    }
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLightMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const passions = [
    {
      title: "Échecs",
      emoji: "♟️",
      desc: "Analyse stratégique et résolution de problèmes.",
      img: IMAGES.passions.chess
    },
    {
      title: "Formule 1",
      emoji: "🏎️",
      desc: "Passion pour l'optimisation, la performance et la compétition.",
      img: IMAGES.passions.f1
    },
    {
      title: "Photographie",
      emoji: "📸",
      desc: "Souci du détail visuel et de la composition ainsi que du post-traitement.",
      img: IMAGES.passions.photography
    },
    {
      title: "Jeux Vidéo",
      emoji: "🎮",
      desc: "Esprit d'équipe, réactivité et compétition.",
      img: IMAGES.passions.gaming
    }
  ];

  const SectionHeader = ({ subtitle, title }: { subtitle: string, title: string }) => (
    <div className="mb-12 text-left">
      <h3 className="text-[var(--accent)] font-mono text-xs uppercase tracking-[0.3em] mb-2 font-bold">{subtitle}</h3>
      <h2 className="text-4xl md:text-5xl font-heading font-black italic tracking-tighter uppercase leading-none text-[var(--text-primary)]">
        {title}
      </h2>
      <div className="w-12 h-1 bg-[var(--accent)] mt-4 rounded-full"></div>
    </div>
  );

  // Style de carte standardisé avec effet "Glow" discret au survol
  const cardHoverStyles = "transition-all duration-500 hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent)]/[0.12] hover:bg-[var(--accent)]/[0.01]";
  const buttonMainStyles = "px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-xl shadow-purple-500/30";
  const sectionInner = "max-w-5xl mx-auto";
  const projectTitleStyle: CSSProperties = {
    WebkitTextStroke: '0px transparent',
    textShadow: '0 2px 10px rgba(0,0,0,0.65), 0 0 1px rgba(255,255,255,0.2)'
  };

  const projectCategoryStroke: CSSProperties = {
    WebkitTextStroke: '0px transparent',
    textShadow: '0 1px 3px rgba(0,0,0,0.35)'
  };

  return (
    <div className="relative overflow-x-hidden theme-transition selection:bg-[var(--accent)] selection:text-white">
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Viewfinder />

      {/* Contenu principal avec blur optionnel */}
      <div className={`transition-all duration-300 ${isMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
        {/* Bouton retour en haut */}
        <button 
          onClick={scrollToTop}
          className={`fixed bottom-12 right-12 z-[90] w-10 h-10 bg-[var(--accent)] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform ${showScrollTop && !isMenuOpen ? 'translate-y-0 opacity-40 hover:opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'} hover:scale-110 active:scale-95`}
          aria-label="Retour au sommet"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>

        {/* portrait Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at center, var(--accent) 0%, transparent 70%)` }}></div>
          <div className={`${sectionInner} flex flex-col md:flex-row items-center gap-12 z-10 w-full`}>
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-[var(--accent)] opacity-95 shadow-2xl relative group shrink-0">
            <img 
              src={IMAGES.portrait}
              alt="Nassim Manseur" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[var(--accent)]/10 mix-blend-color group-hover:opacity-0 transition-opacity"></div>
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-[var(--accent)] font-mono text-sm tracking-widest mb-4 uppercase font-bold">Développeur Fullstack</h2>
            <h1 className="text-5xl md:text-7xl font-heading font-black mb-4 tracking-tighter leading-none">
              Nassim <span className="text-[var(--text-secondary)] block md:inline italic">Manseur</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-2xl mb-10 leading-relaxed">
              Diplômé d'un <span className="text-[var(--text-primary)] font-medium">BUT Informatique</span>, je suis à la recherche de nouvelles opportunités en <span className="text-[var(--text-primary)] font-medium">poursuite d'études</span> ou en <span className="text-[var(--text-primary)] font-medium">milieu professionnel</span>.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className={`bg-[var(--accent)] text-white ${buttonMainStyles}`}>
                Me contacter
              </a>
              <a 
                href="/CV_NASSIM_MANSEUR.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-transparent border-2 border-[var(--accent)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white flex items-center gap-2 ${buttonMainStyles}`}
              >
                <span>Télécharger mon CV</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-[var(--bg-primary)]">
        <div className={sectionInner}>
          <SectionHeader subtitle="Expériences" title="Parcours Pro" />
          <div className="relative border-l-2 border-[var(--border-color)] ml-3">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-12 pr-6 py-8 transition-all duration-300 group">
                <div className="absolute -left-[11px] top-10 w-5 h-5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-color)] group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all duration-300 shadow-md z-10"></div>
                <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="mb-2 flex flex-col md:flex-row md:items-center justify-between">
                  <span className="text-[var(--accent)] font-mono text-sm font-bold">{exp.date}</span>
                  <span className="text-[var(--text-secondary)] text-xs uppercase tracking-widest font-bold">{exp.location}</span>
                </div>
                <h4 className="text-2xl font-bold mb-1 text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{exp.title}</h4>
                <div className="text-[var(--text-secondary)] font-medium mb-4 italic">{exp.company}</div>
                <ul className="space-y-3 max-w-3xl">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-[var(--text-secondary)] text-base leading-relaxed flex items-start gap-3">
                      <span className="text-[var(--accent)] mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--accent)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className={sectionInner}>
          <SectionHeader subtitle="Formation" title="Diplômes" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className={`bg-[var(--bg-primary)] p-10 rounded-3xl border border-[var(--border-color)] group relative overflow-hidden ${cardHoverStyles}`}>
                <div className="relative z-10">
                  <div className="flex flex-col gap-2 mb-6">
                    <span className="text-[var(--accent)] font-mono text-sm font-bold">{edu.date}</span>
                    <h4 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-tight">{edu.title}</h4>
                  </div>
                  <div className="text-[var(--accent)] text-sm font-medium mb-4 pb-4 border-b border-[var(--border-color)]">{edu.institution}</div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="py-24 px-6 bg-[var(--bg-primary)]">
        <div className={sectionInner}>
          <SectionHeader subtitle="Expertise" title="Compétences" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx} className={`bg-[var(--bg-secondary)] p-8 rounded-3xl border border-[var(--border-color)] group shadow-sm flex flex-col h-full ${cardHoverStyles}`}>
                <h3 className="text-xs font-bold mb-6 text-[var(--accent)] uppercase tracking-widest border-b border-[var(--border-color)] pb-3">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="px-3 py-1.5 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] rounded-lg text-[10px] font-bold uppercase tracking-tight hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-all duration-300">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className={sectionInner}>
          <SectionHeader subtitle="Profil" title="Passions & Atouts" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 text-[var(--text-secondary)] leading-relaxed text-lg font-light">
              <p>
                Je conçois le développement comme une discipline alliant <strong className="text-[var(--text-primary)] font-bold">rigueur technique</strong> et <strong className="text-[var(--text-primary)] font-bold">curiosité constante</strong>.
              </p>
              <p>
                Mon sens de l'analyse hérité des <span className="text-[var(--accent)] font-medium">échecs</span> et ma quête de précision liée à la <span className="text-[var(--accent)] font-medium">F1</span> et la <span className="text-[var(--accent)] font-medium">photographie</span> m'aident à produire un code propre et ergonomique.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {passions.map((passion, pIdx) => (
                <div key={pIdx} className="relative group bg-[var(--bg-primary)] p-8 rounded-3xl border border-[var(--border-color)] overflow-hidden transition-all duration-500 h-44 flex flex-col justify-center">
                  <div 
                    className="absolute inset-0 opacity-65 md:opacity-0 md:group-hover:opacity-45 transition-all duration-700 ease-out transform scale-110 md:group-hover:scale-100 bg-cover bg-center"
                    style={{ backgroundImage: `url(${passion.img})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80 md:opacity-60"></div>
                  <div className="relative z-10 transition-transform duration-500 md:group-hover:-translate-y-2">
                    <div className="text-3xl mb-3 transform md:group-hover:scale-110 transition-transform duration-300 inline-block">{passion.emoji}</div>
                    <h4 className="font-bold text-[var(--text-primary)] text-lg mb-1">{passion.title}</h4>
                    <p className="text-[10px] text-[var(--text-secondary)] leading-tight md:group-hover:text-[var(--text-primary)] transition-colors">{passion.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 px-6 bg-[var(--bg-primary)]">
        <div className={sectionInner}>
          <SectionHeader subtitle="Portfolio" title="Projets" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <a 
                key={project.id} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block rounded-3xl overflow-hidden aspect-[16/10] bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 md:group-hover:scale-105 opacity-70 md:opacity-70 blur-0 md:blur-[2px] md:group-hover:blur-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80 md:opacity-80 md:group-hover:opacity-95 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 pb-10 w-full transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-bold mb-4 tracking-tight leading-tight text-[var(--text-primary)]" style={projectTitleStyle}>{project.title}</h4>
                  <div className="flex gap-2 flex-wrap opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity delay-100">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 text-[10px] bg-[var(--bg-primary)] text-[var(--text-secondary)] rounded-full border border-[var(--border-color)] uppercase font-bold">{tag}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[var(--bg-secondary)]">
        <div className={sectionInner}>
          <SectionHeader subtitle="Contact" title="Me contacter" />
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[var(--bg-primary)] p-8 md:p-12 rounded-[2.5rem] border border-[var(--border-color)] shadow-2xl ${cardHoverStyles}`}>
            <div className="lg:col-span-5 space-y-10">
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light">
                Une opportunité ? Une question ? Envoyez-moi un message via le formulaire ou directement par email.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-1">Email</h4>
                    <a href="mailto:nassimmanseur1@gmail.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold hover:text-[var(--accent)] transition-colors">nassimmanseur1@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-secondary)] flex items-center justify-center border border-[var(--border-color)] group-hover:border-[var(--accent)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-[var(--text-secondary)] mb-1">Localisation</h4>
                    <p className="text-base font-bold text-[var(--text-primary)]">Île-de-France / Hauts-de-France</p>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-[var(--border-color)] flex gap-4">
                <a href="https://www.linkedin.com/in/nassim-manseur" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl font-bold hover:bg-[var(--accent)] hover:text-white transition-all shadow-lg shadow-purple-500/5">LinkedIn</a>
                <a href="https://github.com/ManseurNassim" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl font-bold hover:bg-[var(--accent)] hover:text-white transition-all shadow-lg shadow-purple-500/5">GitHub</a>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <form action="https://formspree.io/f/xnqewayn" method="POST" className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="first" placeholder="Prénom" className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl px-6 py-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all" required />
                  <input type="text" name="last" placeholder="Nom" className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl px-6 py-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all" required />
                </div>
                <input type="email" name="email" placeholder="Votre Email" className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl px-6 py-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all" required />
                <textarea name="message" placeholder="Votre message..." rows={5} className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl px-6 py-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-all resize-none" required></textarea>
                <button type="submit" className="w-full py-5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-purple-500/30 active:scale-95">
                  Envoyer
                </button>
              </form>
              
              {/* Success Message */}
              <div className={`absolute inset-0 flex items-center justify-center bg-[var(--bg-primary)]/95 backdrop-blur-sm rounded-2xl transition-all duration-500 ${formSubmitted ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className={`text-center px-8 transform transition-all duration-500 ${formSubmitted ? 'scale-100 translate-y-0' : 'scale-75 translate-y-4'}`}>
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[var(--accent)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Message envoyé !</h3>
                  <p className="text-[var(--text-secondary)]">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[var(--text-secondary)] text-sm font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Nassim Manseur
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default App;
