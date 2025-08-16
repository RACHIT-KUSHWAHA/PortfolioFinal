import React, { useState } from 'react';
import { MagneticButton } from './MagneticButton';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const onMove: React.MouseEventHandler<HTMLElement> = (e) => {
    document.documentElement.style.setProperty('--spot-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--spot-y', `${e.clientY}px`);
  };

  return (
    <header onMouseMove={onMove} className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <div className="container-px mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-semibold tracking-tight">BeyondRachit</a>
        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          <a href="#projects" className="hover:text-white">Thumbnails</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#impact" className="hover:text-white">Impact</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <MagneticButton href="#contact" className="group hidden md:inline-flex">
            <span>Get a quote</span>
          </MagneticButton>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-zinc-300 hover:text-white md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path fill="currentColor" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/60" onClick={() => setOpen(false)} />
          <div className="fixed inset-x-4 top-16 z-50 rounded-2xl border border-white/10 bg-bg p-4 shadow-lg">
            <nav className="grid gap-2 text-sm text-zinc-300">
              {[
                { href: '#projects', label: 'Thumbnails' },
                { href: '#process', label: 'Process' },
                { href: '#impact', label: 'Impact' },
                { href: '#about', label: 'About' },
                { href: '#services', label: 'Services' },
                { href: '#contact', label: 'Contact' },
              ].map((l) => (
                <a key={l.href} href={l.href} className="rounded-md px-3 py-2 hover:bg-white/5" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-center font-medium">Get a quote</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
