import React from 'react';
import { motion } from 'framer-motion';
import { profile, socials } from '../data/content';
import { MagneticButton } from '../components/MagneticButton';

export function Hero() {
  return (
    <section id="home" className="relative isolate">
      <div className="container-px mx-auto grid min-h-[72vh] place-items-center py-20">
        <div className="relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
          >
            <span className="inline-block h-2 w-2 animate-pulseGlow rounded-full bg-accent" />
            YouTube Thumbnail Designer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mt-6 font-ui text-[40px] font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="block">BeyondRachit</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">YouTube Thumbnail Designer</span>
          </motion.h1>
          {/* Interactive badges replacing the location tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm"
          >
            {[
              'CTR-focused Design',
              'Photoshop Expert',
              'Bold Typography',
              'Color Psychology',
              'Fast Turnaround',
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300 hover:border-accent/40 hover:text-white"
              >
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-zinc-300"
          >
            Creating professional thumbnail designs that boost your views and engagement. Specializing in eye‑catching visuals using Photoshop, Canva Pro, and modern design tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton href="#projects" ariaLabel="View my work" title="View my work">View My Work</MagneticButton>
            <MagneticButton href="#contact" ariaLabel="Get your thumbnail" title="Get your thumbnail" className="bg-accent text-white border-accent/40">Get Your Thumbnail</MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-zinc-400"
          >
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="hover:text-white">
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
