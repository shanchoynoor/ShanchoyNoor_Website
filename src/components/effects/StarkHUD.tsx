'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface WeatherData {
    temp: number;
    windSpeed: number;
    humidity: number;
    weatherCode: number;
    city: string;
    country: string;
    lat: number;
    lon: number;
}

const WEATHER_LABELS: Record<number, string> = {
    0: 'CLEAR_SKY',
    1: 'MOSTLY_CLEAR', 2: 'PARTLY_CLOUDY', 3: 'OVERCAST',
    45: 'FOG', 48: 'RIME_FOG',
    51: 'LIGHT_DRIZZLE', 53: 'MOD_DRIZZLE', 55: 'DENSE_DRIZZLE',
    61: 'LIGHT_RAIN', 63: 'MOD_RAIN', 65: 'HEAVY_RAIN',
    71: 'LIGHT_SNOW', 73: 'MOD_SNOW', 75: 'HEAVY_SNOW',
    80: 'RAIN_SHOWERS', 81: 'MOD_SHOWERS', 82: 'VIOLENT_SHOWERS',
    95: 'THUNDERSTORM', 96: 'HAIL_STORM', 99: 'SEVERE_HAIL',
};

function getWeatherLabel(code: number): string {
    return WEATHER_LABELS[code] || 'UNKNOWN_PATTERN';
}

