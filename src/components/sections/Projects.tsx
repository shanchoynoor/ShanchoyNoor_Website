'use client';


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import TechTag from '@/components/ui/TechTag';
import Button from '@/components/ui/Button';
import { PROJECTS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';
import type { Project } from '@/lib/types';

function ProjectCard({ project, index }: { project: Project; index: number }) {

    return (
        <TechPanel sysId={`PROJ.0${index + 1}`} className="group relative overflow-hidden h-full flex flex-col">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                        {Array.isArray(project.tag) ? (
                            project.tag.map((t, i) => (
                                <span key={i} className="font-tech text-[10px] text-accent-primary tracking-widest bg-accent-primary/10 px-2 py-0.5 rounded-sm">
                                    {t}
                                </span>
                            ))
                        ) : (
                            <span className="font-tech text-[10px] text-accent-primary tracking-widest bg-accent-primary/10 px-2 py-0.5 rounded-sm">
                                {project.tag}
                            </span>
                        )}
                        {project.featuredLabel && (
                            <span className="font-tech text-[10px] text-accent-warning tracking-widest border border-accent-warning/30 px-2 py-0.5 rounded-sm">
                                {project.featuredLabel}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        {project.liveUrl && (
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="primary"
                                    href={project.status === 'in-progress' ? undefined : project.liveUrl}
                                    className={`px-3 py-1 text-[9px] ${project.status === 'in-progress' ? 'opacity-40 pointer-events-none' : ''}`}
                                >
                                    LIVE_DEMO
                                </Button>
                                {project.status && (
                                    <span className={`font-tech text-[8px] tracking-widest flex items-center gap-1 ${project.status === 'ready'
                                        ? 'text-green-400'
                                        : 'text-accent-warning'
                                        }`}>
                                        <span className={`inline-block w-1.5 h-1.5 rounded-full ${project.status === 'ready'
                                            ? 'bg-green-400'
                                            : 'bg-accent-warning animate-pulse'
                                            }`} />
                                        {project.status === 'ready' ? 'READY' : 'IN_PROGRESS'}
                                    </span>
                                )}
                            </div>
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
                <div className="bg-bg-base border-l-2 border-accent-secondary p-3 mb-4 my-2 font-mono text-[10px] text-text-bright">
                    <span className="text-accent-secondary">$ cat problem.log</span>
                    <br />
                    <span className="opacity-80">&gt; {project.problemStatement}</span>
                </div>

                <p className="text-text-dim text-xs leading-relaxed mb-4 flex-grow font-mono">
                    {project.description}
                </p>


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
    const [showAll, setShowAll] = useState(false);

    // Determine how many projects to display
    const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto relative z-10">
                <SectionLabel label="03" title="Recent Projects" />

                <motion.div
                    className="grid md:grid-cols-2 gap-8 mb-12"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={fadeUp}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {PROJECTS.length > 4 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <Button
                            variant="primary"
                            onClick={() => {
                                if (showAll) {
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }
                                setShowAll(!showAll);
                            }}
                            className="px-8 py-3 group"
                        >
                            <span className="flex items-center gap-2">
                                {showAll ? 'SHOW LESS' : 'LOAD MORE_'}
                                <motion.span
                                    animate={{ y: showAll ? -2 : 2 }}
                                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                                    className="inline-block"
                                >
                                    {showAll ? '↑' : '↓'}
                                </motion.span>
                            </span>
                        </Button>
                    </motion.div>
                )}

            </div>
        </section>
    );
}
