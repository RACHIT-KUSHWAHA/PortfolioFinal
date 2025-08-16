import React, { useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Impact } from './sections/Impact';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { Contact } from './sections/Contact';
import { CommandPaletteUI, useCommandPalette } from './components/CommandPalette';

export default function App() {
  const actions = useMemo(() => [
    { id: 'goto-projects', label: 'Go to: Thumbnails', perform: () => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'goto-process', label: 'Go to: Process', perform: () => document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'goto-impact', label: 'Go to: Impact', perform: () => document.querySelector('#impact')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'goto-about', label: 'Go to: About', perform: () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) },
  { id: 'goto-services', label: 'Go to: Services', perform: () => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'goto-contact', label: 'Go to: Contact', perform: () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'toggle-theme', label: 'Toggle theme (light/dark)', hint: 'Demo only; site defaults to dark', perform: () => document.documentElement.classList.toggle('invert') },
  ], []);

  const { open, setOpen, query, setQuery, list } = useCommandPalette(actions);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
  <Hero />
  <Projects />
  <Process />
  <Impact />
  <About />
  <Services />
        <Contact />
      </main>
      <a href="#contact" className="fixed bottom-6 right-6 z-50 hidden rounded-full border border-white/10 bg-accent px-5 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition hover:translate-y-[-2px] md:inline-block">Get a quote</a>
      <footer className="container-px mx-auto border-t border-white/5 py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} BeyondRachit
      </footer>
      <CommandPaletteUI open={open} setOpen={setOpen} query={query} setQuery={setQuery} list={list} />
    </div>
  );
}
