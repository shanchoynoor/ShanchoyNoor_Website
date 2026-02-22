'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Add a small delay to ensure the animation is seen and system is stable
            setTimeout(() => {
                setIsLoading(false);
            }, 1500);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-bg-base flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* SPACETIME BACKGROUND EFFECT */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/5 rounded-full blur-[120px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[80px]" />
                    </div>

                    {/* CENTRAL TECH SINGULARITY */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        {/* Outer Telemetry Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[0.5px] border-accent-primary/20 rounded-full"
                        >
                            {/* Static Markers */}
                            {[0, 90, 180, 270].map((angle) => (
                                <div
                                    key={angle}
                                    style={{ transform: `rotate(${angle}deg)` }}
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-accent-primary/40"
                                />
                            ))}
                        </motion.div>

                        {/* Rotating Data Ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-2 border-[1px] border-t-accent-primary/60 border-r-transparent border-b-transparent border-l-transparent rounded-full"
                        />

                        {/* Middle Tech Ring - Fragmented */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-5 border-[1px] border-t-accent-secondary/30 border-r-transparent border-b-accent-secondary/30 border-l-transparent rounded-full opacity-40"
                        />

                        {/* Core Singularity - Small & Sharp */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-accent-primary rounded-full z-20 shadow-[0_0_10px_#00F0FF]"
                        />

                        {/* Scanning HUD Line */}
                        <motion.div
                            animate={{
                                top: ["10%", "90%", "10%"]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-[-10%] right-[-10%] h-[0.5px] bg-accent-primary/20 shadow-[0_0_8px_rgba(0,240,255,0.4)] z-10"
                        />
                    </div>

                    {/* STATUS MESSAGE - Professional & Minimal */}
                    <div className="mt-10 flex flex-col items-center gap-3">
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center gap-3"
                        >
                            <span className="w-1 h-1 bg-accent-secondary rounded-full animate-pulse" />
                            <span className="font-tech text-[8px] tracking-[0.5em] text-text-bright/60 uppercase">
                                SYNCING_NEURAL_INTERFACE
                            </span>
                        </motion.div>

                        {/* Cinematic Minimal Progress */}
                        <div className="w-32 h-[1px] bg-white/5 relative overflow-hidden">
                            <motion.div
                                animate={{
                                    left: ["-100%", "100%"]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
