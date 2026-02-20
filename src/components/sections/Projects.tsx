'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Github, Terminal } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import TechTag from '@/components/ui/TechTag';
import Button from '@/components/ui/Button';
import { PROJECTS, PERFORMANCE_METRICS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';
import type { Project } from '@/lib/types';

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [archExpanded, setArchExpanded] = useState(false);

    return (
        <TechPanel sysId={`PROJ.0${index + 1}`} className="group relative overflow-hidden">
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">

                {/* Left Column: Project Info */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="font-tech text-xs text-accent-primary tracking-widest bg-accent-primary/10 px-2 py-0.5 rounded-sm">
                            {project.tag}
                        </span>
                        {project.featuredLabel && (
                            <span className="font-tech text-xs text-accent-warning tracking-widest border border-accent-warning/30 px-2 py-0.5 rounded-sm">
                                {project.featuredLabel}
                            </span>
                        )}
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-text-bright mb-3 group-hover:text-accent-primary transition-colors">
                        {project.title}
                    </h3>

                    {/* Problem Statement - Terminal Block */}
                    <div className="bg-bg-base border-l-2 border-accent-secondary p-4 mb-6 my-4 font-mono text-xs text-text-dim">
                        <span className="text-accent-secondary">$ cat problem.log</span>
                        <br />
                        <span className="opacity-80">&gt; {project.problemStatement}</span>
                    </div>

                    <p className="text-text-dim text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>

                    {/* Architecture Pipeline Toggle */}
                    {project.architectureNote && (
                        <div className="mb-6">
                            <button
                                onClick={() => setArchExpanded(!archExpanded)}
                                className="flex items-center gap-2 text-xs font-tech text-text-dim hover:text-accent-primary transition-colors"
                            >
                                <Terminal size={12} />
                                <span>{archExpanded ? 'HIDE_PIPELINE' : 'VIEW_PIPELINE'}</span>
                                <ChevronDown size={12} className={`transition-transform duration-300 ${archExpanded ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {archExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-3 p-4 bg-bg-surface border border-border-dim rounded-sm font-mono text-[10px] text-text-code">
                                            <span className="text-accent-dim"># Architecture Flow</span>
                                            <br />
                                            {project.architectureNote}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t) => (
                            <TechTag key={t} label={t} variant={project.isFeatured ? 'featured' : 'default'} />
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {project.liveUrl && (
                            <Button variant="primary" href={project.liveUrl} className="px-6 py-2 text-xs">
                                LIVE_DEMO
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button variant="ghost" href={project.githubUrl} className="px-6 py-2 text-xs">
                                SOURCE_CODE
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </TechPanel>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <SectionLabel label="03" title="Selected Projects" />

                <motion.div
                    className="space-y-12 mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {PROJECTS.map((project, index) => (
                        <motion.div key={project.title} variants={fadeUp}>
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Metrics Strip */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <TechPanel className="flex flex-wrap items-center justify-between gap-6 opacity-80">
                        <span className="font-tech text-xs text-accent-primary uppercase tracking-widest">
                            {PERFORMANCE_METRICS.title}
                        </span>
                        <div className="flex flex-wrap gap-8">
                            {PERFORMANCE_METRICS.items.map((item) => (
                                <span key={item} className="font-mono text-xs text-text-dim flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-accent-primary" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    </TechPanel>
                </motion.div>
            </div>
        </section>
    );
}
