import React from 'react';
import { Reveal } from '../components/Reveal';

export function Services() {
  const features = [
    { icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ), text: 'Custom YouTube thumbnail designs' },
    { icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path fill="currentColor" d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-3.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
        </svg>
      ), text: 'Click-through rate optimization' },
    { icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path fill="currentColor" d="M3 17h18v2H3v-2Zm0-6h10v2H3v-2Zm0-6h18v2H3V5Z" />
        </svg>
      ), text: 'Brand-consistent visual identity' },
    { icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path fill="currentColor" d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm1-8V7h-2v7h5v-2h-3Z" />
        </svg>
      ), text: '24–48 hour delivery guarantee' },
    { icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path fill="currentColor" d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
        </svg>
      ), text: 'Unlimited revisions included' },
    { icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path fill="currentColor" d="M17 17v5l-5-2-5 2v-5l-4-4h6l3-9 3 9h6z" />
        </svg>
      ), text: 'Professional quality assurance' },
  ];

  return (
    <section id="services" className="container-px mx-auto max-w-6xl py-16 sm:py-20 md:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 text-zinc-300">
              <path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </span>
          What I Offer
        </span>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Professional Thumbnail Design Services
        </h2>
        <p className="mt-6 text-balance text-base leading-relaxed text-zinc-400">
          Everything you need to make your YouTube content stand out and attract more viewers.
        </p>
  </Reveal>

  <Reveal className="mt-10 grid gap-4 sm:gap-6 md:grid-cols-2">
        {features.map((f, idx) => (
          <div
            key={f.text}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-sm shadow-black/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10"
            role="group"
            aria-label={f.text}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white/80 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-cyan-500/20 group-hover:text-white">
              {f.icon}
            </div>
            <div className="text-[15px] font-medium text-white/90 transition-colors duration-300 group-hover:text-white">{f.text}</div>
          </div>
        ))}
  </Reveal>
    </section>
  );
}
