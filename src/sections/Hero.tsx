import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { profile, socials } from '../data/content';

export function Hero() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Prevent parent scroll when scrolling inside mockup
  const handleWheel = (e: React.WheelEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const isAtTop = scrollTop === 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

    // Prevent page scroll when scrolling inside the container
    if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
      e.stopPropagation();
    }
  };

  // Comprehensive thumbnail showcase data - all categories
  const thumbnailShowcase = [
    // Fitness thumbnails
    { img: '/images/fitness1.jpg', category: 'Fitness', color: 'from-red-500 to-orange-500', title: 'Ultimate Fitness Transformation Guide', views: '1.2M', time: '2 days', duration: '12:34' },
    { img: '/images/fitness2.jpg', category: 'Fitness', color: 'from-red-500 to-orange-500', title: '30 Day Workout Challenge Results', views: '856K', time: '5 days', duration: '15:20' },
    { img: '/images/fitness3.jpg', category: 'Fitness', color: 'from-red-500 to-orange-500', title: 'Best Home Workout Equipment 2025', views: '2.1M', time: '1 week', duration: '10:45' },
    
    // Gaming thumbnails
    { img: '/images/gaming1.jpg', category: 'Gaming', color: 'from-purple-500 to-pink-500', title: 'Epic Gaming Moments Compilation', views: '3.4M', time: '3 days', duration: '18:32' },
    { img: '/images/gaming2.jpg', category: 'Gaming', color: 'from-purple-500 to-pink-500', title: 'Top 10 Gaming Tips You Need', views: '1.8M', time: '1 week', duration: '14:18' },
    { img: '/images/gaming3.jpg', category: 'Gaming', color: 'from-purple-500 to-pink-500', title: 'New Game Release Review & Gameplay', views: '2.7M', time: '4 days', duration: '22:15' },
    
    // Tech thumbnails
    { img: '/images/tech1.jpg', category: 'Tech', color: 'from-blue-500 to-cyan-500', title: 'Latest Tech Gadgets Review 2025', views: '1.5M', time: '2 days', duration: '16:42' },
    { img: '/images/tech2.jpg', category: 'Tech', color: 'from-blue-500 to-cyan-500', title: 'iPhone vs Android: Ultimate Comparison', views: '4.2M', time: '1 week', duration: '19:30' },
    { img: '/images/tech3.jpg', category: 'Tech', color: 'from-blue-500 to-cyan-500', title: 'Best Budget Laptops for Students', views: '989K', time: '6 days', duration: '13:25' },
    
    // Finance/Earning thumbnails
    { img: '/images/earning1.jpg', category: 'Finance', color: 'from-green-500 to-emerald-500', title: 'How I Made $10K Online in 30 Days', views: '2.3M', time: '3 days', duration: '20:15' },
    { img: '/images/earning2.jpg', category: 'Finance', color: 'from-green-500 to-emerald-500', title: 'Passive Income Strategies That Work', views: '1.6M', time: '1 week', duration: '17:48' },
    { img: '/images/earning3.jpg', category: 'Finance', color: 'from-green-500 to-emerald-500', title: 'Investing for Beginners Complete Guide', views: '3.1M', time: '5 days', duration: '24:30' },
    
    // Vlog thumbnails
    { img: '/images/vlog1.jpg', category: 'Vlog', color: 'from-yellow-500 to-amber-500', title: 'Day in My Life as Content Creator', views: '876K', time: '4 days', duration: '11:22' },
    { img: '/images/vlog2.jpg', category: 'Vlog', color: 'from-yellow-500 to-amber-500', title: 'Travel Vlog: Amazing Adventure', views: '1.9M', time: '2 weeks', duration: '15:55' },
    { img: '/images/vlog3.jpg', category: 'Vlog', color: 'from-yellow-500 to-amber-500', title: 'Behind The Scenes: My Studio Setup', views: '1.1M', time: '1 week', duration: '13:10' },
  ];

  return (
    <section id="home" className="relative isolate overflow-hidden min-h-screen flex items-start pt-28 pb-8">
      {/* Animated gradient orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container-px mx-auto relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content Grid - Split hero */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left: Text Content - Moved down with more padding */}
            <div className="text-center lg:text-left space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] text-zinc-300 backdrop-blur-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
                </span>
                Available for Projects
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-white">YouTube Thumbnails</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
                  That Get Clicked
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Professional thumbnail designer specializing in high-CTR designs. 
                Worked with creators across fitness, gaming, tech, and finance niches.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0 py-3"
              >
                {[
                  { value: '500+', label: 'Thumbnails' },
                  { value: '50+', label: 'Clients' },
                  { value: '4.9★', label: 'Rating' },
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group rounded-lg px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    View Portfolio
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1"
              >
                <a aria-label="Email" href={socials.find(s => s.label === 'Email')?.url} className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a aria-label="Phone" href={socials.find(s => s.label === 'Phone')?.url} className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </a>
                <a aria-label="LinkedIn" href={socials.find(s => s.label === 'LinkedIn')?.url} className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a aria-label="Instagram" href={socials.find(s => s.label === 'Instagram')?.url} className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </a>
                <a aria-label="Twitter" href={socials.find(s => s.label === 'Twitter')?.url || socials.find(s => s.label === 'X')?.url} className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20" target="_blank" rel="noreferrer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.85.38-1.75.64-2.7.75a4.7 4.7 0 0 0 2.07-2.6c-.9.54-1.9.93-2.98 1.14a4.7 4.7 0 0 0-8 4.28A13.3 13.3 0 0 1 1.64 4.86a4.7 4.7 0 0 0 1.45 6.27 4.65 4.65 0 0 1-2.12-.58v.06a4.7 4.7 0 0 0 3.77 4.6 4.68 4.68 0 0 1-2.12.08 4.7 4.7 0 0 0 4.38 3.26 9.42 9.42 0 0 1-5.83 2.01c-.38 0-.75-.02-1.12-.06a13.27 13.27 0 0 0 7.2 2.11c8.64 0 13.36-7.16 13.36-13.37 0-.2 0-.4-.02-.6a9.55 9.55 0 0 0 2.34-2.43z"/>
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Right: YouTube Mockup (No Laptop Frame) */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-2xl mx-auto"
              >
                {/* YouTube Interface - Direct Display */}
                <div 
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    background: '#0f0f0f',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.1)',
                  }}
                >
                  {/* YouTube Header Bar */}
                  <div className="bg-[#0f0f0f] px-4 sm:px-5 py-3 flex items-center gap-3 sm:gap-4 border-b border-white/[0.08]">
                    {/* YouTube Logo - LARGER */}
                    <div className="flex items-center gap-2">
                      <svg className="w-12 sm:w-14 h-8 sm:h-9" viewBox="0 0 90 20" fill="none">
                        <path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 0 14.285 0 14.285 0C14.285 0 5.35042 0 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C0 5.35042 0 10 0 10C0 10 0 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"/>
                        <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"/>
                      </svg>
                      <span className="text-white text-base sm:text-lg font-semibold tracking-tight">YouTube</span>
                      <span className="text-[10px] sm:text-[11px] text-zinc-500">IN</span>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="flex-1 max-w-xs">
                      <div className="bg-[#121212] border border-[#303030] rounded-full px-2 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-[9px] sm:text-[10px] text-zinc-500">Search</span>
                      </div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-zinc-700/50 flex items-center justify-center text-[9px]">
                        🔔
                      </div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                    </div>
                  </div>

                  {/* YouTube Feed Content */}
                  <div className="bg-[#0f0f0f] flex flex-col" style={{ height: '500px' }}>
                    {/* Category Chips */}
                    <div className="flex gap-1.5 px-3 sm:px-4 pt-2 sm:pt-3 pb-2 overflow-x-auto scrollbar-hide border-b border-white/5 flex-shrink-0">
                      {['All', 'Music', 'Gaming', 'Live', 'News'].map((cat, i) => (
                        <div
                          key={cat}
                          className={`px-2 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-medium whitespace-nowrap transition-colors ${
                            i === 0 
                              ? 'bg-white text-black' 
                              : 'bg-[#272727] text-white'
                          }`}
                        >
                          {cat}
                        </div>
                      ))}
                    </div>

                    {/* Scrollable Thumbnail Grid - 2 COLUMNS */}
                    <div 
                      ref={scrollContainerRef}
                      onWheel={handleWheel}
                      className="flex-1 overflow-y-auto custom-scrollbar px-3 sm:px-4 py-2 sm:py-3"
                      style={{
                        scrollBehavior: 'smooth',
                      }}
                    >
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {thumbnailShowcase.map((thumb, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + (i % 6) * 0.04, duration: 0.3 }}
                            className="group cursor-pointer"
                          >
                            {/* Thumbnail */}
                            <div className="relative aspect-video rounded-md overflow-hidden bg-zinc-900">
                              <img
                                src={thumb.img}
                                alt={`${thumb.category} thumbnail`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              
                              {/* Duration Badge */}
                              <div className="absolute bottom-1 right-1 bg-black/90 text-white text-[8px] font-semibold px-1.5 py-0.5 rounded">
                                {thumb.duration}
                              </div>

                              {/* Hover Glow */}
                              <div className={`absolute -inset-0.5 bg-gradient-to-r ${thumb.color} rounded-md opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 -z-10`}></div>
                            </div>

                            {/* Video Info - Replace text with placeholder lines */}
                            <div className="mt-1.5 flex gap-1.5">
                              <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${thumb.color} flex-shrink-0`}></div>
                              
                              <div className="flex-1 min-w-0 space-y-1">
                                {/* Title placeholder lines */}
                                <div className="space-y-0.5">
                                  <div className="h-2 bg-zinc-700/60 rounded w-full"></div>
                                  <div className="h-2 bg-zinc-700/60 rounded w-3/4"></div>
                                </div>
                                {/* Channel and views placeholder line */}
                                <div className="h-1.5 bg-zinc-800/60 rounded w-1/2"></div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ambient Glow */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-30 pointer-events-none">
                  <div className="absolute top-1/3 left-1/3 w-2/3 h-2/3 bg-purple-500/60 rounded-full"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-2/3 h-2/3 bg-cyan-500/60 rounded-full"></div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, type: 'spring', bounce: 0.4 }}
                  className="absolute -bottom-3 -right-3 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-white z-30 cursor-pointer hover:scale-105 transition-transform shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(34,211,238,0.95) 100%)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 10px 40px rgba(124,58,237,0.6), 0 0 60px rgba(34,211,238,0.3)',
                  }}
                >
                  <span className="flex items-center gap-1">
                    ⚡ High CTR
                  </span>
                </motion.div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
