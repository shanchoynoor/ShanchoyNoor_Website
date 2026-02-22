'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import TechPanel from '@/components/ui/TechPanel';
import Tooltip from '@/components/ui/Tooltip';
import {
    ARCHITECTURE_INTRO,
    ARCHITECTURE_NODES,
    PHILOSOPHY_CARDS,
} from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

const CONNECTIONS = [
    ['client', 'frontend'],
    ['frontend', 'gateway'],
    ['gateway', 'orchestrator'],
    ['orchestrator', 'openai'],
    ['orchestrator', 'brave'],
    ['openai', 'formatter'],
    ['brave', 'formatter'],
    ['formatter', 'supabase'],
    ['supabase', 'response'],
] as const;

function getNodeCenter(id: string): { x: number; y: number } {
    const node = ARCHITECTURE_NODES.find((n) => n.id === id);
    if (!node) return { x: 0, y: 0 };
    return { x: node.x, y: node.y + 16 };
}

export default function Architecture() {
    return (
        <section id="architecture" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto relative z-10">
                <SectionLabel
                    label="05"
                    title="System Architecture"
                    description={ARCHITECTURE_INTRO}
                />

                {/* SVG Schematic Diagram */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-16"
                >
                    <TechPanel sysId="SCHEMATIC.01" className="overflow-x-auto min-h-[400px] flex items-center justify-center bg-bg-surface/50">
                        <svg
                            viewBox="0 0 800 560"
                            className="w-full h-auto max-w-2xl mx-auto"
                            fill="none"
                            role="img"
                            aria-label="Choy AI system architecture diagram"
                        >
                            <defs>
                                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />

                            {/* Data Flow Lines */}
                            {CONNECTIONS.map(([from, to]) => {
                                const start = getNodeCenter(from);
                                const end = getNodeCenter(to);
                                return (
                                    <g key={`${from}-${to}`}>
                                        <line
                                            x1={start.x}
                                            y1={start.y + 20}
                                            x2={end.x}
                                            y2={end.y - 20}
                                            stroke="var(--border-dim)"
                                            strokeWidth="1"
                                        />
                                        <circle cx={start.x} cy={start.y + 20} r="2" fill="var(--accent-dim)" />
                                        <circle cx={end.x} cy={end.y - 20} r="2" fill="var(--accent-dim)" />
                                    </g>
                                );
                            })}

                            {/* Nodes as Circuit Panels */}
                            {ARCHITECTURE_NODES.map((node) => (
                                <g key={node.id} className="cursor-pointer group">
                                    <title>{node.tooltip}</title>
                                    {/* Node Background */}
                                    <rect
                                        x={node.x - 80}
                                        y={node.y}
                                        width="160"
                                        height="40"
                                        fill={node.isAccent ? 'rgba(0, 240, 255, 0.05)' : '#0F1620'}
                                        stroke={node.isAccent ? 'var(--accent-primary)' : 'var(--border-dim)'}
                                        strokeWidth="1"
                                    />
                                    {/* Tech Decals */}
                                    <rect x={node.x - 78} y={node.y + 2} width="4" height="4" fill={node.isAccent ? 'var(--accent-primary)' : 'var(--text-dim)'} opacity="0.5" />
                                    <rect x={node.x + 74} y={node.y + 34} width="4" height="4" fill={node.isAccent ? 'var(--accent-primary)' : 'var(--text-dim)'} opacity="0.5" />

                                    {/* Label */}
                                    <text
                                        x={node.x}
                                        y={node.y + 25}
                                        textAnchor="middle"
                                        fill={node.isAccent ? 'var(--accent-primary)' : 'var(--text-dim)'}
                                        fontSize="11"
                                        fontFamily="var(--font-mono)"
                                        className="uppercase tracking-wider font-bold"
                                    >
                                        {node.label}
                                    </text>
                                </g>
                            ))}
                        </svg>
                    </TechPanel>
                </motion.div>

                {/* Philosophy Cards as Data Modules */}
                <motion.div
                    className="grid md:grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    {PHILOSOPHY_CARDS.map((card, i) => (
                        <motion.div key={card.title} variants={fadeUp}>
                            <TechPanel sysId={`PHIL.0${i + 1}`} className="h-full bg-bg-surface/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-1.5 bg-accent-secondary" />
                                    <h3 className="font-display text-sm font-bold text-text-bright uppercase">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-text-bright text-xs leading-relaxed font-mono">
                                    {card.description}
                                </p>
                            </TechPanel>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
