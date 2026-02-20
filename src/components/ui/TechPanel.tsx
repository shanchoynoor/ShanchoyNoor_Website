'use client';

import { motion } from 'framer-motion';

interface TechPanelProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    sysId?: string;
}

export default function TechPanel({ children, className = '', title, sysId }: TechPanelProps) {
    return (
        <div className={`tech-panel p-6 ${className}`}>
            {/* Header Decorative Line */}
            <div className="flex items-center justify-between mb-4 border-b border-border-dim pb-2">
                <div className="flex items-center gap-2">
                    {/* Blinking Status LED */}
                    <div className="w-1.5 h-1.5 bg-accent-primary animate-pulse" />
                    {title && (
                        <span className="font-tech text-xs text-accent-primary tracking-widest">
                            {title}
                        </span>
                    )}
                </div>
                {sysId && (
                    <span className="font-tech text-[10px] text-text-dim opacity-50">
            //{sysId}
                    </span>
                )}
            </div>

            {children}

            {/* Footer Decoration */}
            <div className="absolute bottom-2 right-4 flex gap-1 opacity-20">
                <div className="w-8 h-1 bg-accent-primary" />
                <div className="w-2 h-1 bg-accent-primary" />
            </div>
        </div>
    );
}
