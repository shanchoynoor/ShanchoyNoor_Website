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
    const careerTrajectory = [
        [
            { label: 'Business', icon: Briefcase },
            { label: 'Web & App Development', icon: Code },
            { label: 'Trading', icon: TrendingUp }
        ],
        [
            { label: 'UI/UX & Graphics', icon: Palette },
            { label: 'Video Editing', icon: MonitorPlay },
            { label: 'Networking', icon: Network }
        ],
        [
            { label: 'Acting', icon: User },
            { label: 'Cinematography', icon: Clapperboard },
            { label: 'Photography', icon: Camera }
        ]
    ];

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
                            <TechPanel title="Profile_Telemetry" sysId="SHANCHOY_BIO_SCAN.01" className="h-auto p-4">
                                <div className="grid grid-cols-2 gap-px bg-border-dim/20 mt-1">
                                    {ABOUT_STATS.map((stat, i) => (
                                        <div
                                            key={stat.label}
                                            className="bg-bg-surface p-4 flex flex-col items-center justify-center text-center gap-1.5 group hover:bg-accent-primary/5 transition-colors relative"
                                        >
                                            {/* Tech corner accent for each cell */}
                                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent-primary/20 group-hover:border-accent-primary/50 transition-colors" />

                                            <span className="font-display text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent-primary to-accent-primary/50 group-hover:animate-pulse">
                                                {stat.value}
                                            </span>
                                            <span className="font-tech text-[9px] text-text-bright uppercase tracking-[0.2em] leading-tight max-w-[90px]">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                            </TechPanel>

                            {/* Career Timeline - Minimal Dotted Path */}
                            <div className="mt-8 hidden sm:flex justify-center">
                                <TechPanel title="Career_Shift" sysId="TRAJECTORY.MAP" className="w-full h-auto relative overflow-hidden pt-6 pb-8">
                                    <svg
                                        className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] text-accent-primary/25 pointer-events-none"
                                        viewBox="0 0 420 120"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M10 28 H410 V68 H10 V108 H410"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.2"
                                            strokeDasharray="4 10"
                                            strokeLinecap="round"
                                        />
                                    </svg>

                                    <div className="relative z-10 w-full space-y-2">
                                        {careerTrajectory.map((row, rowIndex) => (
                                            <div
                                                key={`trajectory-row-${rowIndex}`}
                                                className={`grid grid-cols-3 w-full text-center ${
                                                    rowIndex === 0 ? '-translate-y-3' : 
                                                    rowIndex === 2 ? 'translate-y-6' : ''
                                                }`}
                                            >
                                                {row.map((item) => (
                                                    <div key={`trajectory-${rowIndex}-${item.label}`} className="flex flex-col items-center gap-0.5">
                                                        <div className="w-7 h-7 rounded-full border border-accent-primary/30 text-accent-primary/80 flex items-center justify-center text-[10px]">
                                                            <item.icon className="w-3 h-3" />
                                                        </div>
                                                        <span className="font-tech text-[8px] uppercase tracking-[0.3em] text-text-bright/60">
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>

                                </TechPanel>
                            </div>

                            {/* Mobile Experience List (Vertical) */}
                            <div className="mt-6 space-y-5 relative sm:hidden pt-2 pl-2 border-l border-accent-primary/20 ml-2">
                                {careerTrajectory.flat().map((item, index) => (
                                    <div key={`mobile-trajectory-${index}-${item.label}`} className="flex items-center gap-5 relative group">
                                        {/* Connector line dot */}
                                        <div className="absolute -left-[27px] w-2 h-2 rounded-full bg-bg-surface border border-accent-primary/50 group-hover:bg-accent-primary group-hover:shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all z-10" />
                                        
                                        <div className="w-8 h-8 rounded-full border border-accent-primary/30 flex items-center justify-center group-hover:border-accent-primary transition-all">
                                            <item.icon className="w-4 h-4 text-text-bright/50 group-hover:text-accent-primary transition-colors" />
                                        </div>
                                        <span className="font-tech text-text-bright/70 group-hover:text-accent-primary text-[10px] tracking-[0.3em] uppercase transition-colors">
                                            {item.label}
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
