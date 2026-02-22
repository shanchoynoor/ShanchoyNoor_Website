'use client';

import { motion, type Variants } from 'framer-motion';
import { MapPin, Github, Linkedin, Facebook, Twitter, Youtube } from 'lucide-react';
import Button from '@/components/ui/Button';
import GridOverlay from '@/components/effects/GridOverlay';
import { HERO, SITE_METADATA } from '@/lib/constants';

/* Animation Variants - Typed */
const textReveal: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const barExpand: Variants = {
    hidden: { scaleX: 0 },
    show: {
        scaleX: 1,
        transition: { duration: 0.8, ease: "circOut" }
    }
};

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
            <GridOverlay />

            {/* Hero Content Container - Aligned with About section width and grid */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 md:pl-20 !lg:pl-28 pt-24 md:pt-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-12 items-center -mt-16 md:-mt-24">

                {/* Left Column: Identity Packet and Prose (7/12 cols to match About) */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    transition={{ staggerChildren: 0.1 }}
                    className="col-span-1 lg:col-span-7 space-y-4 md:space-y-5"
                >
                    {/* Status Badge */}
                    <motion.div variants={textReveal} className="inline-flex items-center gap-2 px-3 py-1 border border-accent-dim bg-bg-panel/50 backdrop-blur-sm rounded-none">
                        <span className="w-2 h-2 bg-green-500 animate-pulse shadow-[0_0_10px_#0f0]" />
                        <span className="font-tech text-xs text-text-bright tracking-widest">SYSTEM: ONLINE // AVAILABLE FOR HIRE</span>
                    </motion.div>

                    {/* Identity Block: Biometric Photo + Name + Title */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8 pb-3">
                        {/* Biometric Photo Placeholder */}
                        <motion.div
                            variants={textReveal}
                            className="relative group w-28 h-36 md:w-32 md:h-40 shrink-0"
                        >
                            {/* High-tech frame */}
                            <div className="absolute inset-0 border border-accent-primary/20 group-hover:border-accent-primary/40 transition-colors" />
                            <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-accent-primary" />
                            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-accent-primary" />

                            {/* Placeholder Content */}
                            <div className="absolute inset-2 bg-accent-primary/5 flex items-center justify-center overflow-hidden">
                                {/* Central Icon Placeholder */}
                                <div className="text-accent-primary/10 group-hover:text-accent-primary/25 transition-colors">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>

                                {/* Animated Scanning Line */}
                                <motion.div
                                    animate={{ top: ['0%', '100%', '0%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                                    className="absolute left-0 right-0 h-px bg-accent-primary/40 shadow-[0_0_8px_var(--accent-primary)] z-10"
                                />
                            </div>

                            {/* Metadata labels - REMOVED */}
                        </motion.div>

                        {/* Name and Title Cluster */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left pt-0 ml-0 md:ml-4">
                            <div className="relative">
                                <motion.h1
                                    variants={textReveal}
                                    className="font-display text-2xl md:text-4xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-bright to-text-dim leading-none whitespace-nowrap"
                                >
                                    SHANCHOY NOOR
                                </motion.h1>
                                {/* Glitch Overlay Text (Decorative) */}
                                <h1 className="absolute top-0 left-0 font-display text-2xl md:text-4xl lg:text-4xl font-bold text-accent-primary opacity-10 blur-sm pointer-events-none glitch-hover leading-none whitespace-nowrap" aria-hidden="true">
                                    SHANCHOY NOOR
                                </h1>
                            </div>

                            {/* Repositioned Professional Title */}
                            <motion.div
                                variants={textReveal}
                                className="mt-4 flex flex-col items-center md:items-start"
                            >
                                <div className="h-0.5 w-12 bg-accent-primary/40 mb-2" />
                                <p className="font-tech text-[10px] md:text-xs text-accent-primary tracking-[0.2em] font-medium uppercase">
                                    {HERO.eyebrow}
                                </p>
                                {/* Location Block */}
                                <div className="mt-2 flex flex-col gap-1.5 items-center md:items-start">
                                    <div className="flex items-center gap-1.5 font-tech text-[10px] text-accent-primary/70 uppercase tracking-widest">
                                        <MapPin size={10} className="text-accent-primary animate-pulse" />
                                        Dhaka, Bangladesh
                                    </div>
                                    <div className="font-tech text-[8.5px] md:text-[9.5px] text-text-bright tracking-widest leading-relaxed">
                                        // LAT: 23.8340 // LONG: 90.3620
                                    </div>

                                    {/* Social Links */}
                                    <motion.div variants={textReveal} className="flex gap-5 mt-3">
                                        {[
                                            { icon: Github, href: SITE_METADATA.social.github },
                                            { icon: Linkedin, href: SITE_METADATA.social.linkedin },
                                            { icon: Facebook, href: "#" },
                                            { icon: Twitter, href: SITE_METADATA.social.twitter },
                                            { icon: Youtube, href: "#" }
                                        ].map((soc, i) => (
                                            <a key={i} href={soc.href} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent-primary transition-colors hover:scale-110 duration-200">
                                                <soc.icon size={16} />
                                            </a>
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div variants={barExpand} className="h-px w-24 bg-accent-primary/60 origin-left" />

                    <motion.h2 variants={textReveal} className="font-tech text-base md:text-lg lg:text-xl text-accent-primary max-w-lg leading-snug uppercase tracking-wider">
                        &gt; {HERO.tagline}
                    </motion.h2>

                    <motion.p variants={textReveal} className="text-text-bright text-xs md:text-sm max-w-md leading-snug">
                        Architecting high-performance systems. Integrating AI pipelines.
                        Building the next generation of web infrastructure.
                    </motion.p>

                    <motion.div variants={textReveal} className="flex gap-4 pt-2">
                        <Button variant="primary" href="#projects">INITIATE_PROTOCOL</Button>
                        <Button variant="ghost" href="#architecture">VIEW_SYSTEMS</Button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Visual Data Representation (Working Projects) (5/12 cols to match About) */}
                <div className="hidden lg:flex flex-col items-end relative lg:h-[420px] col-span-1 lg:col-span-5 pr-4 lg:pr-0 xl:pr-12 mt-12 lg:mt-0">
                    {/* Decorative HUD Elements - Fixed to right side */}
                    <div className="absolute top-0 right-0 w-[1px] h-20 bg-accent-primary/40" />
                    <div className="absolute top-20 right-0 w-4 h-[1px] bg-accent-primary/40" />
                    <div className="absolute bottom-0 right-0 w-[10px] h-[10px] border border-accent-secondary/50" />

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="font-tech text-xs text-text-bright space-y-6 opacity-80 w-full max-w-sm"
                    >
                        <div className="border-b border-border-dim pb-2 mb-4 flex justify-between items-center">
                            <span className="text-accent-primary">WORKING_ON</span>
                            <span className="text-[10px] text-text-bright">ACTIVE_SPRINT: 2025.02</span>
                        </div>

                        <div className="space-y-4">
                            <div className="group">
                                <div className="flex justify-between mb-1">
                                    <span className="text-accent-primary">[PROJECT.01]</span>
                                    <span className="text-accent-primary/50 text-[10px]">IN_PROGRESS</span>
                                </div>
                                <p className="text-text-bright font-medium text-sm">Choy AI Platform</p>
                                <p className="text-[10px] tracking-widest text-text-bright/90">NEXT.JS // OPENAI // SUPABASE // DOCKER</p>
                            </div>

                            <div className="group">
                                <div className="flex justify-between mb-1">
                                    <span className="text-accent-secondary">[PROJECT.02]</span>
                                    <span className="text-accent-secondary/50 text-[10px]">MAINTENANCE</span>
                                </div>
                                <p className="text-text-bright font-medium text-sm">AI News Telegram Bot</p>
                                <p className="text-[10px] tracking-widest text-text-bright/90">PYTHON // TELEGRAM_API // CRON</p>
                            </div>
                        </div>

                        <div className="pt-4 space-y-2">
                            <p className="text-accent-secondary flex items-center gap-2">
                                <span className="w-1 h-1 bg-accent-secondary rounded-full animate-pulse" />
                                AI_ORCHESTRATION: NOMINAL
                            </p>
                            <p>[*] REACT_SERVER_COMPONENTS: ENABLED</p>
                            <p>[*] SYSTEM_LATENCY: 24MS</p>
                        </div>

                        {/* Animated Code Block */}
                        <div className="mt-8 p-4 bg-bg-surface border border-border-dim font-mono text-[9px] text-text-code overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-12 h-[1px] bg-accent-primary/20" />
                            <span className="typing-cursor block leading-normal">
                                warn(user): 'Efficiency critical. Executing optimized sequence.'_
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Decorative Ticker */}
            <div className="absolute bottom-0 w-full h-12 border-t border-border-dim bg-bg-panel/80 backdrop-blur flex items-center px-6">
                <div className="flex gap-12 font-tech text-[10px] text-text-bright animate-marquee whitespace-nowrap">
                    <span>// SCROLL FOR DATA</span>
                    <span>// SECTOR 01: ABOUT</span>
                    <span>// SECTOR 02: SKILLS</span>
                    <span>// SECTOR 03: PROJECTS</span>
                    <span>// SECTOR 04: MISSION LOGS</span>
                    <span>// SECTOR 05: ARCHITECTURE</span>
                </div>
            </div>
        </section>
    );
}
