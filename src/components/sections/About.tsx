'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import { ABOUT_PARAGRAPHS, ABOUT_STATS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decorative Element: Subtle Sensor Ring Fragment */}
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 border border-accent-primary/5 rounded-full pointer-events-none">
                <div className="absolute inset-0 border-t border-accent-primary/10 rounded-full animate-[spin_20s_linear_infinite]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <SectionLabel label="01" title="Strategic_Briefing" />

                <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
                    {/* Left Column: Command Console / Prose */}
                    <motion.div
                        className="lg:col-span-7 relative"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        {/* Decorative side marking */}
                        <div className="absolute -left-8 top-0 bottom-0 flex flex-col items-center gap-1 opacity-20 pointer-events-none hidden md:flex">
                            <div className="w-px h-full bg-gradient-to-b from-accent-primary via-accent-primary to-transparent" />
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="font-tech text-xs scale-75 text-accent-primary leading-none">0{i + 1}</div>
                            ))}
                        </div>

                        <div className="space-y-8 pl-4 md:pl-0">
                            {ABOUT_PARAGRAPHS.map((paragraph, i) => (
                                <motion.div key={i} variants={fadeUp} className="relative group">
                                    {/* Paragraph Indicator */}
                                    <div className="absolute -left-4 top-1.5 w-1 h-3 bg-accent-primary/30 group-hover:bg-accent-primary transition-colors hidden md:block" />

                                    <p className="text-text-bright/90 text-[17px] leading-relaxed font-light tracking-wide">
                                        {paragraph}
                                    </p>

                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: System Telemetry / Stats */}
                    <motion.div
                        className="lg:col-span-5"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeUp}>
                            <TechPanel title="Profile_Telemetry" sysId="STARK_BIO_SCAN.01" className="h-full">
                                <div className="grid grid-cols-2 gap-px bg-border-dim/20 mt-2">
                                    {ABOUT_STATS.map((stat, i) => (
                                        <div
                                            key={stat.label}
                                            className="bg-bg-surface p-6 flex flex-col items-center justify-center text-center gap-2 group hover:bg-accent-primary/5 transition-colors relative"
                                        >
                                            {/* Tech corner accent for each cell */}
                                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent-primary/20 group-hover:border-accent-primary/50 transition-colors" />

                                            <span className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent-primary to-accent-primary/50 group-hover:animate-pulse">
                                                {stat.value}
                                            </span>
                                            <span className="font-tech text-[10px] text-text-bright uppercase tracking-[0.15em] leading-tight max-w-[100px]">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Console Readout */}
                                <div className="mt-6 pt-4 border-t border-border-dim/30 font-tech text-[9px] text-text-bright flex justify-between uppercase tracking-widest">
                                    <span>STATUS: OPTIMAL</span>
                                    <span>SYNC: 100%</span>
                                </div>
                            </TechPanel>

                            {/* Supplementary Data Block */}
                            <div className="mt-4 flex gap-4">
                                <div className="flex-1 h-1 bg-accent-primary/20" />
                                <div className="flex-1 h-1 bg-accent-primary/5" />
                                <div className="flex-1 h-1 bg-accent-primary/2" />
                            </div>

                            {/* Experience Evolution Timeline */}
                            <div className="mt-8 relative hidden sm:block">
                                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent -translate-y-1/2" />
                                <div className="flex justify-between items-center relative">
                                    {[
                                        "Trading",
                                        "Networking",
                                        "Video Editing",
                                        "UI/UX & Graphics",
                                        "Backend/Frontend",
                                        "Business"
                                    ].map((exp, i, arr) => (
                                        <div key={exp} className="relative group flex flex-col items-center">
                                            {/* Connecting node */}
                                            <div className="w-1.5 h-1.5 rounded-full bg-border-dim border border-accent-primary/50 group-hover:bg-accent-primary group-hover:shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all z-10 mb-2" />
                                            {/* Label */}
                                            <span className="font-tech text-text-bright/40 group-hover:text-accent-primary text-[9px] tracking-widest uppercase transition-colors whitespace-nowrap absolute top-4 text-center w-24 -ml-12 left-1/2">
                                                {exp}
                                            </span>
                                            {/* Accent line pointing up */}
                                            <div className="w-px h-3 bg-accent-primary/0 group-hover:bg-accent-primary/50 absolute bottom-1.5 left-1/2 -translate-x-1/2 transition-colors z-0" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center mt-12 font-tech text-[10px] text-accent-primary/60 uppercase tracking-[0.3em]">
                                    Career shift trajectory
                                </div>
                            </div>

                            {/* Mobile Experience List (Vertical) */}
                            <div className="mt-6 space-y-3 relative sm:hidden">
                                <div className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent" />
                                {[
                                    "Trading",
                                    "Networking",
                                    "Video Editing",
                                    "UI/UX & Graphics",
                                    "Backend/Frontend",
                                    "Business"
                                ].map((exp, i) => (
                                    <div key={exp} className="flex items-center gap-4 relative group">
                                        <div className="w-2.5 h-2.5 rounded-full bg-bg-surface border border-accent-primary/40 group-hover:bg-accent-primary group-hover:shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all z-10" />
                                        <span className="font-tech text-text-bright/60 group-hover:text-accent-primary text-[10px] tracking-widest uppercase transition-colors">
                                            {exp}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
