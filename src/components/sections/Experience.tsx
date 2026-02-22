'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import { EXPERIENCE_ENTRIES, EDUCATION_ENTRIES } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function Experience() {
    const [showAllWork, setShowAllWork] = useState(false);
    const visibleEntries = showAllWork ? EXPERIENCE_ENTRIES : EXPERIENCE_ENTRIES.slice(0, 3);

    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <SectionLabel label="04" title="Mission Logs" />

                <div className="grid md:grid-cols-2 gap-16 mt-8">
                    {/* Left Column: Work Experience */}
                    <div>
                        <div className="flex items-center gap-2 mb-10 pl-6">
                            <span className="w-1.5 h-1.5 bg-accent-primary" />
                            <h3 className="font-tech text-sm text-accent-primary tracking-widest uppercase">
                                // WORK_EXPERIENCE
                            </h3>
                        </div>

                        <motion.div
                            key={showAllWork ? 'all' : 'partial'}
                            className="relative max-w-2xl ml-auto"
                            initial="hidden"
                            animate="show"
                            variants={staggerContainer}
                        >
                            {/* Vertical Track */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-border-dim" />

                            <div className="space-y-12 pl-8">
                                {visibleEntries.map((entry, i) => (
                                    <motion.div
                                        key={entry.title}
                                        variants={fadeUp}
                                        className="relative"
                                    >
                                        {/* Timeline Node */}
                                        <div className="absolute -left-[39px] top-6 flex items-center justify-center">
                                            <div className={`w-3 h-3 rounded-none rotate-45 border ${entry.isCurrent ? 'bg-accent-primary border-accent-primary shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'bg-bg-base border-text-dim'}`} />
                                        </div>

                                        <TechPanel sysId={`LOG.0${i + 1}`} className="group hover:border-accent-primary/50 transition-colors">
                                            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-2">
                                                <div>
                                                    <h3 className="font-display text-lg font-bold text-text-bright">
                                                        {entry.title}
                                                    </h3>
                                                    <p className="font-tech text-[11px] font-bold text-text-bright uppercase tracking-wider">
                                                        {entry.company}
                                                    </p>
                                                </div>
                                                <div className="px-2 py-1 bg-bg-surface border border-border-dim font-mono text-[10px] text-text-code whitespace-nowrap self-start xl:self-auto">
                                                    {entry.period}
                                                </div>
                                            </div>

                                            <p className="text-text-bright text-xs leading-relaxed border-l-2 border-border-dim pl-4 group-hover:border-accent-primary/50 transition-colors">
                                                {entry.body}
                                            </p>
                                        </TechPanel>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {EXPERIENCE_ENTRIES.length > 3 && (
                                <div className="mt-8 flex justify-center">
                                    <button
                                        onClick={() => {
                                            if (showAllWork) {
                                                setShowAllWork(false);
                                                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                                            } else {
                                                setShowAllWork(true);
                                            }
                                        }}
                                        className="font-tech text-[11px] tracking-widest text-accent-primary border border-accent-primary/30 px-6 py-2 hover:bg-accent-primary/10 hover:border-accent-primary transition-all duration-300"
                                    >
                                        {showAllWork ? '[ COLLAPSE ]' : `[ LOAD_MORE · ${EXPERIENCE_ENTRIES.length - 3} ]`}
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </div>

                    {/* Right Column: Education & Courses */}
                    <div>
                        <div className="flex items-center gap-2 mb-10 pl-6">
                            <span className="w-1.5 h-1.5 bg-accent-secondary" />
                            <h3 className="font-tech text-sm text-accent-secondary tracking-widest uppercase">
                                // ACADEMICS_&_TRAINING
                            </h3>
                        </div>

                        <motion.div
                            className="relative max-w-2xl ml-auto"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            {/* Vertical Track */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-border-dim" />

                            <div className="space-y-12 pl-8">
                                {EDUCATION_ENTRIES.map((entry, i) => (
                                    <motion.div
                                        key={entry.title}
                                        variants={fadeUp}
                                        className="relative"
                                    >
                                        {/* Timeline Node */}
                                        <div className="absolute -left-[39px] top-6 flex items-center justify-center">
                                            <div className={`w-3 h-3 rounded-none rotate-45 border ${entry.isCurrent ? 'bg-accent-secondary border-accent-secondary shadow-[0_0_10px_rgba(255,0,255,0.5)]' : 'bg-bg-base border-text-dim'}`} />
                                        </div>

                                        <TechPanel sysId={`ACAD.0${i + 1}`} className="group hover:border-accent-secondary/50 transition-colors">
                                            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-2">
                                                <div>
                                                    <h3 className="font-display text-lg font-bold text-text-bright">
                                                        {entry.title}
                                                    </h3>
                                                    <p className="font-tech text-[11px] font-bold text-text-bright uppercase tracking-wider">
                                                        {entry.institution}
                                                    </p>
                                                </div>
                                                <div className="px-2 py-1 bg-bg-surface border border-border-dim font-mono text-[10px] text-text-code whitespace-nowrap self-start xl:self-auto">
                                                    {entry.period}
                                                </div>
                                            </div>

                                            <p className="text-text-bright text-xs leading-relaxed border-l-2 border-border-dim pl-4 group-hover:border-accent-secondary/50 transition-colors">
                                                {entry.body}
                                            </p>
                                        </TechPanel>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
