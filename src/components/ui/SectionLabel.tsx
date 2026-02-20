'use client';

import { motion } from 'framer-motion';

interface SectionLabelProps {
    label: string;
    title: string;
    description?: string;
}

export default function SectionLabel({ label, title, description }: SectionLabelProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 border-l-2 border-accent-primary pl-6 py-2"
        >
            <div className="flex items-center gap-3 mb-2">
                <span className="font-tech text-xs text-accent-primary tracking-[0.2em] uppercase">
          // SECTOR_{label}
                </span>
                <div className="h-px flex-grow bg-gradient-to-r from-accent-primary/50 to-transparent max-w-[100px]" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-bright uppercase tracking-tight">
                {title}
            </h2>

            {description && (
                <p className="mt-4 text-text-dim max-w-lg text-sm leading-relaxed font-mono border-l border-border-dim pl-4 ml-1">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
