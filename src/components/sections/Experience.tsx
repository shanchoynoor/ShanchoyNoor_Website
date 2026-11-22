'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import { EXPERIENCE_ENTRIES, EDUCATION_ENTRIES } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

const MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];

function parsePoint(text: string): { year: number; month: number | null } | null {
    const year = text.match(/\b(19|20)\d{2}\b/);
    if (!year) return null;
    const lower = text.toLowerCase();
    const m = MONTHS.findIndex((name) => lower.includes(name));
    return { year: Number(year[0]), month: m >= 0 ? m : null };
}

function getDuration(period: string): string | null {
    const [startRaw, endRaw] = period.split(/\s+-\s+/);
    const start = parsePoint(startRaw ?? '');
    if (!start) return null;
    const now = new Date();
    const isPresent = /present/i.test(endRaw ?? '');
    const end = isPresent
        ? { year: now.getFullYear(), month: now.getMonth() }
        : parsePoint(endRaw ?? '');
    if (!end) return null;

    const precise = start.month !== null && end.month !== null;
    let months = precise
        ? (end.year - start.year) * 12 + (end.month! - start.month!)
        : (end.year - start.year) * 12;
    if (months < 12 && !precise) months = 12;
    if (months < 1) months = 1;

    const years = Math.floor(months / 12);
    const rem = months % 12;
    const parts: string[] = [];
    if (years) parts.push(`${years} ${years === 1 ? 'YR' : 'YRS'}`);
    if (precise && rem) parts.push(`${rem} ${rem === 1 ? 'MO' : 'MOS'}`);
    return parts.join(' ');
}

export default function Experience() {
    const [showAllWork, setShowAllWork] = useState(false);
    const visibleEntries = showAllWork ? EXPERIENCE_ENTRIES : EXPERIENCE_ENTRIES.slice(0, 3);

    return (
        <section id="experience" className="py-16 px-6 relative">
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
                                        key={`${entry.company}-${entry.period}`}
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
                                                <div className="flex flex-col items-start xl:items-end gap-1 self-start xl:self-auto">
                                                    <div className="px-2 py-1 bg-bg-surface border border-border-dim font-mono text-[10px] text-text-code whitespace-nowrap">
                                                        {entry.period}
                                                    </div>
                                                    {getDuration(entry.period) && (
                                                        <span className="font-tech text-[10px] font-bold tracking-widest text-accent-primary">
                                                            {getDuration(entry.period)} EXPERIENCE
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-text-dim text-xs leading-relaxed border-l-2 border-border-dim pl-4 group-hover:border-accent-primary/50 transition-colors font-mono">
                                                {entry.body.split('\n').map((line, idx) => (
                                                    <span key={idx}>
                                                        {line}
                                                        {idx !== entry.body.split('\n').length - 1 && <br />}
                                                    </span>
                                                ))}
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

                                            <p className="text-text-dim text-xs leading-relaxed border-l-2 border-border-dim pl-4 group-hover:border-accent-secondary/50 transition-colors font-mono">
                                                {entry.body.split('\n').map((line, idx) => (
                                                    <span key={idx}>
                                                        {line}
                                                        {idx !== entry.body.split('\n').length - 1 && <br />}
                                                    </span>
                                                ))}
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
