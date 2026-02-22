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

                    {/* GEOMETRIC TECH LOADER */}
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        {/* Outer Hexagon Frame */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-[0.5px] border-accent-primary/30"
                            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                        />

                        {/* Inner Rotating Hexagon */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-3 border-[0.5px] border-accent-secondary/40"
                            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                        />

                        {/* Central Hub Core */}
                        <div className="relative w-4 h-4 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 bg-accent-primary rounded-sm rotate-45 shadow-[0_0_8px_#00F0FF]"
                            />
                            {/* Scanning Radar Line */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute w-24 h-[0.5px] bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent z-10"
                            />
                        </div>

                        {/* Vertice Markers */}
                        <div className="absolute inset-0 pointer-events-none">
                            {[0, 60, 120, 180, 240, 300].map((angle) => (
                                <motion.div
                                    key={angle}
                                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: angle / 360 }}
                                    style={{
                                        transform: `rotate(${angle}deg) translateY(-40px)`,
                                    }}
                                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-accent-primary/40 rounded-full -translate-x-1/2 -translate-y-1/2"
                                />
                            ))}
                        </div>
                    </div>

                    {/* STATUS MESSAGE */}
                    <div className="mt-8 flex flex-col items-center gap-2">
                        <motion.span
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="font-tech text-[10px] tracking-[0.6em] text-accent-primary uppercase"
                        >
                            INITIALIZING...
                        </motion.span>
                        <div className="w-32 h-[1px] bg-white/5 relative overflow-hidden">
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
