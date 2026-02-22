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

                    {/* CHRONO-DRIVE (TIME MACHINE) LOADER */}
                    <div className="relative w-32 h-32 flex items-center justify-center" style={{ perspective: "800px", transformStyle: "-webkit-preserve-3d" }}>
                        {/* X-Axis Ring (Vertical Rotation) */}
                        <motion.div
                            animate={{
                                rotateX: [0, 90, 180, 270, 0, -720, -720],
                                x: [0, 0, 0, 0, 0, 0, 1, -1, 1, -1, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9],
                                ease: "easeInOut"
                            }}
                            className="absolute inset-0 border-[0.5px] border-accent-primary/30 rounded-full"
                        />

                        {/* Y-Axis Ring (Horizontal Rotation) */}
                        <motion.div
                            animate={{
                                rotateY: [0, 90, 180, 270, 0, -720, -720],
                                y: [0, 0, 0, 0, 0, 0, 1, -1, 1, -1, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: 0.2,
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9],
                                ease: "easeInOut"
                            }}
                            className="absolute inset-4 border-[0.5px] border-accent-secondary/30 rounded-full"
                        />

                        {/* Z-Axis Ring (Planar Rotation) */}
                        <motion.div
                            animate={{
                                rotateZ: [0, 90, 180, 270, 0, -720, -720],
                                scale: [1, 1, 1, 1, 1, 1, 1.05, 0.95, 1.05, 0.95, 1]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                delay: 0.4,
                                times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.75, 0.8, 0.85, 0.9],
                                ease: "easeInOut"
                            }}
                            className="absolute inset-8 border-[0.5px] border-accent-primary/60 rounded-full"
                        />

                        {/* Central Temporal Lock (The Core) */}
                        <motion.div
                            animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-accent-primary rounded-full shadow-[0_0_15px_#00F0FF]"
                        />

                        {/* Ticking Sound-like Visual Pulses */}
                        <div className="absolute inset-[-20px] pointer-events-none">
                            {[0, 90, 180, 270].map((angle) => (
                                <motion.div
                                    key={angle}
                                    animate={{
                                        opacity: [0, 0.5, 0],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{ duration: 1, repeat: Infinity, delay: angle / 360 }}
                                    style={{
                                        transform: `rotate(${angle}deg) translateY(-60px)`,
                                    }}
                                    className="absolute top-1/2 left-1/2 w-[1px] h-2 bg-accent-primary/20 -translate-x-1/2 -translate-y-1/2"
                                />
                            ))}
                        </div>
                    </div>

                    {/* STATUS MESSAGE */}
                    <div className="mt-12 flex flex-col items-center gap-3">
                        <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="font-tech text-[10px] tracking-[1em] text-accent-primary uppercase"
                        >
                            INITIALIZING...
                        </motion.span>

                        {/* Temporal Stability Meter */}
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        backgroundColor: ["rgba(0,240,255,0.1)", "#00F0FF", "rgba(0,240,255,0.1)"]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                    className="w-4 h-[1px]"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
