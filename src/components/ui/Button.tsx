'use client';

// Updating Button to match "CyberButton" Aesthetic
import type { ReactNode } from 'react';

interface ButtonProps {
    variant: 'primary' | 'ghost';
    href?: string;
    onClick?: () => void;
    children: ReactNode;
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

const BASE_STYLES = "relative inline-flex items-center justify-center font-tech uppercase tracking-widest text-xs font-bold transition-all duration-300 overflow-hidden group";

const VARIANT_STYLES = {
    primary: "bg-accent-primary/10 text-accent-primary border border-accent-primary hover:bg-accent-primary hover:text-bg-base hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]",
    ghost: "text-text-dim border border-border-dim hover:border-text-bright hover:text-text-bright",
};

export default function Button({
    variant,
    href,
    onClick,
    children,
    className = '',
    type = 'button',
    disabled = false,
}: ButtonProps) {

    // Angle cut styles via clip-path
    const clipStyle = {
        clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
    };

    const combinedClasses = `${BASE_STYLES} ${VARIANT_STYLES[variant]} px-8 py-4 ${className}`;

    const buttonContent = (
        <>
            <span className="relative z-10">{children}</span>
            {/* Decorative corner bits */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-50" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-50" />
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                className={combinedClasses}
                style={clipStyle}
            >
                {buttonContent}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={combinedClasses}
            disabled={disabled}
            style={clipStyle}
        >
            {buttonContent}
        </button>
    );
}
