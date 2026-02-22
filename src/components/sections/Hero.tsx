'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Activity, Power, Zap, Cpu, Shield, ArrowRight, Github, Linkedin, Facebook, Twitter, Youtube, X, Play } from 'lucide-react';
import Button from '@/components/ui/Button';

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

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden space-bg select-none">

            {/* LAYER 1: BACKGROUND (Deep Space + Earth) */}
            <div className="absolute inset-0 z-0 pointer-events-none py-8 md:py-12">
                <div className="relative w-full h-full cockpit-window overflow-hidden rounded-[2rem]">
                    {/* Starfield */}
                    <div className="stars-container space-bg">
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
                            opacity: 1,
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
                            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-70 mix-blend-screen scale-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent opacity-90" />
                    </motion.div>
                </div>
            </div>

            {/* LAYER 2 & 3: SPACESHIP WINDOW FRAME & INTERIOR */}
            <div className="absolute inset-0 z-10 pointer-events-none py-8 md:py-12">
                {/* Curved Metallic Window Frame */}
                <div className="absolute inset-0 border-[40px] md:border-[60px] lg:border-[80px] border-bg-base/95 shadow-[inset_0_0_100px_rgba(0,0,0,1),0_0_50px_rgba(0,0,0,0.8)] cockpit-window pointer-events-auto">
                    {/* Inner Rim Light Bounce */}
                    <div className="absolute inset-0 border-2 border-accent-primary/10 cockpit-window pointer-events-none" />

                    {/* Decorative Panel Seams & Rivets */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
                    <div className="absolute left-1/2 top-0 h-full w-px bg-white/5" />
                </div>

                {/* Dashboard / Desk Surface */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050A10] via-[#0A0F16] to-transparent border-t border-white/10">
                    {/* Volumetric Dash Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-32 dashboard-glow opacity-50" />
                </div>
            </div>

            {/* LAYER 4 & 5: HOLOGRAPHIC MONITOR & CONTENT */}
            <div className="relative z-20 w-full max-w-7xl px-4 md:px-12 flex items-center justify-center pt-28 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: 5 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    style={{ perspective: '1000px' }}
                    className="hologram-monitor w-full min-h-[75vh] rounded-[3rem] p-6 md:p-14 relative flex items-center"
                >
                    {/* Monitor UI Elements (Metadata) */}
                    <div className="absolute top-8 left-14 font-tech text-[8px] text-accent-primary/40 tracking-[0.4em]">
                        NAV_SYS_v4.0 // COCKPIT_HUD_A1
                    </div>
                    <div className="absolute top-8 right-14 font-tech text-[8px] text-accent-primary/40 tracking-[0.4em]">
                        EYE_SENS_v2.0.4
                    </div>

                    {/* Corner Bracket (Bottom Right Only) */}
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 cyan-neon-border opacity-60" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full pt-8">

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
                                    SYSTEM: ONLINE // AVAILABLE FOR HIRE
                                </span>
                            </motion.div>

                            {/* Identity Row: Photo + Information */}
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Biometric Bio-Photo */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 }}
                                    onClick={() => setIsModalOpen(true)}
                                    className="relative w-32 h-40 border border-accent-primary/20 shrink-0 cursor-pointer group/img"
                                >
                                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent-primary" />
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent-primary" />
                                    <div className="absolute inset-1 overflow-hidden">
                                        <img src="/id_image/shanchoy_noor.jpg" alt="Identity" className="w-full h-full object-cover" />
                                        {/* Scanning Line */}
                                        <motion.div
                                            animate={{ top: ['0%', '100%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-px bg-accent-primary/60 shadow-[0_0_10px_#00F0FF] z-10"
                                        />
                                    </div>
                                </motion.div>

                                {/* Identity Text Cluster */}
                                <div className="space-y-4 pt-1">
                                    <motion.h1
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.2 }}
                                        className="font-display text-3xl md:text-4xl font-bold cyan-glow-text leading-tight tracking-[0.05em]"
                                    >
                                        SHANCHOY NOOR
                                    </motion.h1>
                                    <div className="space-y-1.5">
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.4 }}
                                            className="font-tech text-accent-primary tracking-[0.2em] font-medium uppercase text-[11px]"
                                        >
                                            FRONTEND & AI DEVELOPER · ENTREPRENEUR
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.5 }}
                                            className="font-tech text-[10px] text-accent-primary/60 uppercase flex items-center gap-1.5"
                                        >
                                            <MapPin size={10} className="text-accent-primary animate-pulse" />
                                            DHAKA, BANGLADESH
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.6 }}
                                            className="font-tech text-[9.5px] text-text-bright tracking-widest leading-relaxed"
                                        >
                                            // LAT: 23.8340 // LONG: 90.3620
                                        </motion.div>
                                    </div>
                                    {/* Social Connects */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.7 }}
                                        className="flex gap-5 pt-1"
                                    >
                                        {[Github, Linkedin, Facebook, Twitter, Youtube].map((Icon, idx) => (
                                            <Icon key={idx} size={15} className="text-text-dim hover:text-accent-primary cursor-pointer transition-colors" />
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
                                    &gt; I build fast, accessible, and scalable frontend systems — with the architectural depth to take them all the way to production.
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
                                    <Button variant="primary" className="w-[180px] h-[36px] !cyan-neon-border group">
                                        <span className="flex flex-row items-center justify-center gap-1.5 mt-0.5">
                                            <Play size={10} className="fill-text-bright" />
                                            <span className="text-[10px] text-text-bright tracking-widest leading-none">VIDEO_RESUME</span>
                                        </span>
                                    </Button>
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
                                <span className="font-tech text-[10px] text-accent-primary">WORKING_ON</span>
                                <span className="font-tech text-[9px] text-text-bright/40">ACTIVE_SPRINT: 2025.02</span>
                            </div>

                            <div className="space-y-6">
                                {/* Project Metadata */}
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-text-dim">
                                            <span className="text-accent-primary">[PROJECT.01]</span>
                                            <span className="text-accent-primary/60">IN_PROGRESS</span>
                                        </div>
                                        <p className="font-display text-base text-text-bright leading-none">Choy AI Platform</p>
                                        <p className="font-tech text-[9px] text-text-bright/60 tracking-widest">NEXT.JS // OPENAI // SUPABASE // DOCKER</p>
                                    </div>

                                    <div className="space-y-1 opacity-70">
                                        <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-text-dim">
                                            <span className="text-red-400">[PROJECT.02]</span>
                                            <span className="text-red-400/60">MAINTENANCE</span>
                                        </div>
                                        <p className="font-display text-base text-text-bright leading-none">AI News Telegram Bot</p>
                                        <p className="font-tech text-[9px] text-text-bright/60 tracking-widest">PYTHON // TELEGRAM_API // CRON</p>
                                    </div>
                                </div>

                                {/* Status Indicators */}
                                <div className="space-y-3 pt-4 font-tech text-[10px] tracking-wide">
                                    <div className="flex items-center gap-3 text-red-400">
                                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse shadow-[0_0_8px_#f87171]" />
                                        AT_ORCHESTRATION: NOMINAL
                                    </div>
                                    <div className="flex items-center gap-2 text-text-bright/80">
                                        <span className="text-accent-primary">[*]</span> REACT_SERVER_COMPONENTS: ENABLED
                                    </div>
                                    <div className="flex items-center gap-2 text-text-bright/80">
                                        <span className="text-accent-primary">[*]</span> SYSTEM_LATENCY: 24MS
                                    </div>
                                </div>

                                {/* Console Box */}
                                <div className="mt-8 p-4 bg-black/40 border border-white/5 font-mono text-[9px] text-accent-primary/80 relative overflow-hidden">
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
                        {/* Close Trigger (Anywhere Click) */}
                        <motion.button
                            className="absolute top-8 right-8 text-accent-primary hover:text-white transition-colors z-[110]"
                            whileHover={{ rotate: 90 }}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.8, y: 20, rotateX: 10 }}
                            animate={{ scale: 1, y: 0, rotateX: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full aspect-square md:aspect-video bg-bg-surface/40 border border-accent-primary/30 hologram-monitor p-4 md:p-8 flex flex-col md:flex-row gap-8 overflow-hidden"
                        >
                            {/* Decorative Scanline Overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

                            {/* Enlarged Biometric Photo */}
                            <div className="relative flex-1 border border-accent-primary/20 bg-black/40 overflow-hidden group">
                                <img src="/id_image/shanchoy_noor.jpg" alt="Identity Large" className="w-full h-full object-cover transition-all duration-700" />
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
