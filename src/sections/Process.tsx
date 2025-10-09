import React from 'react';
import { Reveal } from '../components/Reveal';
import { Search, Lightbulb, Palette, Rocket } from 'lucide-react';

const StepIcon = ({ kind }: { kind: 'search' | 'idea' | 'palette' | 'rocket' }) => (
  {
    search: <Search className="h-6 w-6" aria-hidden="true" />,
    idea: <Lightbulb className="h-6 w-6" aria-hidden="true" />,
    palette: <Palette className="h-6 w-6" aria-hidden="true" />,
    rocket: <Rocket className="h-6 w-6" aria-hidden="true" />,
  }[kind]
);

export const Process: React.FC = () => {
  const steps = [
    { n: '01', title: 'Research', desc: 'Analyze your content, audience, and competitors', icon: 'search' as const },
    { n: '02', title: 'Concept', desc: 'Brainstorm ideas and create initial sketches', icon: 'idea' as const },
    { n: '03', title: 'Design', desc: 'Create stunning thumbnails with perfect details', icon: 'palette' as const },
    { n: '04', title: 'Deliver', desc: 'Provide high-quality files ready for upload', icon: 'rocket' as const },
  ];

  return (
    <section id="process" className="container-px mx-auto max-w-7xl py-16 sm:py-20 md:py-28">
      <Reveal className="text-center text-2xl font-semibold text-white md:text-3xl">My Design Process</Reveal>

  <Reveal className="relative mx-auto mt-10 max-w-5xl">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
        <div className="grid grid-cols-4">
          {steps.map((s, idx) => (
            <div key={s.n} className="flex items-center justify-center">
              <div 
                className="group z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 text-white ring-4 ring-zinc-900/80 shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="transition-transform duration-500 group-hover:scale-110">
                  <StepIcon kind={s.icon} />
                </div>
              </div>
            </div>
          ))}
        </div>
  </Reveal>

  <Reveal className="mx-auto mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
        {steps.map((s, idx) => (
          <div 
            key={s.n} 
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-lg shadow-black/10 transition-all duration-500 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/10"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-zinc-300 transition-colors duration-300 group-hover:text-purple-400">{s.n}</div>
            <div className="mt-1 text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-105">{s.title}</div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">{s.desc}</p>
          </div>
        ))}
  </Reveal>
    </section>
  );
};

export default Process;
