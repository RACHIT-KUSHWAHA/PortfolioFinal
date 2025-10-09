import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Impact } from './sections/Impact';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { Contact } from './sections/Contact';
import { SmoothScroll } from './components/SmoothScroll';
import { ScrollReveal } from './components/ScrollReveal';
import { ScrollProgress } from './components/ScrollProgress';
import { ParticlesBackground } from './components/ParticlesBackground';

export default function App() {
  return (
    <SmoothScroll>
      <ParticlesBackground />
      <ScrollProgress />
      
      <div className="relative min-h-screen">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          
          <ScrollReveal animation="slide" delay={0.2}>
            <Process />
          </ScrollReveal>
          
          <ScrollReveal animation="perspective">
            <Projects />
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={0.1}>
            <Impact />
          </ScrollReveal>
          
          <ScrollReveal animation="scale">
            <About />
          </ScrollReveal>
          
          <ScrollReveal animation="perspective" delay={0.2}>
            <Services />
          </ScrollReveal>
          
          <ScrollReveal animation="fade">
            <Contact />
          </ScrollReveal>
        </main>
        <footer className="container-px mx-auto border-t border-white/5 py-10 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} BeyondRachit
        </footer>
      </div>
    </SmoothScroll>
  );
}
