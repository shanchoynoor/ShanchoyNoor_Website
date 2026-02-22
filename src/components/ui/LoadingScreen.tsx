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
                    <div className="relative w-40 h-40 flex items-center justify-center">
                        {/* Outer Geometric Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[1px] border-dashed border-accent-primary/30 rounded-full"
                        />

                        {/* Middle Tech Ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 border-[2px] border-t-accent-primary border-r-transparent border-b-accent-primary/10 border-l-transparent rounded-full"
                        />

                        {/* Inner Pulse Ring */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-10 border-[1px] border-accent-secondary/40 rounded-full bg-accent-secondary/5 shadow-[0_0_15px_rgba(255,46,46,0.2)]"
                        />

                        {/* Core Singularity */}
                        <motion.div
                            animate={{
                                scale: [1, 1.5, 1],
                                boxShadow: [
                                    "0 0 10px #00F0FF",
                                    "0 0 30px #00F0FF",
                                    "0 0 10px #00F0FF"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-2 h-2 bg-accent-primary rounded-full z-20"
                        />

                        {/* Scanning Line Effect */}
                        <motion.div
                            animate={{
                                top: ["0%", "100%", "0%"]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute left-0 right-0 h-px bg-accent-primary/10 shadow-[0_0_5px_#00F0FF] z-10"
                        />
                    </div>

                    {/* STATUS MESSAGE */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mt-12 flex flex-col items-center gap-2"
                    >
                        <span className="font-tech text-[10px] tracking-[0.4em] text-accent-primary uppercase">
                            INITIALIZING_STARK_INTERFACE
                        </span>
                        <div className="flex gap-1 h-[2px]">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        backgroundColor: ["#00F0FF", "rgba(0,240,255,0.1)", "#00F0FF"]
                                    }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-8"
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
