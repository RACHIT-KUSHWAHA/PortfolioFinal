import React from 'react';
import { Reveal } from '../components/Reveal';
import { CountUp } from '../components/CountUp';
import { skills, stats } from '../data/content';

export function About() {
	return (
			<section id="about" className="container-px mx-auto max-w-6xl py-16 sm:py-20 md:py-28">
				<Reveal className="mx-auto max-w-3xl text-center">
					<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
						About Me
					</span>
					<h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">Who I Am</h2>
					<div className="mt-6 space-y-4 text-balance text-base leading-relaxed text-zinc-400 text-left md:text-center">
						<p>
							I design eye‑catching YouTube thumbnails that make viewers stop and click. With 2+ years and 500+ designs, I know what drives CTR and engagement.
						</p>
						<p>
							I apply visual psychology and proven composition techniques to create thumbnails that look great and perform.
						</p>
					</div>
				</Reveal>

			<Reveal className="mt-8">
				<h3 className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-zinc-300">Quick stats</h3>
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
					{stats?.map((st, i) => (
						<div key={st.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm">
							<div className="text-2xl font-semibold text-white"><CountUp value={st.number} durationMs={900 + i * 150} /></div>
							<div className="text-sm text-zinc-400">{st.label}</div>
						</div>
					))}
				</div>
			</Reveal>

			<Reveal className="mt-8 grid gap-6 md:grid-cols-2">
				<div>
					<h3 className="mb-3 font-medium text-white">Skills</h3>
					<div className="space-y-3">
						{skills?.map((s) => (
							<div key={s.name} className="space-y-1">
								<div className="flex justify-between text-sm">
									<span>{s.name}</span>
									<span className="text-zinc-400">{s.level}%</span>
								</div>
								<div className="h-2 rounded bg-white/5">
									<div className={`h-2 rounded ${s.color}`} style={{ width: `${s.level}%` }} />
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-zinc-400">
					I work closely with creators to understand their niche and audience, ensuring every design aligns with their
					brand and content strategy. From concept to delivery, the process is collaborative, fast, and focused on
					results.
				</div>
			</Reveal>
		</section>
	);
}

