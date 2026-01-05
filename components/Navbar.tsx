
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isLightMode: boolean;
  toggleTheme: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLightMode, toggleTheme, isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen, setIsMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[60] py-4 transition-all duration-300 ${scrolled ? 'bg-[var(--bg-primary)]/80' : 'bg-transparent'}`}
         style={{
           backdropFilter: scrolled ? 'blur(12px)' : 'blur(0px)',
           borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
           transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)'
         }}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-xl font-bold font-heading tracking-tighter"
        >
          N<span className="text-[var(--accent)]">M</span>.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:scale-110 transition-transform"
            aria-label="Changer le thème"
          >
            {isLightMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v1m9-9h1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.243l.707.707M7.757 7.757l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            )}
          </button>

          <a 
            href="/CV_NASSIM_MANSEUR.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/30"
          >
            CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-2 text-[var(--text-primary)]">
            {isLightMode ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--text-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Background */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 backdrop-blur-sm z-[100] md:hidden ${isLightMode ? 'bg-black/20' : 'bg-black/50'}`}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Overlay - Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[66vw] max-w-[320px] bg-[var(--bg-primary)] shadow-2xl shadow-[var(--accent)]/10 z-[110] md:hidden transition-transform duration-300 ease-out overflow-hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} ${isLightMode ? 'border-l border-black/20' : 'border-l border-white/20'}`}
      >
        <div className="h-full w-full flex flex-col justify-between p-6 py-8 overflow-y-auto">
          {/* Close Button */}
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-4 right-4 p-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all hover:rotate-90 duration-300 z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="space-y-2 mt-10">
            <div className="text-[var(--accent)] font-mono text-xs uppercase tracking-[0.3em] font-bold">Navigation</div>
            <div className="w-12 h-1 bg-[var(--accent)] rounded-full"></div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center gap-2 -mt-12">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="group flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-300"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = isLightMode ? '#d0d0d0' : 'rgba(168, 85, 247, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span className="text-[var(--accent)] font-mono text-xs font-bold min-w-[2rem]">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <span className="text-base font-heading font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-300">
                  {link.name}
                </span>
                <svg className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="space-y-6">
            <a 
              href="/CV_NASSIM_MANSEUR.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-bold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/30 text-center"
            >
              Télécharger CV
            </a>
            
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-[var(--border-color)]">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:contact@nassim.dev" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
