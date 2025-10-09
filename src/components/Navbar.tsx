import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const onMove: React.MouseEventHandler<HTMLElement> = (e) => {
    document.documentElement.style.setProperty('--spot-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--spot-y', `${e.clientY}px`);
  };

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      // Detect active section
      const sections = ['home', 'process', 'projects', 'about', 'services', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      onMouseMove={onMove} 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled ? 'px-4 sm:px-8 pt-6' : 'px-0 pt-0'
      }`}
    >
      <nav 
        className={`mx-auto transition-all duration-700 ease-out ${
          scrolled 
            ? 'max-w-7xl rounded-2xl backdrop-blur-xl bg-black/40 border border-white/30 shadow-2xl' 
            : 'max-w-full bg-transparent border-b border-white/10'
        }`}
      >
        <div className="flex items-center justify-between px-6 sm:px-8 py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
              R
            </div>
            <span className="font-semibold text-white text-lg tracking-tight transition-all duration-300 group-hover:text-purple-400">BeyondRachit</span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 text-sm relative">
            {/* Animated Glass Background */}
            <span 
              className="absolute h-full rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                width: '90px',
                left: activeSection === 'process' ? '0px' :
                      activeSection === 'projects' ? 'calc(90px + 8px)' :
                      activeSection === 'about' ? 'calc(180px + 16px)' :
                      activeSection === 'services' ? 'calc(270px + 24px)' :
                      activeSection === 'contact' ? 'calc(360px + 32px)' : '-100px',
                opacity: ['process', 'projects', 'about', 'services', 'contact'].includes(activeSection) ? 1 : 0
              }}
            ></span>
            
            <a 
              href="#process" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ease-out z-10 hover:scale-105 ${
                activeSection === 'process' 
                  ? 'text-white' 
                  : 'text-zinc-300 hover:text-white'
              }`}
              style={{ width: '90px', textAlign: 'center' }}
            >
              Process
            </a>
            <a 
              href="#projects" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ease-out z-10 hover:scale-105 ${
                activeSection === 'projects' 
                  ? 'text-white' 
                  : 'text-zinc-300 hover:text-white'
              }`}
              style={{ width: '90px', textAlign: 'center' }}
            >
              Thumbnails
            </a>
            <a 
              href="#about" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ease-out z-10 hover:scale-105 ${
                activeSection === 'about' 
                  ? 'text-white' 
                  : 'text-zinc-300 hover:text-white'
              }`}
              style={{ width: '90px', textAlign: 'center' }}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ease-out z-10 hover:scale-105 ${
                activeSection === 'services' 
                  ? 'text-white' 
                  : 'text-zinc-300 hover:text-white'
              }`}
              style={{ width: '90px', textAlign: 'center' }}
            >
              Services
            </a>
            <a 
              href="#contact" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ease-out z-10 hover:scale-105 ${
                activeSection === 'contact' 
                  ? 'text-white' 
                  : 'text-zinc-300 hover:text-white'
              }`}
              style={{ width: '90px', textAlign: 'center' }}
            >
              Contact
            </a>
          </nav>

          {/* Right: CTA Button */}
          <div className="flex items-center gap-3">
            <a 
              href="#contact"
              className="hidden md:inline-flex px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all duration-500 ease-out border border-white/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group relative overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:text-white md:hidden transition-all duration-300 hover:bg-white/10 hover:scale-110"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fill="currentColor" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-2" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-40 bg-black/60" onClick={() => setOpen(false)} />
          <div className="relative z-50 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 p-4 shadow-2xl">
            <nav className="grid gap-2 text-sm text-zinc-300">
              {[
                { href: '#process', label: 'Process' },
                { href: '#projects', label: 'Thumbnails' },
                { href: '#about', label: 'About' },
                { href: '#services', label: 'Services' },
                { href: '#contact', label: 'Contact' },
              ].map((l) => (
                <a 
                  key={l.href} 
                  href={l.href} 
                  className="rounded-lg px-3 py-2 hover:bg-white/10 transition-colors" 
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setOpen(false)} 
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 px-3 py-2 text-center font-medium border border-white/20"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
