'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import { EXPERIENCE_ENTRIES } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="max-w-5xl mx-auto">
                <SectionLabel label="05" title="Mission Logs" />

                {/* Timeline */}
                <motion.div
                    className="relative max-w-4xl ml-auto"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {/* Vertical Track */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border-dim" />

                    <div className="space-y-12 pl-8">
                        {EXPERIENCE_ENTRIES.map((entry, i) => (
                            <motion.div
                                key={entry.title}
                                variants={fadeUp}
                                className="relative"
                            >
                                {/* Timeline Node */}
                                <div className="absolute -left-[39px] top-6 flex items-center justify-center">
                                    <div className={`w-3 h-3 rounded-none rotate-45 border ${entry.isCurrent ? 'bg-accent-primary border-accent-primary shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'bg-bg-base border-text-dim'}`} />
                                    {entry.isCurrent && <div className="absolute w-8 h-8 border border-accent-primary/20 rotate-45 animate-pulse" />}
                                </div>

                                <TechPanel sysId={`LOG.0${i + 1}`} className="group hover:border-accent-primary/50 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                        <div>
                                            <h3 className="font-display text-lg font-bold text-text-bright">
                                                {entry.title}
                                            </h3>
                                            <p className="font-tech text-xs text-text-dim uppercase tracking-wider">
                                                {entry.company}
                                            </p>
                                        </div>
                                        <div className="px-2 py-1 bg-bg-surface border border-border-dim font-mono text-[10px] text-text-code">
                                            {entry.period}
                                        </div>
                                    </div>

                                    <p className="text-text-dim text-sm leading-relaxed border-l-2 border-border-dim pl-4 group-hover:border-accent-primary/50 transition-colors">
                                        {entry.body}
                                    </p>
                                </TechPanel>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
