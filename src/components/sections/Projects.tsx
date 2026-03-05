'use client';


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import Image from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import TechTag from '@/components/ui/TechTag';
import Button from '@/components/ui/Button';
import { PROJECTS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';
import type { Project } from '@/lib/types';

function ProjectCard({ project, index, onImageClick }: { project: Project; index: number; onImageClick: (images: string[]) => void }) {

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

                <div className="mb-4">
                    <h3 className="font-display text-xl font-bold text-text-bright group-hover:text-accent-primary transition-colors inline">
                        {project.title}
                    </h3>
                    <span className="font-mono text-[11px] text-text-dim opacity-80 ml-2 inline">
                        — {project.problemStatement}
                    </span>
                </div>

                {/* Project Thumbnail */}
                {project.images && project.images.length > 0 ? (
                    <div
                        className="relative w-full h-64 sm:h-72 mb-4 rounded-sm overflow-hidden cursor-pointer group/image border border-accent-primary/20 hover:border-accent-primary/50 transition-colors shrink-0"
                        onClick={() => onImageClick(project.images!)}
                    >
                        <div className="absolute inset-0 bg-accent-primary/10 group-hover/image:bg-transparent transition-colors z-10" />
                        <Image
                            src={project.images[0]}
                            alt={`${project.title} thumbnail`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={index < 2}
                            loading={index < 2 ? 'eager' : 'lazy'}
                            className="object-cover group-hover/image:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-bg-base/80 backdrop-blur-sm border border-accent-primary/30 p-1.5 rounded-sm z-20 flex items-center gap-1.5">
                            <ImageIcon className="w-3 h-3 text-accent-primary" />
                            <span className="font-tech text-[8px] text-accent-primary">{project.images.length}</span>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-48 mb-4 rounded-sm border border-accent-primary/10 bg-accent-primary/5 flexitems-center justify-center flex-col gap-2">
                        <ImageIcon className="w-6 h-6 text-text-dim opacity-50" />
                        <span className="font-tech text-[10px] tracking-widest text-text-dim opacity-50">NO_IMAGE_DATA</span>
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
    const [showAll, setShowAll] = useState(false);
    const [gallery, setGallery] = useState<{ images: string[], currentIndex: number } | null>(null);

    // Lock body scroll when gallery is open
    useEffect(() => {
        if (gallery) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [gallery]);

    const handleImageClick = (images: string[]) => {
        setGallery({ images, currentIndex: 0 });
    };

    const nextImage = () => {
        if (gallery) {
            setGallery({
                ...gallery,
                currentIndex: (gallery.currentIndex + 1) % gallery.images.length
            });
        }
    };

    const prevImage = () => {
        if (gallery) {
            setGallery({
                ...gallery,
                currentIndex: (gallery.currentIndex - 1 + gallery.images.length) % gallery.images.length
            });
        }
    };

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
                                <ProjectCard project={project} index={index} onImageClick={handleImageClick} />
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

                {/* Lightbox Gallery Modal */}
                <AnimatePresence>
                    {gallery && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-bg-base/95 backdrop-blur-xl flex items-center justify-center p-4 pt-24 md:p-8 md:pt-28"
                            onClick={() => setGallery(null)}
                        >
                            <div
                                className="relative w-full max-w-6xl max-h-[calc(100vh-7rem)] flex flex-col items-center border border-accent-primary/20 bg-bg-base/50 p-2 md:p-4 rounded-sm shadow-[0_0_50px_rgba(0,240,255,0.05)]"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                            >
                                {/* Header / Controls */}
                                <div className="w-full flex justify-between items-center mb-4 px-2">
                                    <div className="font-tech text-[10px] tracking-widest text-accent-primary uppercase flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-pulse" />
                                        IMAGE {gallery.currentIndex + 1} OF {gallery.images.length}
                                    </div>
                                    <button
                                        onClick={() => setGallery(null)}
                                        className="text-text-dim hover:text-accent-warning transition-colors p-1"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Main Image Container */}
                                <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black/50 border border-white/5">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={gallery.currentIndex}
                                            initial={{ opacity: 0, scale: 0.98 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={gallery.images[gallery.currentIndex]}
                                                alt={`Gallery Image ${gallery.currentIndex + 1}`}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 80vw"
                                                loading="eager"
                                                className="object-contain"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Navigation Arrows */}
                                    {gallery.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 bg-bg-base/50 hover:bg-accent-primary/20 border border-white/10 hover:border-accent-primary/50 text-white rounded-full backdrop-blur-md transition-all z-10"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 bg-bg-base/50 hover:bg-accent-primary/20 border border-white/10 hover:border-accent-primary/50 text-white rounded-full backdrop-blur-md transition-all z-10"
                                            >
                                                <ChevronRight size={24} />
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Thumbnails row (optional but nice) */}
                                {gallery.images.length > 1 && (
                                    <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-2 scrollbar-thin scrollbar-thumb-accent-primary/30">
                                        {gallery.images.map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setGallery({ ...gallery, currentIndex: idx })}
                                                className={`relative w-16 md:w-20 aspect-video shrink-0 rounded-sm overflow-hidden border transition-all ${idx === gallery.currentIndex
                                                    ? 'border-accent-primary shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                                                    : 'border-white/10 opacity-50 hover:opacity-100'
                                                    }`}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Thumbnail ${idx + 1}`}
                                                    fill
                                                    sizes="64px"
                                                    loading="lazy"
                                                    className="object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
