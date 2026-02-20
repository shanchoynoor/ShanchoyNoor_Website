import type { ReactNode } from 'react';

interface GlowCardProps {
    children: ReactNode;
    className?: string;
    featured?: boolean;
}

export default function GlowCard({ children, className = '', featured = false }: GlowCardProps) {
    return (
        <div
            className={`glass-panel rounded-xl transition-all duration-200 ${featured ? 'featured-gold' : ''
                } ${className}`}
        >
            {children}
        </div>
    );
}
