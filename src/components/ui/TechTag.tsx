interface TechTagProps {
    label: string;
    variant?: 'default' | 'featured' | 'ai';
}

const VARIANT_STYLES = {
    default: 'border-border-dim text-text-dim hover:text-text-bright hover:border-text-dim',
    featured: 'border-accent-warning/30 text-accent-warning bg-accent-warning/5',
    ai: 'border-accent-primary/30 text-accent-primary bg-accent-primary/5',
} as const;

export default function TechTag({ label, variant = 'default' }: TechTagProps) {
    return (
        <span
            className={`
        inline-block px-3 py-1 
        font-tech text-[10px] tracking-wider uppercase
        border ${VARIANT_STYLES[variant]}
        transition-colors duration-200
        clip-path-slant
      `}
            style={{
                clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)"
            }}
        >
            {label}
        </span>
    );
}
