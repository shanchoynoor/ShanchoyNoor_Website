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
                    className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* SOLID BACKGROUND (Implicitly bg-bg-base in className) */}

                    {/* ULTRA-MINIMAL SCI-FI RADAR LOADER */}
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        {/* Outer Frame (Partial) */}
                        <div className="absolute inset-0 border border-accent-primary/20 rounded-full" />
                        <div className="absolute inset-0 border-t-2 border-accent-primary/40 rounded-full animate-pulse" />
                        
                        {/* Shimmering Radar Sweep */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[2px]"
                        >
                            {/* Sharp Scan Line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1/2 bg-accent-primary shadow-[0_0_8px_#00F0FF]" />
                            
                            {/* Scanning Glow Trail */}
                            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,rgba(0,240,255,0.1)_0deg,transparent_60deg)]" />
                        </motion.div>

                        {/* Central Neural Link Core */}
                        <motion.div
                            animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3]
                            }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-1 h-1 bg-accent-primary rounded-full shadow-[0_0_12px_#00F0FF] z-10"
                        />
                    </div>

                    {/* MINIMAL STATUS */}
                    <div className="mt-3 flex flex-col items-center gap-1 grayscale opacity-60">
                        <div className="font-tech text-[10px] text-accent-primary uppercase">
                            LOADING...
                        </div>
                        <div className="w-10 h-[1px] bg-white/5 relative overflow-hidden">
                            <motion.div
                                animate={{ left: ["-100%", "100%"] }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-1/3 bg-accent-primary/40"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
