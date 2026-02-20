'use client';

import { motion } from 'framer-motion';
import { Monitor, Server, Brain, Cloud } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import { SKILL_PANELS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

const ICON_MAP: Record<string, React.ElementType> = {
    Monitor,
    Server,
    Brain,
    Cloud,
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
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
                                            <li key={skill} className="flex items-center gap-3 text-text-dim hover:text-accent-primary transition-colors">
                                                <span className="w-1 h-1 bg-current opacity-50" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </TechPanel>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
