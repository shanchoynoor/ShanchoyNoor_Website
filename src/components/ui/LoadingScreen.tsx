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

                    {/* ORBITAL SURVEYOR LOADER */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* The Data Planet (Central Core) */}
                        <div className="relative w-8 h-8 flex items-center justify-center">
                            {/* Inner Matrix Core */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.2, 0.5, 0.2],
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 border border-accent-primary/20 rounded-full flex items-center justify-center bg-accent-primary/5"
                            >
                                <span className="text-[6px] font-mono text-accent-primary/40 leading-tight">01<br />10</span>
                            </motion.div>

                            {/* Energy Handshake Pulse (Synced to 3s orbit) */}
                            <motion.div
                                animate={{
                                    scale: [1, 2.5],
                                    opacity: [0, 0.3, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeOut"
                                }}
                                className="absolute inset-0 bg-accent-primary rounded-full blur-md"
                            />
                        </div>

                        {/* The Orbital Probe (Diamond Ship) */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                {/* The Ship Shape */}
                                <div className="w-1.5 h-2.5 bg-accent-primary rounded-[1px] rotate-45 shadow-[0_0_10px_#00F0FF]" />

                                {/* Light Tether (Scanning Beam) */}
                                <div className="w-[0.5px] h-8 bg-gradient-to-b from-accent-primary/40 to-transparent" />
                            </div>
                        </motion.div>
                    </div>

                    {/* STATUS MESSAGE */}
                    <div className="mt-8 flex flex-col items-center gap-2">
                        <motion.span
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="font-tech text-[10px] tracking-[1.2em] text-accent-primary uppercase"
                        >
                            INITIALIZING...
                        </motion.span>
                        <div className="w-24 h-[1px] bg-white/5 relative overflow-hidden">
                            <motion.div
                                animate={{
                                    left: ["-100%", "100%"]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-1/2 bg-accent-primary/40"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
