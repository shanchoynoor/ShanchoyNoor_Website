'use client';

import { motion } from 'framer-motion';
import { Power, Menu, X, Terminal, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '@/lib/constants';

// Top "Mission Control" bar
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [typedText, setTypedText] = useState('');

    // Typing Effect
    useEffect(() => {
        const textToType = "Hey, visitor! Welcome to my site.";
        let currentText = "";
        let isDeleting = false;
        let loopNum = 0;
        let typingTimer: NodeJS.Timeout;

        const handleType = () => {
            currentText = isDeleting
                ? textToType.substring(0, currentText.length - 1)
                : textToType.substring(0, currentText.length + 1);

            setTypedText(currentText);

            let typingSpeed = isDeleting ? 30 : 80;

            if (!isDeleting && currentText === textToType) {
                typingSpeed = 2000; // Pause at the end before deleting
                isDeleting = true;
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                loopNum++;
                typingSpeed = 500; // Pause before typing again
            }

            typingTimer = setTimeout(handleType, typingSpeed);
        };

        typingTimer = setTimeout(handleType, 1000); // Initial start delay

        return () => clearTimeout(typingTimer);
    }, []);

    // Scroll Detection for glass effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`
          w-full px-5 py-2 transition-all duration-300 border-b
          ${scrolled ? 'bg-bg-panel/20 backdrop-blur-sm shadow-sm border-border-dim/20' : 'bg-transparent border-transparent'}
        `}
            >
                {/* Absolute Top-Left Branding */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-4 hidden lg:flex z-10">
                    <div className="flex items-center gap-2 text-accent-primary">
                        <Power size={18} className="animate-pulse" />
                        <span className="font-tech text-sm tracking-widest font-bold">S.NOOR</span>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto h-12 flex items-center justify-between w-full">
                
                {/* Center -> Now Left-aligned within max-w-6xl container: Typing Message */}
                <div className="hidden md:flex items-center gap-5 font-tech text-xs text-text-bright ml-[26px]">
                    <span className="flex items-center gap-2">
                        <Terminal size={12} className="text-accent-secondary" />
                        <span className="tracking-wider text-[11px] whitespace-nowrap inline-block w-[280px]">
                            {typedText}<span className="animate-pulse">_</span>
                        </span>
                    </span>
                </div>
                
                {/* Mobile only branding (centered when layout shrinks) */}
                <div className="flex lg:hidden items-center gap-4">
                    <div className="flex items-center gap-2 text-accent-primary">
                        <Power size={18} className="animate-pulse" />
                        <span className="font-tech text-sm tracking-widest font-bold">S.NOOR</span>
                    </div>
                </div>

                {/* Right: Navigation */}
                <nav className="hidden md:flex items-center gap-6 font-tech text-sm">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="relative group text-text-bright hover:text-accent-primary transition-colors"
                        >
                            {/* Hover brackets effect */}
                            <span className="absolute -left-2 opacity-0 group-hover:opacity-100 transition-opacity">[</span>
                            {link.label}
                            <span className="absolute -right-2 opacity-0 group-hover:opacity-100 transition-opacity">]</span>
                        </a>
                    ))}
                    <a href="/Shanchoy_Noor_Resume_MAR21-2026.pdf" download="Shanchoy_Noor_Resume.pdf" className="flex items-center gap-2 px-4 py-1 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-bg-base transition-colors text-xs tracking-widest">
                        <Download size={14} />
                        RESUME
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-accent-primary z-50" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu />}
                </button>
                </div>
            </motion.div>

            {/* Mobile close button — fixed top-right when overlay is open */}
            {isOpen && (
                <button
                    className="fixed top-4 right-5 z-[60] text-accent-primary md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={28} />
                </button>
            )}

            {/* Mobile Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-bg-base/95 backdrop-blur-xl z-40 flex items-center justify-center"
                >
                    <div className="flex flex-col gap-8 text-center font-tech text-xl">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-text-bright hover:text-accent-primary"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="/Shanchoy_Noor_Resume_MAR21-2026.pdf"
                            download="Shanchoy_Noor_Resume.pdf"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center gap-2 px-4 py-2 border border-accent-primary text-accent-primary text-sm tracking-widest"
                        >
                            <Download size={14} />
                            RESUME
                        </a>
                    </div>
                </motion.div>
            )}
        </header>
    );
}
