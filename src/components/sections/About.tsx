'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import { ABOUT_PARAGRAPHS, ABOUT_STATS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { 
    Briefcase,
    Code,
    Palette,
    MonitorPlay,
    Network,
    TrendingUp,
    User,
    Clapperboard,
    Camera
} from 'lucide-react';

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

                            {/* Experience Matrix with Icons */}
                            <div className="mt-12 pt-6 border-t border-border-dim/20 relative">
                                <div className="flex items-center gap-2 mb-6 cursor-default">
                                    <div className="w-1.5 h-1.5 bg-accent-primary shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse" />
                                    <span className="font-tech text-[10px] text-accent-primary uppercase tracking-[0.2em]">Career Matrix</span>
                                </div>
                                
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {[
                                        { tag: "Business", icon: Briefcase },
                                        { tag: "Backend/Frontend", icon: Code },
                                        { tag: "UI/UX & Graphics", icon: Palette },
                                        { tag: "Video Editing", icon: MonitorPlay },
                                        { tag: "Networking", icon: Network },
                                        { tag: "Trading", icon: TrendingUp },
                                        { tag: "Acting", icon: User },
                                        { tag: "Cinematography", icon: Clapperboard },
                                        { tag: "Photography", icon: Camera }
                                    ].map((item) => (
                                        <div key={item.tag} className="group relative bg-bg-surface/40 hover:bg-accent-primary/5 transition-all p-4 flex flex-col items-center justify-center gap-3 overflow-hidden min-h-[90px] border border-accent-primary/10 hover:border-accent-primary/40 cursor-default">
                                            {/* HUD Corner Accents */}
                                            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-accent-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-accent-primary/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            
                                            {/* Background glow burst */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-accent-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                            <item.icon className="w-5 h-5 text-text-bright/40 group-hover:text-accent-primary transition-colors relative z-10" strokeWidth={1.5} />
                                            
                                            <span className="font-tech text-center text-[9px] text-text-bright/60 group-hover:text-text-bright tracking-[0.1em] sm:tracking-widest uppercase relative z-10 leading-tight">
                                                {item.tag}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
