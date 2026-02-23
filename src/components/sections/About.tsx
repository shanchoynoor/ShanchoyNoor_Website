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
                            <div className="mt-16 pb-4 relative hidden sm:block">
                                {/* Connecting Path 1 (Right C-Curve) */}
                                <div className="absolute top-[6px] right-[6%] w-[10%] h-[76px] border-t border-r border-accent-primary/50 text-accent-primary/50 shadow-[0_0_8px_rgba(0,240,255,0.2)] rounded-tr-[1.5rem] rounded-br-[1.5rem] pointer-events-none" />
                                
                                {/* Connecting Path 2 (Left C-Curve) */}
                                <div className="absolute top-[82px] left-[6%] w-[10%] h-[76px] border-b border-l border-accent-primary/50 text-accent-primary/50 shadow-[0_0_8px_rgba(0,240,255,0.2)] rounded-tl-[1.5rem] rounded-bl-[1.5rem] pointer-events-none" />

                                {/* Row 1 */}
                                <div className="relative flex justify-between items-center px-[8%]">
                                    <div className="absolute top-1/2 left-[8%] right-[6%] h-px bg-accent-primary/50 shadow-[0_0_8px_rgba(0,240,255,0.2)] -translate-y-1/2" />
                                    {[
                                        "Business",
                                        "Backend/Frontend",
                                        "UI/UX & Graphics"
                                    ].map((exp) => (
                                        <div key={exp} className="relative group z-10 cursor-default">
                                            <div className="w-3 h-3 rounded-full bg-bg-surface border-[1.5px] border-accent-primary shadow-[0_0_8px_rgba(0,240,255,0.4)] transition-shadow group-hover:shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                                            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-tech text-[10px] tracking-widest uppercase text-text-bright/60 group-hover:text-accent-primary transition-colors">
                                                {exp}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Row 2 */}
                                <div className="relative flex justify-between items-center px-[8%] mt-[64px]">
                                    <div className="absolute top-1/2 left-[6%] right-[6%] h-px bg-accent-primary/50 shadow-[0_0_8px_rgba(0,240,255,0.2)] -translate-y-1/2" />
                                    {[
                                        "Video Editing",
                                        "Networking",
                                        "Trading"
                                    ].map((exp) => (
                                        <div key={exp} className="relative group z-10 cursor-default">
                                            <div className="w-3 h-3 rounded-full bg-bg-surface border-[1.5px] border-accent-primary shadow-[0_0_8px_rgba(0,240,255,0.4)] transition-shadow group-hover:shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                                            <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-tech text-[10px] tracking-widest uppercase text-text-bright/60 group-hover:text-accent-primary transition-colors">
                                                {exp}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 3 */}
                                <div className="relative flex justify-between items-center px-[8%] mt-[64px]">
                                    <div className="absolute top-1/2 left-[6%] right-[8%] h-px bg-accent-primary/50 shadow-[0_0_8px_rgba(0,240,255,0.2)] -translate-y-1/2" />
                                    {[
                                        "Acting",
                                        "Cinematography",
                                        "Photography"
                                    ].map((exp) => (
                                        <div key={exp} className="relative group z-10 cursor-default">
                                            <div className="w-3 h-3 rounded-full bg-bg-surface border-[1.5px] border-accent-primary shadow-[0_0_8px_rgba(0,240,255,0.4)] transition-shadow group-hover:shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                                            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-tech text-[10px] tracking-widest uppercase text-text-bright/60 group-hover:text-accent-primary transition-colors">
                                                {exp}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center mt-12 font-tech text-[10px] text-accent-primary/50 uppercase tracking-[0.3em] relative z-20">
                                    <span className="px-5 py-2 border border-accent-primary/30 bg-accent-primary/5 rounded-full opacity-80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,240,255,0.1)]">Career shift trajectory</span>
                                </div>
                            </div>

                            {/* Mobile Experience List (Vertical) */}
                            <div className="mt-8 space-y-5 relative sm:hidden pt-2 pb-4 pl-2">
                                <div className="absolute top-4 bottom-4 left-[13px] w-px bg-gradient-to-b from-accent-primary/50 via-accent-primary/20 to-transparent pointer-events-none" />
                                {[
                                    "Business",
                                    "Backend/Frontend",
                                    "UI/UX & Graphics",
                                    "Video Editing",
                                    "Networking",
                                    "Trading",
                                    "Acting",
                                    "Cinematography",
                                    "Photography"
                                ].map((exp) => (
                                    <div key={exp} className="flex items-center gap-6 relative group ml-1">
                                        <div className="w-2.5 h-2.5 rounded-full bg-bg-surface border-[1.5px] border-accent-primary/80 group-hover:border-accent-primary group-hover:shadow-[0_0_10px_rgba(0,240,255,0.8)] transition-all z-10" />
                                        <span className="font-tech text-text-bright/80 group-hover:text-accent-primary text-[10px] tracking-widest uppercase transition-colors pt-1">
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
