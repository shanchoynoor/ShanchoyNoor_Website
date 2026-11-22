interface TechTagProps {
    label: string;
    variant?: 'default' | 'featured' | 'ai';
}

const VARIANT_STYLES = {
    default: 'border-border-dim text-text-bright/90 hover:text-text-bright hover:border-text-dim',
    featured: 'border-accent-warning/30 text-accent-warning bg-accent-warning/5',
    ai: 'border-accent-primary/30 text-accent-primary bg-accent-primary/5',
} as const;

export default function TechTag({ label, variant = 'default' }: TechTagProps) {
    const planned = label.includes('(planned)');
    return (
        <span
            className={`
        inline-block px-2 py-0.5 
        font-tech text-[8px] tracking-wide uppercase
        border ${VARIANT_STYLES[variant]} ${planned ? 'opacity-50 border-dashed' : ''}
        transition-colors duration-200
        clip-path-slant
      `}
            style={{
                clipPath: "polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)"
            }}
        >
            {label}
        </span>
    );
}
