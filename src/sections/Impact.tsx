import React from 'react';
import { Reveal } from '../components/Reveal';
import { CountUp } from '../components/CountUp';

export const Impact: React.FC = () => {
  const items = [
    {
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            fill="currentColor"
            d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ),
      value: '4.9/5',
      label: 'Average Rating',
    },
    {
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            fill="currentColor"
            d="M3 17h2.586l3.707-3.707 3 3L20.293 8H21v6h2V6h-8v2h4.586L12.293 15.293l-3-3L4 17.586V13H2v6h6v-2H3z"
          />
        </svg>
      ),
      value: '+275%',
      label: 'Average CTR Increase',
    },
    {
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            fill="currentColor"
            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
          />
        </svg>
      ),
      value: '50+',
      label: 'Happy Creators',
    },
    {
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
          <path
            fill="currentColor"
            d="M17 17v5l-5-2-5 2v-5l-4-4h6l3-9 3 9h6z"
          />
        </svg>
      ),
      value: '500+',
      label: 'Successful Projects',
    },
  ];

  return (
    <section id="impact" className="container-px mx-auto max-w-7xl py-16 sm:py-20 md:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 text-emerald-400">
              <path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </span>
          Project Impact
        </span>
        <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          Proven <span className="text-accent">Results</span> That
          <br className="hidden sm:block" /> Drive Growth
        </h2>
        <p className="mt-6 text-balance text-base leading-relaxed text-zinc-400">
          Every thumbnail I create is designed with one goal: to maximize your YouTube
          channel's performance and help you achieve measurable growth.
        </p>
  </Reveal>

  <Reveal className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {items.map((it, idx) => (
          <div
            key={it.label}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:shadow-xl hover:shadow-emerald-500/20"
            role="group"
            aria-label={it.label}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="inline-flex items-center justify-center rounded-xl bg-emerald-500/10 p-2 text-emerald-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:shadow-lg group-hover:shadow-emerald-500/30">
              {it.icon}
            </div>
            <div className="mt-4 text-3xl font-semibold text-white transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-400">
              <CountUp value={it.value} />
            </div>
            <div className="mt-1 text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">{it.label}</div>
          </div>
        ))}
  </Reveal>
    </section>
  );
};

export default Impact;
