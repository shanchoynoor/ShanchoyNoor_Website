'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import NextImage from 'next/image';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import { VIDEOS_INTRO, LATEST_YOUTUBE_VIDEOS, YOUTUBE_PROFILE_IMAGE } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

/**
 * RE-INITIALIZED COMPONENT to bypass build cache.
 * Using NextImage alias for all image components.
 */

function VideoCard({ video, index }: { video: { id: string; title: string }; index: number }) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <motion.div variants={fadeUp} className="h-full">
            <TechPanel
                showHeader={false}
                showCorners={false}
                className="h-full bg-bg-surface/40 hover:bg-bg-surface/60 transition-colors p-3"
            >
                {/* Header: Original YT Profile + Compact Title */}
                <div className="flex items-center gap-2.5 mb-3 px-1">
                    <div className="w-5 h-5 rounded-full overflow-hidden border border-accent-primary/20 shrink-0 relative">
                        <NextImage
                            src={YOUTUBE_PROFILE_IMAGE}
                            alt="Shanchoy Noor"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-[9px] font-tech text-text-bright/70 line-clamp-1 uppercase tracking-tighter">
                        {video.title}
                    </span>
                </div>

                {/* Video Container (Facade) */}
                <div
                    className="aspect-video w-full relative overflow-hidden rounded-sm border border-border-dim/50 group bg-black/80 cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                >
                    {!isPlaying ? (
                        <>
                            {/* Static Thumbnail Facade */}
                            <NextImage
                                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                alt={video.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                            />
                            {/* Play Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-primary/20">
                                    <Play size={20} className="text-accent-primary ml-1 fill-accent-primary/20" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    )}
                </div>
            </TechPanel>
        </motion.div>
    );
}

export default function YoutubeVideos() {
    return (
        <section id="videos" className="py-16 px-6 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-8">
                    <div className="flex-1 max-w-2xl">
                        <SectionLabel
                            label="05"
                            title="Latest Videos"
                            description={VIDEOS_INTRO}
                            className="!mb-0"
                        />
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="w-full lg:max-w-md lg:mt-[80px]"
                    >
                        <div className="p-4 rounded-xl bg-bg-surface/30 border border-border-dim/30 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                            <div className="flex items-center gap-4 sm:gap-5">
                                {/* Profile Image (Compact) */}
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-accent-primary/20 shrink-0 shadow-[0_0_20px_rgba(0,240,255,0.05)] relative">
                                    <NextImage
                                        src={YOUTUBE_PROFILE_IMAGE}
                                        alt="Shanchoy Noor"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Channel Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col gap-0.5">
                                        <h2 className="text-lg sm:text-xl font-display font-bold text-text-bright truncate tracking-tight">
                                            Shanchoy Noor
                                        </h2>
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[9px] sm:text-[10px] font-tech text-text-dim uppercase tracking-wider">
                                            <span className="text-accent-primary">@shanchoynoor</span>
                                            <span className="opacity-30">•</span>
                                            <span>77 subscribers</span>
                                            <span className="opacity-30">•</span>
                                            <span>14 videos</span>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <div className="hidden sm:block pt-3">
                                        <a
                                            href="https://www.youtube.com/@shanchoynoor?sub_confirmation=1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-5 py-1.5 rounded-full bg-white text-black font-tech text-[9px] font-bold hover:bg-white/90 transition-all shadow-[0_4px_12px_rgba(255,255,255,0.1)] active:scale-95"
                                        >
                                            Subscribe
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Subscribe Button */}
                            <div className="mt-4 sm:hidden">
                                <a
                                    href="https://www.youtube.com/@shanchoynoor?sub_confirmation=1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full block text-center py-2 rounded-full bg-white text-black font-tech text-[9px] font-bold active:scale-95"
                                >
                                    Subscribe
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {LATEST_YOUTUBE_VIDEOS.map((video, i) => (
                        <VideoCard key={video.id} video={video} index={i} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
