'use client';

import { motion, type Variants } from 'framer-motion';
import Button from '@/components/ui/Button';
import GridOverlay from '@/components/effects/GridOverlay';
import { HERO } from '@/lib/constants';

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

            {/* Hero Content Container - HUD Style */}
            <div className="relative z-10 max-w-5xl w-full px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Column: Text Data */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    transition={{ staggerChildren: 0.1 }}
                    className="space-y-6"
                >
                    {/* Status Badge */}
                    <motion.div variants={textReveal} className="inline-flex items-center gap-2 px-3 py-1 border border-accent-dim bg-bg-panel/50 backdrop-blur-sm rounded-none">
                        <span className="w-2 h-2 bg-green-500 animate-pulse shadow-[0_0_10px_#0f0]" />
                        <span className="font-tech text-xs text-text-dim tracking-widest">SYSTEM: ONLINE // AVAILABLE FOR HIRE</span>
                    </motion.div>

                    {/* Main Title */}
                    <div className="relative">
                        <motion.h1
                            variants={textReveal}
                            className="font-display text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-bright to-text-dim leading-none"
                        >
                            SHANCHOY
                            <br />
                            NOOR
                        </motion.h1>
                        {/* Glitch Overlay Text (Decorative) */}
                        <h1 className="absolute top-0 left-0 font-display text-5xl md:text-7xl font-bold text-accent-primary opacity-10 blur-sm pointer-events-none glitch-hover leading-none" aria-hidden="true">
                            SHANCHOY
                            <br />
                            NOOR
                        </h1>
                    </div>

                    <motion.div variants={barExpand} className="h-px w-32 bg-accent-primary origin-left" />

                    <motion.h2 variants={textReveal} className="font-tech text-lg md:text-xl text-accent-primary max-w-lg leading-tight">
                        &gt; {HERO.tagline}
                    </motion.h2>

                    <motion.p variants={textReveal} className="text-text-dim text-sm md:text-base max-w-md leading-relaxed opacity-80">
                        Architecting high-performance systems. Integrating AI pipelines.
                        Building the next generation of web infrastructure.
                    </motion.p>

                    <motion.div variants={textReveal} className="flex gap-4 pt-4">
                        <Button variant="primary" href="#projects">INITIATE_PROTOCOL</Button>
                        <Button variant="ghost" href="#architecture">VIEW_SYSTEMS</Button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Visual Data Representation (Working Projects) */}
                <div className="hidden md:block relative h-[420px] w-full border-l border-border-dim pl-12">
                    {/* Decorative HUD Elements */}
                    <div className="absolute top-0 left-0 w-2 h-24 bg-accent-primary" />
                    <div className="absolute top-24 -left-[1px] w-6 h-px bg-accent-primary" />
                    <div className="absolute bottom-0 -left-[5px] w-[12px] h-[12px] border border-accent-secondary" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="font-tech text-xs text-text-dim space-y-6 opacity-80"
                    >
                        <div className="border-b border-border-dim pb-2 mb-4 flex justify-between items-center">
                            <span>WORKING_ON</span>
                            <span className="text-[10px] opacity-40">ACTIVE_SPRINT: 2025.02</span>
                        </div>

                        <div className="space-y-4">
                            <div className="group">
                                <div className="flex justify-between mb-1">
                                    <span className="text-accent-primary">[PROJECT.01]</span>
                                    <span className="text-accent-primary/50 text-[10px]">IN_PROGRESS</span>
                                </div>
                                <p className="text-text-bright font-medium text-sm">Choy AI Platform</p>
                                <p className="text-[10px] tracking-widest text-text-dim/60">NEXT.JS // OPENAI // SUPABASE // DOCKER</p>
                            </div>

                            <div className="group">
                                <div className="flex justify-between mb-1">
                                    <span className="text-accent-secondary">[PROJECT.02]</span>
                                    <span className="text-accent-secondary/50 text-[10px]">MAINTENANCE</span>
                                </div>
                                <p className="text-text-bright font-medium text-sm">AI News Telegram Bot</p>
                                <p className="text-[10px] tracking-widest text-text-dim/60">PYTHON // TELEGRAM_API // CRON</p>
                            </div>
                        </div>

                        <div className="pt-4 space-y-2 opacity-60">
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
                <div className="flex gap-12 font-tech text-[10px] text-text-dim animate-marquee whitespace-nowrap">
                    <span>// SCROLL FOR DATA</span>
                    <span>// SECTOR 01: ABOUT</span>
                    <span>// SECTOR 02: SKILLS</span>
                    <span>// SECTOR 03: PROJECTS</span>
                    <span>// SECTOR 04: ARCHITECTURE</span>
                </div>
            </div>
        </section>
    );
}
