'use client';

import { Mail, Github, Linkedin } from 'lucide-react';
import { FOOTER, CONTACT_LINKS } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = {
    Mail,
    Github,
    Linkedin,
};

export default function Footer() {
    return (
        <footer className="border-t border-border-subtle">
            <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-text-muted text-[13px] font-[family-name:var(--font-body)]">
                    {FOOTER.copyright}
                </p>
                <div className="flex items-center gap-6">
                    {CONTACT_LINKS.map((link) => {
                        const Icon = ICON_MAP[link.iconName];
                        return (
                            <a
                                key={link.iconName}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="text-text-muted hover:text-text-primary transition-colors duration-200"
                                aria-label={link.iconName}
                            >
                                {Icon && <Icon size={18} />}
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
