'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Power, Activity, Zap, Shield, Cpu, Binary, Globe, MapPin } from 'lucide-react';

interface VisitorData {
    ip: string;
    city: string;
    country_name: string;
    org: string;
}

const CACHE_KEY = 'shanchoy_visitor_telemetry';

export default function Footer() {
    const [visitorData, setVisitorData] = useState<VisitorData | null>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [uptime, setUptime] = useState(0);
    const [signalStrength, setSignalStrength] = useState(100);

    useEffect(() => {
        // 1. Visitor Telemetry Fix
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
            try {
                setVisitorData(JSON.parse(cached));
            } catch (e) {
                sessionStorage.removeItem(CACHE_KEY);
            }
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        fetch('https://freeipapi.com/api/json', { signal: controller.signal })
            .then(res => res.json())
            .then(data => {
                clearTimeout(timeoutId);
                const mappedData = {
                    ip: data.ipAddress || '127.0.0.1',
                    city: data.cityName || 'SECURE_NODE',
                    country_name: data.countryName || 'ENCRYPTED',
                    org: data.asName || 'INTERNAL_PROXY',
                };
                setVisitorData(mappedData);
                sessionStorage.setItem(CACHE_KEY, JSON.stringify(mappedData));
            })
            .catch(() => {
                if (!visitorData) {
                    setVisitorData({
                        ip: '127.0.0.1',
                        city: 'ORBIT_STATION',
                        country_name: 'DEEP_SPACE',
                        org: 'SECURE_NODE_01',
                    });
                }
            });

        // 2. Real-time Metrics: Scroll Progress
        const handleScroll = () => {
            const h = document.documentElement,
                b = document.body,
                st = 'scrollTop',
                sh = 'scrollHeight';
            const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, Math.round(percent))));
        };
        window.addEventListener('scroll', handleScroll);

        // 3. Real-time Metrics: Uptime
        const start = Date.now();
        const uptimeInterval = setInterval(() => {
            setUptime(Math.floor((Date.now() - start) / 1000));
        }, 1000);

        // 4. Real-time Metrics: Signal Strength (Simplified)
        if ('connection' in navigator) {
            const conn = (navigator as any).connection;
            const updateSignal = () => {
                const rtt = conn.rtt || 50;
                const strength = Math.max(10, 100 - (rtt / 10));
                setSignalStrength(Math.round(strength));
            };
            conn.addEventListener('change', updateSignal);
            updateSignal();
        }

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
            window.removeEventListener('scroll', handleScroll);
            clearInterval(uptimeInterval);
        };
    }, []);

    // Session Uptime Helper
    const formatUptime = (sec: number) => {
        const mins = Math.floor(sec / 60);
        const s = sec % 60;
        return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <footer className="relative mt-20 pb-12 overflow-hidden">
            {/* Background Decorative Grid - subtle */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-accent-primary/5 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative">
                {/* Main HUD Control Surface */}
                <div className="relative grid grid-cols-1 md:grid-cols-12 items-end gap-6 md:gap-0">

                    {/* LEFT WING: Mission Telemetry */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-8 bg-accent-primary/30" />
                            <span className="font-tech text-[10px] text-accent-primary tracking-[0.2em] uppercase">Mission_Telemetry</span>
                        </div>
                        <div className="flex flex-col gap-3 pl-2">
                            {[
                                { label: 'NAV', icon: Zap, val: scrollProgress, suffix: '%', desc: 'NAV_DEPTH' },
                                { label: 'SIG', icon: Shield, val: signalStrength, suffix: '%', desc: 'SIGNAL_INT' },
                                { label: 'UPR', icon: Cpu, val: Math.min(100, Math.floor(uptime / 6)), suffix: '', customVal: formatUptime(uptime), desc: 'UPTIME_RN' },
                            ].map((stat) => (
                                <div key={stat.label} className="flex items-center gap-3 group">
                                    <stat.icon size={10} className="text-accent-primary/50 group-hover:text-accent-primary transition-colors" />
                                    <div className="flex-1 max-w-[120px]">
                                        <div className="flex justify-between font-tech text-[8px] text-text-dim mb-1">
                                            <span>{stat.label} // {stat.desc}</span>
                                            <span>{stat.customVal || `${stat.val}${stat.suffix}`}</span>
                                        </div>
                                        <div className="h-1 bg-bg-surface border border-border-dim relative overflow-hidden">
                                            <motion.div
                                                animate={{ width: `${stat.val}%` }}
                                                transition={{ type: 'spring', stiffness: 50 }}
                                                className="absolute inset-y-0 bg-accent-primary/40"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CENTRAL CORE: Identifier & Status */}
                    <div className="md:col-span-4 flex flex-col items-center gap-4 py-6 border-x border-border-dim/30 relative">
                        {/* Mechanical Cutouts (CSS Triangles/Shapes) */}
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-accent-primary/20" />

                        <div className="flex flex-col items-center text-center px-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Power size={12} className="text-green-500 animate-pulse" />
                                <span className="font-tech text-[10px] text-text-bright tracking-widest uppercase">ID: SHANCHOY_NOOR</span>
                            </div>
                            <p className="font-display text-[10px] text-text-dim tracking-wider uppercase opacity-80">
                                Global Data Archive // {new Date().getFullYear()} Edition
                            </p>
                            <p className="mt-1 font-tech text-[9px] text-accent-primary/60 tracking-tighter">
                                PROT_v2.0.4.88 // ENCRYPT: AES-256
                            </p>
                        </div>

                        {/* Centered Telemetry Bar */}
                        <div className="flex items-center gap-4 px-4 py-1.5 bg-bg-surface border border-border-dim rounded-sm">
                            <div className="flex items-center gap-1.5 text-accent-primary">
                                <Activity size={10} className="animate-pulse" />
                                <span className="font-tech text-[9px]">UPLINK_LIVE</span>
                            </div>
                            <div className="w-px h-3 bg-border-dim" />
                            <span className="font-tech text-[9px] text-text-dim">COORD: 23.83 / 90.36</span>
                        </div>
                    </div>

                    {/* RIGHT WING: Inbound Scan (Visitor Telemetry) */}
                    <div className="md:col-span-4 flex flex-col items-end gap-4 text-right">
                        <div className="flex items-center gap-3">
                            <span className="font-tech text-[10px] text-accent-primary tracking-[0.2em] uppercase">Inbound_Scan</span>
                            <div className="h-[1px] w-8 bg-accent-primary/30" />
                        </div>
                        <div className="flex flex-col gap-2 pr-2 min-w-[200px]">
                            {visitorData ? (
                                <>
                                    <div className="flex items-center justify-end gap-2 font-mono text-[9px] text-text-dim">
                                        <span className="text-accent-primary/50 flex gap-1">
                                            <Globe size={10} />
                                            IP_ADDRESS:
                                        </span>
                                        <span className="text-text-bright">{visitorData.ip}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-end">
                                        <div className="font-tech text-[9px] text-text-bright flex items-center gap-1.5">
                                            <MapPin size={9} className="text-accent-primary/60" />
                                            {visitorData.city.toUpperCase()}, {visitorData.country_name.toUpperCase()}
                                        </div>
                                        <div className="font-tech text-[8px] text-text-dim/80 max-w-[150px] truncate">
                                            NETWORK: {visitorData.org.toUpperCase()}
                                        </div>
                                        <div className="mt-1 px-1.5 py-0.5 bg-accent-primary/10 border border-accent-primary/20 font-tech text-[8px] text-accent-primary tracking-widest">
                                            ACCESS_GRANTED // AUTH: USER
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-col items-end gap-2 pr-2 opacity-50">
                                    <div className="font-tech text-[9px] text-accent-primary animate-pulse">SCANNING_INBOUND_SIGNAL...</div>
                                    <div className="w-24 h-1 bg-border-dim overflow-hidden">
                                        <motion.div
                                            animate={{ x: ['-100%', '100%'] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                                            className="w-1/2 h-full bg-accent-primary/50"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Decorative Mechanical Line */}
                <div className="mt-8 relative h-[1px] bg-border-dim/30 w-full overflow-hidden">
                    <motion.div
                        initial={{ left: '-12rem' }}
                        animate={{ left: ['-12rem', '100%'] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-accent-primary/80 to-transparent"
                    />
                </div>

                {/* Extra Minimal Copyright */}
                <div className="mt-4 flex justify-between items-center opacity-80 px-2 flex-wrap gap-2 uppercase">
                    <span className="font-display text-[10px] text-text-dim tracking-wider">Copyright © SHANCHOY NOOR • ALL RIGHTS RESERVED</span>
                    <span className="font-display text-[10px] text-text-dim tracking-wider">shanchoynoor.me</span>
                </div>
            </div>
        </footer>
    );
}
