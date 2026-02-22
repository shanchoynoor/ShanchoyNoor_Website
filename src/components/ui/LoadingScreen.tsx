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

                    {/* QUANTUM JUMP LOADER */}
                    <div className="relative w-48 h-24 flex items-center justify-center">
                        {/* Timeline Slit / Horizon Line */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute h-[1px] bg-accent-primary/20 overflow-hidden"
                        >
                            {/* The Traveler (Spark) */}
                            <motion.div
                                animate={{
                                    left: ["-10%", "110%"],
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.8, 1]
                                }}
                                className="absolute top-1/2 -translate-y-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-accent-primary to-transparent shadow-[0_0_10px_#00F0FF]"
                            />
                        </motion.div>

                        {/* Warp streaks (Only visible during "jump" phase) */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        scaleX: [0, 1.5, 0],
                                        scaleY: [1, 0.2, 1],
                                        opacity: [0, 0.6, 0],
                                        x: [0, (i % 2 === 0 ? 100 : -100)],
                                        y: [0, (i < 4 ? 40 : -40)]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.1,
                                        ease: "easeIn"
                                    }}
                                    className="absolute w-16 h-[0.5px] bg-accent-primary/30"
                                    style={{ rotate: `${i * 45}deg` }}
                                />
                            ))}
                        </div>

                        {/* Central Lens Flare / Portal */}
                        <motion.div
                            animate={{
                                scale: [0.8, 1.1, 0.8],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-12 h-12 rounded-full bg-accent-primary/10 blur-xl"
                        />
                    </div>

                    {/* STATUS MESSAGE */}
                    <div className="mt-6 flex flex-col items-center gap-2">
                        <motion.span
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="font-tech text-[10px] tracking-[0.8em] text-accent-primary uppercase"
                        >
                            INITIALIZING...
                        </motion.span>

                        {/* Data Bit Streams (Minimalist signal vibes) */}
                        <div className="flex gap-4 mt-2">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        height: [2, 8, 2],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-[1px] bg-accent-secondary"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
