'use client';

import { motion } from 'framer-motion';
import { Monitor, Server, Brain, Cloud } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import { SKILL_PANELS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { ToolIcons } from '@/components/ui/ToolIcons';

const ICON_MAP: Record<string, React.ElementType> = {
    Monitor,
    Server,
    Brain,
    Cloud,
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto relative z-10">
                <SectionLabel label="02" title="Technical Skills" />

                <motion.div
                    className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {SKILL_PANELS.map((panel, i) => {
                        const Icon = ICON_MAP[panel.iconName];
                        return (
                            <motion.div key={panel.title} variants={fadeUp}>
                                <TechPanel
                                    sysId={`MOD.0${i + 1}`}
                                    title={panel.isPrimary ? "CORE_MODULE" : "SUB_SYSTEM"}
                                    className={`h-full ${panel.isPrimary ? 'border-accent-primary/40' : ''}`}
                                >
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`p-2 bg-bg-surface border border-border-dim rounded-sm ${panel.isPrimary ? 'text-accent-primary' : 'text-text-dim'}`}>
                                            {Icon && <Icon size={20} />}
                                        </div>
                                        <h3 className="font-display text-sm font-bold tracking-wide text-text-bright uppercase">
                                            {panel.title}
                                        </h3>
                                    </div>

                                    {/* Skills List - Terminal Style */}
                                    <ul className="space-y-3 font-tech text-xs">
                                        {panel.skills.map((skill) => (
                                            <li key={skill} className="flex items-center gap-3 text-text-dim text-sm leading-relaxed font-mono hover:text-accent-primary transition-colors">
                                                <span className="w-1 h-1 bg-accent-secondary opacity-80" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </TechPanel>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Tool Stack */}
                <motion.div
                    className="mt-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <TechPanel className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-6">
                        <div className="flex items-center gap-3 relative -left-12">
                            <span className="font-tech text-xs text-accent-primary uppercase tracking-widest whitespace-nowrap">
                                // DEV_&_DESIGN_TOOLS
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-8 md:gap-10">
                            {Object.entries(ToolIcons).map(([name, Icon]) => (
                                <div key={name} className="flex flex-col items-center gap-2 group cursor-default">
                                    <div className="text-3xl text-text-bright group-hover:scale-110 group-hover:text-accent-primary transition-all duration-300 drop-shadow-lg">
                                        <Icon />
                                    </div>
                                    <span className="font-tech text-[9px] text-text-bright/90 uppercase tracking-widest group-hover:text-accent-primary transition-colors duration-300">
                                        {name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </TechPanel>
                </motion.div>
            </div>
        </section>
    );
}
