'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Github, Terminal } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import TechTag from '@/components/ui/TechTag';
import Button from '@/components/ui/Button';
import { PROJECTS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';
import type { Project } from '@/lib/types';

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [archExpanded, setArchExpanded] = useState(false);

    return (
        <TechPanel sysId={`PROJ.0${index + 1}`} className="group relative overflow-hidden h-full flex flex-col">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <span className="font-tech text-[10px] text-accent-primary tracking-widest bg-accent-primary/10 px-2 py-0.5 rounded-sm">
                            {project.tag}
                        </span>
                        {project.featuredLabel && (
                            <span className="font-tech text-[10px] text-accent-warning tracking-widest border border-accent-warning/30 px-2 py-0.5 rounded-sm">
                                {project.featuredLabel}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        {project.liveUrl && (
                            <Button variant="primary" href={project.liveUrl} className="px-3 py-1 text-[9px]">
                                LIVE_DEMO
                            </Button>
                        )}
                        {project.githubUrl && (
                            <Button variant="ghost" href={project.githubUrl} className="px-3 py-1 text-[9px]">
                                SOURCE_CODE
                            </Button>
                        )}
                    </div>
                </div>

                <h3 className="font-display text-xl font-bold text-text-bright mb-2 group-hover:text-accent-primary transition-colors">
                    {project.title}
                </h3>

                {/* Problem Statement - Terminal Block */}
                <div className="bg-bg-base border-l-2 border-accent-secondary p-3 mb-4 my-2 font-mono text-[10px] text-text-dim">
                    <span className="text-accent-secondary">$ cat problem.log</span>
                    <br />
                    <span className="opacity-80">&gt; {project.problemStatement}</span>
                </div>

                <p className="text-text-dim text-xs leading-relaxed mb-4 flex-grow">
                    {project.description}
                </p>

                {/* Architecture Pipeline Toggle */}
                {project.architectureNote && (
                    <div className="mb-4">
                        <button
                            onClick={() => setArchExpanded(!archExpanded)}
                            className="flex items-center gap-2 text-[10px] font-tech text-text-dim hover:text-accent-primary transition-colors"
                        >
                            <Terminal size={10} />
                            <span>{archExpanded ? 'HIDE_PIPELINE' : 'VIEW_PIPELINE'}</span>
                            <ChevronDown size={10} className={`transition-transform duration-300 ${archExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {archExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="mt-2 p-3 bg-bg-surface border border-border-dim rounded-sm font-mono text-[9px] text-text-code">
                                        <span className="text-accent-dim"># Architecture Flow</span>
                                        <br />
                                        {project.architectureNote}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-2 mt-auto">
                    {project.tech.map((t) => (
                        <TechTag key={t} label={t} variant={project.isFeatured ? 'featured' : 'default'} />
                    ))}
                </div>
            </div>
        </TechPanel>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto relative z-10">
                <SectionLabel label="03" title="Recent Projects" />

                <motion.div
                    className="grid md:grid-cols-2 gap-8 mb-16"
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


            </div>
        </section>
    );
}
