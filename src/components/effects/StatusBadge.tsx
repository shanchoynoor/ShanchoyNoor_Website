interface StatusBadgeProps {
    text: string;
}

export default function StatusBadge({ text }: StatusBadgeProps) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-surface border border-border-subtle rounded-full">
            <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 status-pulse" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="font-[family-name:var(--font-mono)] text-text-muted text-xs">
                {text}
            </span>
        </div>
    );
}
