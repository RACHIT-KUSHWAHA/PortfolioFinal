import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

type Action = {
  id: string;
  label: string;
  hint?: string;
  perform: () => void;
};

export function useCommandPalette(actions: Action[]) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const list = useMemo(() => {
    if (!query) return actions;
    const q = query.toLowerCase();
    return actions
      .map((a) => ({ a, score: fuzzyScore(a.label.toLowerCase(), q) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((x) => x.a);
  }, [actions, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return { open, setOpen, query, setQuery, list };
}

export function CommandPaletteUI({
  open,
  setOpen,
  query,
  setQuery,
  list,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  query: string;
  setQuery: (v: string) => void;
  list: Action[];
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 10);
  }, [open]);

  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-24">
      <button className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} aria-label="Close palette" />
      <div className="relative w-full max-w-xl rounded-xl border border-white/10 bg-[#0b0b10] shadow-2xl">
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search… (Ctrl/Cmd+K)"
          className="w-full border-b border-white/10 bg-transparent px-4 py-3 text-lg outline-none placeholder:text-zinc-400"
        />
        <ul className="max-h-80 overflow-auto p-2">
          {list.map((a) => (
            <li key={a.id}>
              <button
                onClick={() => {
                  a.perform();
                  setOpen(false);
                }}
                className={clsx(
                  'w-full rounded-lg px-3 py-2 text-left hover:bg-white/5 focus:bg-white/5 outline-none'
                )}
              >
                <div className="text-zinc-100">{a.label}</div>
                {a.hint && <div className="text-xs text-zinc-400">{a.hint}</div>}
              </button>
            </li>
          ))}
          {!list.length && (
            <li className="px-3 py-6 text-center text-zinc-500">No results</li>
          )}
        </ul>
      </div>
    </div>,
    document.body
  );
}

function fuzzyScore(text: string, query: string) {
  // Very small fuzzy scoring; contiguous matches rank higher
  let ti = 0;
  let score = 0;
  let streak = 0;
  for (let qi = 0; qi < query.length; qi++) {
    const q = query[qi];
    let found = false;
    while (ti < text.length) {
      if (text[ti] === q) {
        score += 1 + streak; // reward streaks
        streak++;
        found = true;
        ti++;
        break;
      }
      streak = 0;
      ti++;
    }
    if (!found) return 0;
  }
  return score;
}
