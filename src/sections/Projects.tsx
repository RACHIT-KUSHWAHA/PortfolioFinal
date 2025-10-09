import React, { useMemo, useState, useCallback } from 'react';
import { projects } from '../data/content';
import { TiltCard } from '../components/TiltCard';
import { Reveal } from '../components/Reveal';

export function Projects() {
  const [filter, setFilter] = useState<string>('Best');
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);
  const tags = useMemo(() => {
    const base = Array.from(new Set(projects.flatMap((p) => p.tags)));
    const hasBest = base.includes('Best');
    return ['All', ...(hasBest ? ['Best'] : []), ...base.filter((t) => t !== 'Best')];
  }, []);
  const list = useMemo(() => {
    const filtered = projects.filter((p) => filter === 'All' || p.tags.includes(filter));
    return filter === 'Best' ? filtered.slice(0, 6) : filtered;
  }, [filter]);

  const onOpen = useCallback((p: typeof projects[number]) => {
    if (p.href || p.repo) return; // external link will be used instead
    setSelected(p);
  }, []);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelected(null);
  }, []);

  return (
    <section id="projects" className="relative py-14" onKeyDown={onKeyDown}>
      <div className="container-px mx-auto" aria-labelledby="projects-heading">
        <Reveal className="mb-6 flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" /> My Portfolio
          </div>
          <h2 id="projects-heading" className="max-w-3xl text-3xl font-semibold sm:text-4xl">Successful Thumbnail Designs</h2>
          <p className="max-w-2xl text-zinc-300">Check out some of my recent thumbnail designs that helped creators increase their views and engagement significantly.</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 text-sm" role="tablist" aria-label="Filter gallery by tag">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full border px-3 py-1 ${filter === t ? 'bg-white/10 border-white/20' : 'border-white/10 text-zinc-300'}`}
                aria-pressed={filter === t}
              >
                {t}
              </button>
            ))}
          </div>
    </Reveal>
  <Reveal className="mx-auto max-w-7xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, idx) => {
            const clickable = Boolean(p.href || p.repo);
            const Wrapper: React.ElementType = clickable ? 'a' : 'button';
            const wrapperProps: any = clickable
              ? { href: p.href || p.repo, target: '_blank', rel: 'noreferrer noopener' }
              : { type: 'button', onClick: () => onOpen(p) };
            return (
              <Wrapper key={p.title} {...wrapperProps} className={!clickable ? 'text-left' : undefined}>
                <Reveal delay={idx * 0.05}>
                  <div className="thumbnail-3d group rounded-xl overflow-hidden border border-white/5 bg-white/5 shadow-lg transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="aspect-video w-full object-cover transition-all duration-700 ease-out will-change-transform group-hover:scale-110 group-hover:brightness-110" 
                      loading="lazy" 
                      decoding="async" 
                    />
                  </div>
                </Reveal>
              </Wrapper>
            );
          })}
          {list.length === 0 && (
            <div className="col-span-full text-center text-sm text-zinc-400">No thumbnails match this filter.</div>
          )}
  </Reveal>
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-6"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between text-zinc-200">
              <div className="text-lg font-medium">{selected.title}</div>
              <button onClick={() => setSelected(null)} className="rounded bg-white/10 px-3 py-1 text-sm hover:bg-white/20">Close</button>
            </div>
            {selected.image && (
              <img src={selected.image} alt={selected.title} className="w-full rounded-xl border border-white/10" />
            )}
            {selected.description && (
              <p className="mt-3 text-sm text-zinc-300">{selected.description}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
