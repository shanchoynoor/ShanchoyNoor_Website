'use client';

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
    const [sysHash, setSysHash] = useState('0x77A2...F4');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>('loading');

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

            {/* --- TOP LEFT: SYSTEM STATUS REMOVED --- */}

            {/* --- ADVANCED ARC GAUGE REMOVED --- */}

            {/* --- BOTTOM LEFT: SCROLL TRACKING HUD --- */}
            <ScrollTrack />
        </div>
    );
}

const SECTIONS = [
    { id: 'hero', label: 'INIT' },
    { id: 'about', label: 'PROFILE' },
    { id: 'skills', label: 'MODULES' },
    { id: 'projects', label: 'DATA_LOG' },
    { id: 'experience', label: 'MISSION' },
    { id: 'videos', label: 'SCHEMATIC' },
    { id: 'contact', label: 'COMM_LINK' },
];

function ScrollTrack() {
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
                { threshold: 0.1, rootMargin: '0px 0px -50% 0px' }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    // Triangle position = active label position. Same formula, guaranteed match.
    const activeIndex = SECTIONS.findIndex(s => s.id === activeSection);
    const triangleTop = (activeIndex / (SECTIONS.length - 1)) * 100;

    return (
        <div className="absolute right-8 top-64 hidden min-[1440px]:block" style={{ bottom: '160px' }}>
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
                        className="absolute right-full text-right font-tech text-[8px] tracking-[0.15em] transition-all duration-300 whitespace-nowrap"
                        style={{
                            top: `${topPercent}%`,
                            transform: 'translateY(-50%)',
                            marginRight: '12px',
                            color: isActive ? 'var(--accent-primary)' : 'var(--text-dim)',
                            opacity: isActive ? 1 : 0.3,
                        }}
                    >
                        {isActive && <span className="mr-1 text-accent-primary">›</span>}
                        {section.label}
                    </div>
                );
            })}

            {/* Triangle indicator — follows active label */}
            <div
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer group z-10"
                style={{ top: `${triangleTop}%`, transition: 'top 400ms ease-out' }}
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
            </div>
        </div>
    );
}
