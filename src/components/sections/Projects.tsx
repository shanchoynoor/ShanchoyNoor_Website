'use client';


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ImageIcon, Globe, Smartphone } from 'lucide-react';
import NextImage from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import TechTag from '@/components/ui/TechTag';
import Button from '@/components/ui/Button';
import { PROJECTS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';
import type { Project } from '@/lib/types';

const STACK_ROWS = [
    { key: 'frontend', label: 'FRONTEND', variant: 'default' },
    { key: 'backend', label: 'BACKEND', variant: 'featured' },
    { key: 'data', label: 'DATABASE', variant: 'default' },
    { key: 'ai', label: 'AI_SYSTEM', variant: 'ai' },
    { key: 'services', label: 'SERVICES', variant: 'default' },
] as const;

const STATUS_META = {
    ready: { label: 'READY', tone: 'text-green-400', dot: 'bg-green-400' },
    mvp: { label: 'MVP_LIVE', tone: 'text-green-400', dot: 'bg-green-400' },
    'in-progress': { label: 'IN_PROGRESS', tone: 'text-accent-warning', dot: 'bg-accent-warning animate-pulse' },
} as const;

const INITIAL_VISIBLE = 4;

type CategoryKey = Project['category'];

const CATEGORIES: { key: CategoryKey; label: string; Icon: typeof Globe }[] = [
    { key: 'web', label: 'WEB_APPS', Icon: Globe },
    { key: 'mobile', label: 'MOBILE_APPS', Icon: Smartphone },
];

function ProjectCard({ project, index, onImageClick }: { project: Project; index: number; onImageClick: (images: string[], startIndex: number) => void }) {
    const status = project.status ? STATUS_META[project.status] : null;
    const isMobile = project.category === 'mobile';
    const hasImages = !!project.images && project.images.length > 0;

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
                            <Button variant="primary" href={project.liveUrl} target="_blank" className="px-3 py-1 text-[9px]">
                                LIVE_DEMO
                            </Button>
                        )}
                        {status && (
                            <span className={`font-tech text-[8px] tracking-widest flex items-center gap-1 ${status.tone}`}>
                                <span className={`inline-block w-1.5 h-1.5 rounded-full ${status.dot}`} />
                                {status.label}
                            </span>
                        )}
                        {project.githubUrl && (
                            <Button variant="ghost" href={project.githubUrl} target="_blank" className="px-3 py-1 text-[9px]">
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

                <p className="font-mono text-[11px] leading-relaxed text-text-dim mb-4">
                    {project.description}
                </p>

                {/* Project Preview */}
                {hasImages && isMobile ? (
                    <div className="relative mb-4 shrink-0">
                        <div className="flex gap-3 overflow-x-auto pb-2 snap-x scrollbar-thin scrollbar-thumb-accent-primary/30">
                            {project.images!.map((img, i) => (
                                <button
                                    key={img}
                                    type="button"
                                    onClick={() => onImageClick(project.images!, i)}
                                    aria-label={`${project.title} screen ${i + 1}`}
                                    className="relative h-72 sm:h-80 aspect-[9/19] shrink-0 snap-start rounded-lg overflow-hidden border border-accent-primary/20 hover:border-accent-primary/60 transition-colors cursor-pointer"
                                >
                                    <NextImage
                                        src={img}
                                        alt={`${project.title} screen ${i + 1}`}
                                        fill
                                        sizes="160px"
                                        loading="lazy"
                                        className="object-cover object-top"
                                    />
                                </button>
                            ))}
                        </div>
                        {project.imageKind === 'design-preview' && (
                            <span className="absolute top-2 left-2 font-tech text-[8px] tracking-widest text-accent-warning bg-bg-base/80 border border-accent-warning/30 px-2 py-0.5 rounded-sm">
                                DESIGN_PREVIEW
                            </span>
                        )}
                    </div>
                ) : hasImages ? (
                    <div
                        className="relative w-full aspect-[2/1] mb-4 rounded-sm overflow-hidden cursor-pointer group/image border border-accent-primary/20 hover:border-accent-primary/50 transition-colors shrink-0"
                        onClick={() => onImageClick(project.images!, 0)}
                    >
                        <div className="absolute inset-0 bg-accent-primary/10 group-hover/image:bg-transparent transition-colors z-10" />
                        <NextImage
                            src={project.images![0]}
                            alt={`${project.title} screenshot`}
                            fill
                            sizes="(max-width: 768px) 100vw, 560px"
                            priority={index < 2}
                            loading={index < 2 ? 'eager' : 'lazy'}
                            className="object-cover object-top group-hover/image:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-bg-base/80 backdrop-blur-sm border border-accent-primary/30 p-1.5 rounded-sm z-20 flex items-center gap-1.5">
                            <ImageIcon className="w-3 h-3 text-accent-primary" />
                            <span className="font-tech text-[8px] text-accent-primary">{project.images!.length}</span>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-48 mb-4 rounded-sm border border-dashed border-accent-primary/20 bg-accent-primary/5 flex items-center justify-center flex-col gap-2 shrink-0">
                        <ImageIcon className="w-6 h-6 text-text-dim opacity-50" />
                        <span className="font-tech text-[10px] tracking-widest text-text-dim opacity-70">FINAL_UI_IN_PROGRESS</span>
                    </div>
                )}

                {project.uiStatus === 'in-progress' && hasImages && (
                    <div className="font-tech text-[9px] tracking-widest text-accent-warning mb-3 flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-warning animate-pulse" />
                        FINAL_UI_IN_PROGRESS
                    </div>
                )}

                <div className="mt-auto space-y-1.5 mb-2">
                    {project.stack ? (
                        STACK_ROWS.filter((row) => project.stack![row.key]?.length).map((row) => (
                            <div key={row.key} className="flex items-start gap-2">
                                <span className="font-tech text-[7px] tracking-widest text-text-dim w-14 shrink-0 pt-1">
                                    {row.label}
                                </span>
                                <div className="flex flex-wrap gap-1">
                                    {project.stack![row.key]!.map((t) => (
                                        <TechTag key={t} label={t} variant={row.variant} />
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-wrap gap-1">
                            {project.tech.map((t) => (
                                <TechTag key={t} label={t} variant={project.isFeatured ? 'featured' : 'default'} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </TechPanel>
    );
}

export default function Projects() {
    const [category, setCategory] = useState<CategoryKey>('web');
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

    const handleImageClick = (images: string[], startIndex: number) => {
        setGallery({ images, currentIndex: startIndex });
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

    const categoryProjects = PROJECTS.filter((p) => p.category === category);
    const displayedProjects = showAll ? categoryProjects : categoryProjects.slice(0, INITIAL_VISIBLE);
    const hiddenCount = categoryProjects.length - INITIAL_VISIBLE;

    return (
        <section id="projects" className="py-16 px-6">
            <div className="max-w-6xl mx-auto relative z-10">
                <SectionLabel label="03" title="Recent Projects" />

                <div role="tablist" aria-label="Project categories" className="flex flex-wrap gap-3 mb-10">
                    {CATEGORIES.map(({ key, label, Icon }) => {
                        const count = PROJECTS.filter((p) => p.category === key).length;
                        const active = category === key;
                        return (
                            <button
                                key={key}
                                role="tab"
                                aria-selected={active}
                                type="button"
                                onClick={() => { setCategory(key); setShowAll(false); }}
                                className={`flex items-center gap-2 px-5 py-2.5 font-tech text-xs font-bold tracking-widest uppercase border transition-all duration-300 ${active
                                    ? 'bg-accent-primary/10 text-accent-primary border-accent-primary shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                                    : 'text-text-dim border-border-dim hover:text-text-bright hover:border-text-dim'
                                    }`}
                            >
                                <Icon size={14} />
                                {label}
                                <span className="text-[10px] opacity-70">[{count}]</span>
                            </button>
                        );
                    })}
                </div>

                <motion.div
                    key={category}
                    className="grid md:grid-cols-2 gap-8 mb-12"
                    initial="hidden"
                    animate="show"
                    variants={staggerContainer}
                >
                    {displayedProjects.map((project, index) => (
                        <motion.div key={project.title} variants={fadeUp}>
                            <ProjectCard project={project} index={index} onImageClick={handleImageClick} />
                        </motion.div>
                    ))}
                </motion.div>

                {hiddenCount > 0 && (
                    <div className="flex justify-center mb-12 -mt-4">
                        <button
                            type="button"
                            onClick={() => setShowAll((v) => !v)}
                            aria-expanded={showAll}
                            className="font-tech text-[11px] tracking-widest text-accent-primary border border-accent-primary/30 px-6 py-2 hover:bg-accent-primary/10 hover:border-accent-primary transition-all duration-300"
                        >
                            {showAll ? '[ COLLAPSE ]' : `[ LOAD_MORE · ${hiddenCount} ]`}
                        </button>
                    </div>
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
                                            <NextImage
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
                                                <NextImage
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
