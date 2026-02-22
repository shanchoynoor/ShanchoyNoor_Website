'use client';

import { motion } from 'framer-motion';
import { Power, Menu, X, Terminal } from 'lucide-react';
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
        <header className="fixed top-0 w-full z-50 px-6 py-4">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`
          flex items-center justify-between p-4 transition-all duration-300
          ${scrolled ? 'bg-bg-panel/90 backdrop-blur-md border-b border-border-dim' : 'bg-transparent'}
          border-b border-transparent
        `}
            >
                {/* Left: System Status */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-accent-primary">
                        <Power size={18} className="animate-pulse" />
                        <span className="font-tech text-sm tracking-widest font-bold">S.NOOR</span>
                    </div>
                    <div className="hidden md:flex flex-col text-[10px] font-tech text-text-dim leading-none">
                        <span>SYS.ONLINE</span>
                        <span>V.2.0.4</span>
                    </div>
                </div>

                {/* Center: Typing Message (Hidden on small mobile) */}
                <div className="hidden md:flex items-center gap-6 font-tech text-xs text-text-dim">
                    <span className="flex items-center gap-2">
                        <Terminal size={12} className="text-accent-secondary" />
                        <span className="tracking-wider text-[11px] whitespace-nowrap inline-block w-[280px]">
                            {typedText}<span className="animate-pulse">_</span>
                        </span>
                    </span>
                </div>

                {/* Right: Navigation */}
                <nav className="hidden md:flex items-center gap-6 font-tech text-sm">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="relative group text-text-dim hover:text-accent-primary transition-colors"
                        >
                            {/* Hover brackets effect */}
                            <span className="absolute -left-2 opacity-0 group-hover:opacity-100 transition-opacity">[</span>
                            {link.label}
                            <span className="absolute -right-2 opacity-0 group-hover:opacity-100 transition-opacity">]</span>
                        </a>
                    ))}
                    <a href="#" className="px-4 py-1 border border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-bg-base transition-colors text-xs tracking-widest">
                        DOWNLOAD_RESUME
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-accent-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </motion.div>

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
                    </div>
                </motion.div>
            )}
        </header>
    );
}
