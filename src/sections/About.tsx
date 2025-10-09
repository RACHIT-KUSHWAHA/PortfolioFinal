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
						<div 
							key={st.label} 
							className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm transition-all duration-500 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10"
						>
							<div className="text-2xl font-semibold text-white transition-all duration-500 group-hover:scale-110">
								<CountUp value={st.number} durationMs={900 + i * 150} />
							</div>
							<div className="text-sm text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">{st.label}</div>
						</div>
					))}
				</div>
			</Reveal>

			<Reveal className="mt-8 grid gap-6 md:grid-cols-2">
				<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
					<h3 className="mb-4 font-medium text-white">Skills</h3>
					<div className="space-y-4">
						{skills?.map((s, idx) => (
							<div key={s.name} className="space-y-2 group">
								<div className="flex justify-between text-sm">
									<span className="transition-colors duration-300 group-hover:text-white">{s.name}</span>
									<span className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">{s.level}%</span>
								</div>
								<div className="h-2 rounded-full bg-white/5 overflow-hidden">
									<div 
										className={`h-2 rounded-full ${s.color} transition-all duration-700 ease-out`}
										style={{ 
											width: `${s.level}%`,
											animation: `slideIn 1s ease-out ${idx * 0.1}s backwards`
										}} 
									/>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-zinc-400 transition-all duration-500 hover:border-white/20 hover:bg-white/10">
					<p className="transition-colors duration-300 group-hover:text-zinc-300">
						I work closely with creators to understand their unique niche, target audience demographics, and content goals. 
						Every thumbnail design is meticulously crafted to align with your brand identity, color palette, and overall content strategy. 
						My process begins with in-depth research into your channel's performance metrics and competitor analysis to identify what drives clicks in your niche.
						<br /><br />
						From initial concept sketches to final delivery, the entire workflow is highly collaborative and transparent. 
						I provide multiple design variations, incorporate your feedback in real-time, and ensure rapid turnaround times without compromising quality. 
						Each thumbnail is optimized for maximum CTR (Click-Through Rate) using proven design principles: bold typography, high contrast, emotional triggers, 
						and strategic placement of key elements. The result? Thumbnails that not only look stunning but consistently deliver measurable results 
						in views, engagement, and channel growth.
					</p>
				</div>
			</Reveal>
		</section>
	);
}

