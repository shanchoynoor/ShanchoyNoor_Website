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
                            className="font-display text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-bright to-text-dim leading-none"
                        >
                            SHANCHOY
                            <br />
                            NOOR
                        </motion.h1>
                        {/* Glitch Overlay Text (Decorative) */}
                        <h1 className="absolute top-0 left-0 font-display text-6xl md:text-8xl font-bold text-accent-primary opacity-10 blur-sm pointer-events-none glitch-hover leading-none" aria-hidden="true">
                            SHANCHOY
                            <br />
                            NOOR
                        </h1>
                    </div>

                    <motion.div variants={barExpand} className="h-px w-32 bg-accent-primary origin-left" />

                    <motion.h2 variants={textReveal} className="font-tech text-xl md:text-2xl text-accent-primary">
                        &gt; {HERO.tagline}
                    </motion.h2>

                    <motion.p variants={textReveal} className="text-text-dim max-w-md leading-relaxed">
                        Architecting high-performance systems. Integrating AI pipelines.
                        Building the next generation of web infrastructure.
                    </motion.p>

                    <motion.div variants={textReveal} className="flex gap-4 pt-4">
                        <Button variant="primary" href="#projects">INITIATE_PROTOCOL</Button>
                        <Button variant="ghost" href="#architecture">VIEW_SYSTEMS</Button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Visual Data Representation (Abstract Code/Stats) */}
                <div className="hidden md:block relative h-[400px] w-full border-l border-border-dim pl-12">
                    {/* Decorative HUD Elements */}
                    <div className="absolute top-0 left-0 w-2 h-20 bg-accent-primary" />
                    <div className="absolute top-20 -left-[1px] w-4 h-px bg-accent-primary" />
                    <div className="absolute bottom-0 -left-[5px] w-[10px] h-[10px] border border-accent-secondary" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="font-tech text-xs text-text-dim space-y-2 opacity-70"
                    >
                        <p className="border-b border-border-dim pb-2 mb-4">SYSTEM_DIAGNOSTICS</p>
                        <div className="flex justify-between">
                            <span>CORE.CPU</span>
                            <span className="text-accent-primary">32 THREADS [ACTIVE]</span>
                        </div>
                        <div className="flex justify-between">
                            <span>MEM.ALLOC</span>
                            <span className="text-accent-warning">64 GB // OPTIMAL</span>
                        </div>
                        <div className="flex justify-between">
                            <span>NET.UPLINK</span>
                            <span>10.0 GBIT/S</span>
                        </div>
                        <br />
                        <p className="text-accent-secondary">[!] AI_PIPELINE: INITIALIZED</p>
                        <p>[*] NEXT.JS: V14.2 (TURBO)</p>
                        <p>[*] REACT: SERVER_COMPONENTS</p>
                        <p>[*] STACK: TYPESCRIPT_STRICT</p>

                        {/* Animated Code Block */}
                        <div className="mt-8 p-4 bg-bg-surface border border-border-dim font-mono text-[10px] text-text-code overflow-hidden">
                            <span className="typing-cursor">
                                warn(user): 'Passive observation detected. Recommend immediate engagement.'
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
