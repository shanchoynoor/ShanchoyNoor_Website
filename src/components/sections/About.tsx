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

                        <div className="space-y-8">
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

                            {/* Career Timeline - Compact Icons */}
                            <div className="mt-16 pb-4 relative hidden sm:block">
                                {/* Connecting Path 1 (Right C-Curve) */}
                                <div className="absolute top-[20px] right-[8%] w-[10%] h-[90px] border-t border-r border-accent-primary/30 rounded-tr-[1.5rem] rounded-br-[1.5rem] pointer-events-none" />
                                
                                {/* Connecting Path 2 (Left C-Curve) */}
                                <div className="absolute top-[110px] left-[8%] w-[10%] h-[90px] border-b border-l border-accent-primary/30 rounded-tl-[1.5rem] rounded-bl-[1.5rem] pointer-events-none" />

                                {/* Row 1: Left to Right */}
                                <div className="relative flex justify-between items-center px-[10%]">
                                    <div className="absolute top-1/2 left-[10%] right-[8%] h-px bg-accent-primary/30 -translate-y-1/2" />
                                    {[
                                        { tag: "Business", icon: Briefcase },
                                        { tag: "Backend/Frontend", icon: Code },
                                        { tag: "UI/UX & Graphics", icon: Palette }
                                    ].map((item) => (
                                        <div key={item.tag} className="relative group z-10 flex flex-col items-center">
                                            <div className="w-10 h-10 rounded bg-bg-surface border border-accent-primary/40 flex items-center justify-center shadow-[0_0_8px_rgba(0,240,255,0.05)] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:border-accent-primary group-hover:-translate-y-1 transition-all duration-300">
                                                <item.icon className="w-4 h-4 text-text-bright/50 group-hover:text-accent-primary transition-colors" />
                                            </div>
                                            <span className="absolute -bottom-6 whitespace-nowrap font-tech text-[9px] tracking-widest uppercase text-text-bright/40 group-hover:text-accent-primary transition-colors">
                                                {item.tag}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Row 2: Right to Left (Visually Trading, Networking, Video Editing) */}
                                <div className="relative flex justify-between items-center px-[10%] mt-[50px]">
                                    <div className="absolute top-1/2 left-[8%] right-[8%] h-px bg-accent-primary/30 -translate-y-1/2" />
                                    {[
                                        { tag: "Trading", icon: TrendingUp },
                                        { tag: "Networking", icon: Network },
                                        { tag: "Video Editing", icon: MonitorPlay }
                                    ].map((item) => (
                                        <div key={item.tag} className="relative group z-10 flex flex-col items-center">
                                            <div className="w-10 h-10 rounded bg-bg-surface border border-accent-primary/40 flex items-center justify-center shadow-[0_0_8px_rgba(0,240,255,0.05)] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:border-accent-primary group-hover:-translate-y-1 transition-all duration-300">
                                                <item.icon className="w-4 h-4 text-text-bright/50 group-hover:text-accent-primary transition-colors" />
                                            </div>
                                            <span className="absolute -top-6 whitespace-nowrap font-tech text-[9px] tracking-widest uppercase text-text-bright/40 group-hover:text-accent-primary transition-colors">
                                                {item.tag}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 3: Left to Right */}
                                <div className="relative flex justify-between items-center px-[10%] mt-[50px]">
                                    <div className="absolute top-1/2 left-[8%] right-[10%] h-px bg-accent-primary/30 -translate-y-1/2" />
                                    {[
                                        { tag: "Acting", icon: User },
                                        { tag: "Cinematography", icon: Clapperboard },
                                        { tag: "Photography", icon: Camera }
                                    ].map((item) => (
                                        <div key={item.tag} className="relative group z-10 flex flex-col items-center">
                                            <div className="w-10 h-10 rounded bg-bg-surface border border-accent-primary/40 flex items-center justify-center shadow-[0_0_8px_rgba(0,240,255,0.05)] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:border-accent-primary group-hover:-translate-y-1 transition-all duration-300">
                                                <item.icon className="w-4 h-4 text-text-bright/50 group-hover:text-accent-primary transition-colors" />
                                            </div>
                                            <span className="absolute -bottom-6 whitespace-nowrap font-tech text-[9px] tracking-widest uppercase text-text-bright/40 group-hover:text-accent-primary transition-colors">
                                                {item.tag}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="text-center mt-12 font-tech text-[10px] text-accent-primary/40 uppercase tracking-[0.3em] relative z-20">
                                    <span className="px-5 py-2 border border-accent-primary/20 bg-accent-primary/5 rounded-full backdrop-blur-sm">Career shift trajectory</span>
                                </div>
                            </div>

                            {/* Mobile Experience List (Vertical) */}
                            <div className="mt-8 space-y-6 relative sm:hidden pt-2 pl-2 border-l border-accent-primary/20 ml-2">
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
                                    <div key={item.tag} className="flex items-center gap-5 relative group">
                                        {/* Connector line dot */}
                                        <div className="absolute -left-[27px] w-2 h-2 rounded-full bg-bg-surface border border-accent-primary/50 group-hover:bg-accent-primary group-hover:shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all z-10" />
                                        
                                        <div className="w-9 h-9 rounded bg-bg-surface border border-accent-primary/30 flex items-center justify-center shadow-sm group-hover:border-accent-primary group-hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all">
                                            <item.icon className="w-4 h-4 text-text-bright/50 group-hover:text-accent-primary transition-colors" />
                                        </div>
                                        <span className="font-tech text-text-bright/70 group-hover:text-accent-primary text-[10px] tracking-widest uppercase transition-colors">
                                            {item.tag}
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
