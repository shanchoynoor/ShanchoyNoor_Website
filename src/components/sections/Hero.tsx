'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { MapPin, Activity, Power, Zap, Cpu, Shield, ArrowRight, Github, Linkedin, Facebook, Instagram, Youtube, X, Play } from 'lucide-react';
import { XLogo } from '@/components/icons/XLogo';
import Button from '@/components/ui/Button';
import NextImage from 'next/image';
import { SITE_METADATA } from '@/lib/constants';

export default function Hero() {
    const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Generate random stars for Layer 1
        const newStars = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 3 + 2,
        }));
        setStars(newStars);
    }, []);

    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleScroll = () => {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 1000);
    };

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden space-bg select-none">

            {/* HOLOGRAPHIC MONITOR & CONTENT */}
            <div className="relative z-20 w-full max-w-7xl px-4 md:px-12 flex items-center justify-center pt-16 pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: 5 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    style={{ perspective: '1000px' }}
                    className="hologram-monitor w-full min-h-[85vh] rounded-[3rem] p-6 md:p-14 relative flex items-center overflow-hidden"
                >
                    {/* BACKGROUND INSIDE MONITOR */}
                    <div className="absolute inset-0 z-0 pointer-events-none rounded-[3rem] overflow-hidden opacity-30">
                        {/* Starfield */}
                        <div className="stars-container relative w-full h-full">
                            {stars.map((star) => (
                                <div
                                    key={star.id}
                                    className="star bg-white rounded-full absolute"
                                    style={{
                                        left: `${star.x}%`,
                                        top: `${star.y}%`,
                                        width: `${star.size}px`,
                                        height: `${star.size}px`,
                                        animationDuration: `${star.duration}s`,
                                        animationDelay: `${Math.random() * 5}s`
                                    }}
                                />
                            ))}
                        </div>

                        {/* Orbital Earth */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, rotate: -5, x: 100, y: 100 }}
                            animate={{
                                opacity: 0.8,
                                scale: 1,
                                rotate: 0,
                                x: [100, 0],
                                y: [100, 0]
                            }}
                            transition={{ duration: 4, ease: 'easeOut' }}
                            className="absolute -bottom-[5%] -right-[5%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full earth-atmosphere overflow-hidden"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 scale-125"
                            >
                                <NextImage
                                    src="https://pngimg.com/uploads/earth/earth_PNG39.png"
                                    alt="Orbital Earth"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                            {/* Dramatic Atmospheric Rim Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent opacity-70" />

                            {/* Blue atmospheric rim glow instead of solid border */}
                            <div className="absolute inset-0 border-[8px] border-accent-primary/20 blur-md rounded-full" />
                        </motion.div>
                    </div>

                    {/* Monitor UI Elements (Metadata) */}
                    <div className="absolute top-8 left-14 font-tech text-[8px] text-accent-primary/40 tracking-[0.4em] z-10">
                        NAV_SYS_v4.0 // COCKPIT_HUD_A1
                    </div>
                    <div className="absolute top-8 right-14 font-tech text-[8px] text-accent-primary/40 tracking-[0.4em] z-10">
                        EYE_SENS_v2.0.4
                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full pt-8 z-10 relative">

                        {/* MONITOR LEFT: Identity & Main Message */}
                        <div className="lg:col-span-7 space-y-8">

                            {/* Status Header */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10"
                            >
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                                <span className="font-tech text-xs text-text-bright tracking-widest uppercase">
                                    SYSTEM: LIVE // OPEN TO COLLABORATION
                                </span>
                            </motion.div>

                            {/* Identity Row: Photo + Information */}
                            <div className="flex flex-col md:flex-row gap-8 items-stretch">
                                {/* Biometric Bio-Photo */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 }}
                                    onClick={() => window.innerWidth >= 768 && setIsModalOpen(true)}
                                    className="relative w-32 md:w-36 min-h-[160px] border border-accent-primary/20 shrink-0 md:cursor-pointer group/img"
                                >
                                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent-primary" />
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent-primary" />
                                    <div className="absolute inset-1 overflow-hidden">
                                        <NextImage
                                            src="/id_image/shanchoy_noor.jpg"
                                            alt="Identity"
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                        {/* Scanning Line */}
                                        <motion.div
                                            animate={{ top: ['0%', '100%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-px bg-accent-primary/60 shadow-[0_0_10px_#00F0FF] z-10"
                                        />
                                    </div>
                                </motion.div>

                                {/* Identity Text Cluster */}
                                <div className="space-y-1 pt-1">
                                    <motion.h1
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.2 }}
                                        className="font-display text-3xl md:text-4xl font-bold cyan-glow-text leading-tight tracking-[0.05em]"
                                    >
                                        SHANCHOY NOOR
                                    </motion.h1>
                                    <div className="space-y-1">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.4 }}
                                            className="font-tech text-accent-primary tracking-[0.2em] font-medium uppercase text-[13px]"
                                        >
                                            WEB & APP DEVELOPER · AI BUILDER
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.45 }}
                                            className="font-tech text-text-bright/70 uppercase text-[10px] tracking-wider space-y-1"
                                        >
                                            <p>
                                                Founder & CEO at{' '}
                                                <a href="https://choyzenic.com" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline transition-colors">
                                                    Choyzenic
                                                </a>
                                                {' '}&{' '}
                                                <a href="https://oegoo.com" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline transition-colors">
                                                    Oegoo LLC
                                                </a>
                                            </p>
                                            <p>
                                                Post-Production Manager at{' '}
                                                <a href="https://iqrasys.com" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline transition-colors">
                                                    Iqrasys Solutions Limited
                                                </a>
                                            </p>
                                            <p>
                                                Social Media Manager at{' '}
                                                <a href="https://youtubevillage.com" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline transition-colors">
                                                    YouTube Village
                                                </a>
                                            </p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.5 }}
                                            className="font-tech text-[10px] text-accent-primary/60 uppercase flex items-center gap-1.5"
                                        >
                                            <MapPin size={10} className="text-accent-primary animate-pulse" />
                                            DHAKA, BANGLADESH
                                        </motion.div>

                                    </div>
                                    {/* Social Connects */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.7 }}
                                        className="flex gap-6 pt-2"
                                    >
                                        {[
                                            { Icon: Github, href: SITE_METADATA.social.github },
                                            { Icon: Linkedin, href: SITE_METADATA.social.linkedin },
                                            { Icon: Facebook, href: SITE_METADATA.social.facebook },
                                            { Icon: Instagram, href: SITE_METADATA.social.instagram },
                                            { Icon: XLogo, href: SITE_METADATA.social.twitter },
                                            { Icon: Youtube, href: SITE_METADATA.social.youtube },
                                        ].map(({ Icon, href }, idx) => (
                                            <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="text-text-dim hover:text-accent-primary transition-colors cursor-pointer">
                                                <Icon size={20} />
                                            </a>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                            {/* Main CTA Section (Mission critical heading) */}
                            <div className="space-y-6 pt-2">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.8 }}
                                    className="font-tech text-lg md:text-xl text-accent-primary leading-snug uppercase tracking-tight max-w-2xl"
                                >
                                    &gt; I build fast, accessible, and scalable web and app systems — with the architectural depth to take them all the way to production.
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.0 }}
                                    className="text-text-bright/60 text-xs md:text-sm max-w-md leading-relaxed font-body"
                                >
                                    Architecting high-performance systems. Integrating AI pipelines. Building the next generation of web infrastructure.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2.2 }}
                                    className="flex flex-wrap gap-4 pt-4"
                                >
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 px-4 py-1 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-bg-base transition-colors text-[10px] tracking-widest uppercase"
                                    >
                                        <Play size={12} />
                                        VIDEO_RESUME
                                    </a>
                                </motion.div>
                            </div>
                        </div>

                        {/* MONITOR RIGHT: Telemetry Wing */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="hidden lg:flex lg:col-span-5 flex-col gap-6 pl-12 border-l border-white/5"
                        >
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="font-tech text-[10px] text-accent-secondary">WORKING_ON</span>
                                <span className="font-tech text-[9px] text-text-bright/40">ACTIVE_SPRINT: 2026.03</span>
                            </div>

                            <div
                                className={`space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar max-h-[450px] ${isScrolling ? 'is-scrolling' : ''}`}
                                onScroll={handleScroll}
                            >
                                {/* Project Metadata */}
                                <div className="space-y-6">
                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-text-dim">
                                            <span className="text-accent-primary">[PROJECT.01]</span>
                                            <span className="text-accent-primary/60">MVP_READY</span>
                                        </div>
                                        <p className="font-display text-sm text-text-bright leading-tight">ChoyCraft_AI Content Generation</p>
                                        <p className="font-tech text-[8px] text-text-bright/50 tracking-wide uppercase">Multi-modal AI Generation Suite // Single Subscription</p>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-text-dim">
                                            <span className="text-accent-primary">[PROJECT.02]</span>
                                            <span className="text-accent-primary/60">MVP_READY</span>
                                        </div>
                                        <p className="font-display text-sm text-text-bright leading-tight">ChoyBlog_Automation</p>
                                        <p className="font-tech text-[8px] text-text-bright/50 tracking-wide uppercase">WP-Plugin // AI Writing // Scheduling // Cover Images</p>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-text-dim">
                                            <span className="text-accent-primary">[PROJECT.03]</span>
                                            <span className="text-accent-primary/40">IN_PROGRESS</span>
                                        </div>
                                        <p className="font-display text-sm text-text-bright leading-tight">ChoyAI_Personal AI Assistant</p>
                                        <p className="font-tech text-[8px] text-text-bright/50 tracking-wide uppercase">Personal Agentic AI // Task Automation // Companion AI </p>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-text-dim">
                                            <span className="text-accent-primary">[PROJECT.04]</span>
                                            <span className="text-accent-primary/40">STARTED</span>
                                        </div>
                                        <p className="font-display text-sm text-text-bright leading-tight">ChoyNet_Social Media</p>
                                        <p className="font-tech text-[8px] text-text-bright/50 tracking-wide uppercase">Social for Professionals // Productivity Focused</p>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-text-dim">
                                            <span className="text-accent-primary">[PROJECT.05]</span>
                                            <span className="text-accent-primary/40">PLANNING</span>
                                        </div>
                                        <p className="font-display text-sm text-text-bright leading-tight">ChoyFlow_Business Automation</p>
                                        <p className="font-tech text-[8px] text-text-bright/50 tracking-wide uppercase">CRM/ERP // Lead Gen // Marketing & Sales</p>
                                    </div>
                                </div>

                                {/* Console Box */}
                                <div className="mt-8 p-4 bg-black/40 border border-white/5 font-mono text-[9px] text-accent-primary/80 relative overflow-hidden w-fit max-w-full">
                                    <div className="absolute top-0 right-0 w-16 h-px bg-accent-primary/20" />
                                    <p className="typing-cursor leading-relaxed">
                                        warn(user): 'Efficiency critical. Executing optimized sequence.'_
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>



            {/* HOLOGRAPHIC IMAGE MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-xl"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20, rotateX: 10 }}
                            animate={{ scale: 1, y: 0, rotateX: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full aspect-square md:aspect-video bg-bg-surface/40 border border-accent-primary/30 hologram-monitor p-4 md:p-8 flex flex-col md:flex-row gap-8 overflow-hidden pointer-events-auto"
                        >
                            {/* Close Trigger (X) */}
                            <motion.button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-accent-primary hover:text-white transition-all z-[120] p-1 bg-black/40 border border-white/5 backdrop-blur-sm rounded-sm"
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </motion.button>
                            {/* Decorative Scanline Overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

                            {/* Enlarged Biometric Photo */}
                            <div className="relative flex-1 border border-accent-primary/20 bg-black/40 overflow-hidden group">
                                <NextImage src="/id_image/shanchoy_noor.jpg" alt="Identity Large" fill className="object-cover transition-all duration-700" />
                            </div>

                            {/* Identity Details Panel */}
                            <div className="w-full md:w-80 flex flex-col justify-between py-2 space-y-6">
                                <div className="space-y-4">
                                    <h3 className="font-display text-2xl text-accent-primary border-b border-accent-primary/20 pb-2 uppercase tracking-widest">Identity Overlay</h3>
                                    <div className="space-y-3 font-tech text-[10px] text-text-dim">
                                        <div className="flex justify-between"><span>FULL_NAME</span> <span className="text-text-bright">SHANCHOY NOOR</span></div>
                                        <div className="flex justify-between"><span>DATE_OF_BIRTH</span> <span className="text-text-bright">12.01.1999</span></div>
                                        <div className="flex justify-between"><span>LOCATION_LAT</span> <span className="text-text-bright">23.8340</span></div>
                                        <div className="flex justify-between"><span>LOCATION_LONG</span> <span className="text-text-bright">90.3620</span></div>
                                        <div className="flex justify-between"><span>CITIZENSHIP</span> <span className="text-text-bright">BANGLADESH</span></div>
                                    </div>
                                </div>


                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-full py-3 border border-white/10 hover:border-accent-primary/50 text-text-dim hover:text-accent-primary transition-all font-tech text-[10px] tracking-[0.3em] uppercase"
                                >
                                    CLOSE
                                </button>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-accent-primary/40" />
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-accent-primary/40" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