export default function StarkHUD() {
    const { scrollYProgress } = useScroll();
    const [sysHash, setSysHash] = useState('0x77A2...F4');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading');
    const scrollTop = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // Fetch real weather based on visitor IP
    useEffect(() => {
        async function fetchWeather() {
            try {
                const geoRes = await fetch('https://ip-api.com/json/?fields=city,country,lat,lon');
                const geo = await geoRes.json();

                const weatherRes = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${geo.lat}&longitude=${geo.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
                );
                const weatherJson = await weatherRes.json();
                const current = weatherJson.current;

                setWeather({
                    temp: current.temperature_2m,
                    windSpeed: current.wind_speed_10m,
                    humidity: current.relative_humidity_2m,
                    weatherCode: current.weather_code,
                    city: geo.city,
                    country: geo.country,
                    lat: geo.lat,
                    lon: geo.lon,
                });
                setLoadState('ready');
            } catch {
                setLoadState('error');
            }
        }
        fetchWeather();
    }, []);

    // Randomize hash for "live" feel
    useEffect(() => {
        const interval = setInterval(() => {
            setSysHash('0x' + Math.random().toString(16).slice(2, 6).toUpperCase() + '...' + Math.random().toString(16).slice(2, 4).toUpperCase());
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">

            {/* --- TOP LEFT: SYSTEM STATUS --- */}
            <div className="absolute top-24 left-8 hidden md:block">
                <div className="flex items-start gap-4">
                    <div className="flex flex-col gap-1.5 pt-1">
                        <div className="w-0.5 h-10 bg-accent-primary opacity-20" />
                        <div className="w-0.5 h-4 bg-accent-secondary animate-pulse shadow-[0_0_8px_var(--accent-secondary)]" />
                    </div>
                    <div className="font-tech text-[9px] space-y-2">
                        <div className="flex items-center gap-2 text-accent-primary">
                            <span className="w-1 h-1 bg-accent-primary rounded-full animate-ping" />
                            <span className="tracking-[0.2em] font-bold">SYSTEM_INTEGRITY_INDEX: [100.0%]</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1 opacity-40 uppercase tracking-tighter font-mono">
                            <span>NODE: {sysHash}</span>
                            <span>OS: STARK_v4</span>
                            <span>SENSORS: ACTIVE</span>
                            <span>ENCRYPTION: 256_BIT</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- TOP RIGHT: ADVANCED ARC GAUGE WITH LIVE WEATHER --- */}
            <div className="absolute top-24 right-10 hidden md:block">
                <div className="relative w-48 h-48 flex items-center justify-center">

                    {/* Layer 1: Outer Technical Marking Ring */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-10">
                        <circle cx="50" cy="50" r="48" stroke="var(--accent-primary)" strokeWidth="0.5" strokeDasharray="1 3" fill="none" />
                        <path d="M 50 2 A 48 48 0 0 1 98 50" stroke="var(--accent-primary)" strokeWidth="2" fill="none" opacity="0.5" />
                        {weather && (
                            <text x="75" y="15" fill="var(--accent-primary)" fontSize="3.5" fontFamily="var(--font-mono)">
                                [{weather.lat.toFixed(1)}N]
                            </text>
                        )}
                    </svg>

                    {/* Layer 2: Rotating Data Ring (Fast) */}
                    <motion.svg
                        viewBox="0 0 100 100"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full opacity-20"
                    >
                        <circle cx="50" cy="50" r="42" stroke="var(--accent-primary)" strokeWidth="1" strokeDasharray="30 10 5 10" fill="none" />
                    </motion.svg>

                    {/* Layer 3: Rotating Data Ring (Counter-Rotate) */}
                    <motion.svg
                        viewBox="0 0 100 100"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-full h-full opacity-15"
                    >
                        <circle cx="50" cy="50" r="38" stroke="var(--accent-primary)" strokeWidth="0.5" strokeDasharray="2 10" fill="none" />
                        {weather && (
                            <text x="50" y="10" fill="var(--accent-primary)" fontSize="3" fontFamily="var(--font-mono)" textAnchor="middle">
                                {weather.lon.toFixed(2)}E
                            </text>
                        )}
                    </motion.svg>

                    {/* Layer 4: Central Arc Core Panel — LIVE WEATHER */}
                    <div className="relative w-20 h-20 flex items-center justify-center bg-accent-primary/5 rounded-full border border-accent-primary/20 backdrop-blur-[2px]">
                        {/* Visual Core Pulse */}
                        <motion.div
                            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-2 border border-accent-primary rounded-full shadow-[inset_0_0_15px_rgba(0,240,255,0.1)]"
                        />

                        {/* Weather Data Readout */}
                        <div className="text-center z-10 space-y-0.5">
                            {loadState === 'loading' && (
                                <>
                                    <div className="font-tech text-[7px] text-accent-primary/70 tracking-widest uppercase mb-0.5">SCANNING</div>
                                    <div className="font-tech text-sm text-white font-bold animate-pulse">...</div>
                                </>
                            )}
                            {loadState === 'ready' && weather && (
                                <>
                                    <div className="font-tech text-[6px] text-accent-primary/60 tracking-widest uppercase">{weather.city}</div>
                                    <div className="font-tech text-lg text-white font-bold leading-none tracking-tighter">
                                        {weather.temp.toFixed(1)}<span className="text-[10px] ml-0.5 opacity-50 font-light">°C</span>
                                    </div>
                                    <div className="h-0.5 w-8 bg-accent-primary/40 mx-auto mt-0.5" />
                                    <div className="font-tech text-[5px] text-accent-secondary/80 mt-0.5 tracking-wider">
                                        {getWeatherLabel(weather.weatherCode)}
                                    </div>
                                </>
                            )}
                            {loadState === 'error' && (
                                <>
                                    <div className="font-tech text-[7px] text-accent-secondary tracking-widest uppercase">OFFLINE</div>
                                    <div className="font-tech text-xs text-text-dim">--.-°C</div>
                                </>
                            )}
                        </div>

                        {/* Vertical ID Tag */}
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 font-tech text-[5px] text-text-dim opacity-40 tracking-[0.4em]" style={{ writingMode: 'vertical-rl' }}>
                            ENV.SENSOR.01
                        </div>
                    </div>

                    {/* Outer HUD Corner Accents */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent-primary/30" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-accent-primary/30" />

                    {/* Secondary Data Strip (Below Gauge) */}
                    {loadState === 'ready' && weather && (
                        <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-4 font-tech text-[8px] text-text-dim opacity-50">
                            <span>WIND: {weather.windSpeed.toFixed(1)} km/h</span>
                            <span className="text-accent-primary/30">|</span>
                            <span>HUM: {weather.humidity}%</span>
                        </div>
                    )}
                </div>
            </div>

            {/* --- BOTTOM LEFT: SCROLL TRACKING HUD --- */}
            <ScrollTrack scrollTop={scrollTop} />

            {/* --- DECORATIVE BARS --- */}
            <div className="absolute bottom-10 right-10 flex gap-1.5 opacity-20">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-1 h-3 bg-accent-primary" style={{ opacity: 1 - i * 0.15 }} />
                ))}
            </div>
        </div>
    );
}

const SECTIONS = [
    { id: 'hero', label: 'INIT' },
    { id: 'about', label: 'PROFILE' },
    { id: 'skills', label: 'MODULES' },
    { id: 'projects', label: 'DATA_LOG' },
    { id: 'architecture', label: 'SCHEMATIC' },
    { id: 'experience', label: 'MISSION' },
    { id: 'contact', label: 'COMM_LINK' },
];

function ScrollTrack({ scrollTop }: { scrollTop: MotionValue<string> }) {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                { threshold: 0.3 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    return (
        <div className="absolute left-10 top-64 hidden md:block" style={{ bottom: '160px' }}>
            {/* Ultra-thin glowing vertical line */}
            <div
                className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 bg-accent-primary/20"
                style={{ width: '0.5px', boxShadow: '0 0 3px rgba(0,240,255,0.15)' }}
            />

            {/* Section labels — evenly distributed along the track */}
            {SECTIONS.map((section, i) => {
                const isActive = activeSection === section.id;
                const topPercent = (i / (SECTIONS.length - 1)) * 100;

                return (
                    <div
                        key={section.id}
                        className="absolute left-full font-tech text-[8px] tracking-[0.15em] transition-all duration-300 whitespace-nowrap"
                        style={{
                            top: `${topPercent}%`,
                            transform: 'translateY(-50%)',
                            marginLeft: '12px',
                            color: isActive ? 'var(--accent-primary)' : 'var(--text-dim)',
                            opacity: isActive ? 1 : 0.3,
                        }}
                    >
                        {isActive && <span className="mr-1 text-accent-primary">›</span>}
                        {section.label}
                    </div>
                );
            })}

            {/* Scroll-tracking triangle — centered on the line */}
            <motion.div
                style={{ top: scrollTop }}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group z-10"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                title="SCROLL_TO_TOP"
            >
                <svg width="14" height="16" viewBox="0 0 14 16" className="overflow-visible drop-shadow-[0_0_4px_var(--accent-primary)] group-hover:drop-shadow-[0_0_10px_var(--accent-primary)] transition-all">
                    <polygon points="1,1 13,1 7,15" fill="rgba(0,240,255,0.06)" stroke="var(--accent-primary)" strokeWidth="0.8" opacity="0.9" />
                    <polygon points="3.5,3.5 10.5,3.5 7,12" fill="var(--accent-primary)" opacity="0.15" className="group-hover:opacity-35 transition-all" />
                    <circle cx="7" cy="6" r="2" fill="none" stroke="var(--accent-primary)" strokeWidth="0.4" opacity="0.5" />
                    <circle cx="7" cy="6" r="0.8" fill="var(--accent-primary)" opacity="0.9">
                        <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
                    </circle>
                </svg>
            </motion.div>
        </div>
    );
}
