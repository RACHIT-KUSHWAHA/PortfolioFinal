import React, { useState } from 'react';
import { MagneticButton } from '../components/MagneticButton';
import { socials } from '../data/content';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    try {
  const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: payload.name || '',
          email: payload.email || '',
          niche: payload.niche || '',
          message: payload.message || '',
          honeypot: payload._honey || '',
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) throw new Error('Failed');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  }
  return (
    <section id="contact" className="py-20">
      <div className="container-px mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: copy + quick contacts */}
          <div>
            <h2 className="text-3xl font-semibold">Boost your video CTR</h2>
            <p className="mt-3 max-w-md text-zinc-300">Eye‑catching thumbnails • Brand‑aligned • Delivered in 24–48h. Share your idea and I’ll reply within hours.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <MagneticButton key={s.label} href={s.url} ariaLabel={s.label} title={s.label}>{s.label}</MagneticButton>
              ))}
              <MagneticButton href="mailto:kushwaharachit80@gmail.com" ariaLabel="Start a project via email" title="Start a project" className="bg-accent text-white border-accent/40">Start a project</MagneticButton>
            </div>

            <div className="mt-8 space-y-3 text-sm text-zinc-400">
              <p>• 24–48h delivery for most thumbnails</p>
              <p>• Unlimited revisions on Creator/Monthly plans</p>
              <p>• Upload‑ready files optimized for YouTube</p>
            </div>
          </div>

          {/* Right: form */}
          <form className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6" onSubmit={onSubmit}>
            {/* Honeypot (spam trap) */}
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm text-zinc-300">Name</label>
                <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-white/10 bg-bg/80 px-3 py-2 outline-none focus:border-accent/50" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-zinc-300">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-bg/80 px-3 py-2 outline-none focus:border-accent/50" />
              </div>
            </div>
            <div>
              <label htmlFor="niche" className="text-sm text-zinc-300">Channel niche</label>
              <input id="niche" name="niche" type="text" placeholder="Tech, Fitness, Vlog, Gaming…" className="mt-1 w-full rounded-lg border border-white/10 bg-bg/80 px-3 py-2 outline-none focus:border-accent/50" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-zinc-300">Project details</label>
              <textarea id="message" name="message" rows={6} required className="mt-1 w-full rounded-lg border border-white/10 bg-bg/80 px-3 py-2 outline-none focus:border-accent/50" placeholder="Share your niche, deadline, and ideas..." />
            </div>
            <div className="flex items-center justify-between text-sm text-zinc-400">
              <span className="min-h-[20px]">
                {status === 'sent' && <span className="text-emerald-400">Message sent!</span>}
                {status === 'error' && <span className="text-rose-400">Failed to send. Try again.</span>}
                {status === 'idle' && 'Response in under 12 hours.'}
                {status === 'sending' && 'Sending…'}
              </span>
              <MagneticButton type="submit" ariaLabel="Send message" title="Send message" className="bg-accent text-white border-accent/40">
                {status === 'sending' ? 'Sending…' : 'Send'}
              </MagneticButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
