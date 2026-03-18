'use client';

import { motion } from 'framer-motion';

interface TechPanelProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    sysId?: string;
    showHeader?: boolean;
    showCorners?: boolean;
}

export default function TechPanel({
    children,
    className = '',
    title,
    sysId,
    showHeader = true,
    showCorners = true
}: TechPanelProps) {
    return (
        <div className={`tech-panel p-6 ${!showCorners ? 'no-corners' : ''} ${className}`}>
            {/* Header Decorative Line */}
            {showHeader && (
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
                        <span className="font-tech text-[10px] text-text-bright">
                            //{sysId}
                        </span>
                    )}
                </div>
            )}

            {children}
        </div>
    );
}
