'use client';

import { useCallback, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const p = (n: string) => `/images/${n}`;
const ROW_ONE = ['gallery-01.webp', 'gallery-04.webp', 'gallery-02.webp', 'gallery-03.webp', 'gallery-05.webp', 'gallery-12.webp', 'gallery-07.webp', 'gallery-08.webp', 'gallery-09.webp', 'gallery-14.webp', 'gallery-10.webp', 'gallery-11.webp', 'gallery-16.webp', 'gallery-18.webp', 'gallery-17.webp', 'gallery-30.webp', 'gallery-31.webp', 'gallery-32.webp', 'gallery-33.webp', 'gallery-34.webp', 'gallery-35.webp', 'gallery-36.webp', 'gallery-37.webp'].map(p);
const ROW_TWO = ['gallery-20.webp', 'gallery-06.webp', 'gallery-21.webp', 'gallery-22.webp', 'gallery-23.webp', 'gallery-13.webp', 'gallery-24.webp', 'gallery-25.webp', 'gallery-15.webp', 'gallery-26.webp', 'gallery-27.webp', 'gallery-28.webp', 'gallery-19.webp', 'gallery-29.webp', 'gallery-38.webp', 'gallery-39.webp', 'gallery-40.webp', 'gallery-41.webp', 'gallery-42.webp', 'gallery-43.webp', 'gallery-44.webp', 'gallery-45.webp'].map(p);
const VERTICAL = new Set(['gallery-04.webp', 'gallery-06.webp', 'gallery-12.webp', 'gallery-13.webp', 'gallery-14.webp', 'gallery-15.webp', 'gallery-18.webp', 'gallery-19.webp', 'gallery-31.webp', 'gallery-35.webp'].map(p));
const IMAGES = [...ROW_ONE, ...ROW_TWO];
const COUNT = IMAGES.length;

function Row({
    images,
    reverse,
    duration,
    onOpen,
}: {
    images: string[];
    reverse?: boolean;
    duration: number;
    onOpen: (src: string) => void;
}) {
    const loop = [...images, ...images];
    return (
        <div className="gallery-row overflow-hidden py-1.5">
            <div
                className={`gallery-track flex w-max gap-5 pr-5 ${reverse ? 'gallery-reverse' : ''}`}
                style={{ animationDuration: `${duration}s` }}
            >
                {loop.map((src, i) => (
                    <button
                        type="button"
                        key={`${src}-${i}`}
                        onClick={() => onOpen(src)}
                        aria-label="Open photo preview"
                        tabIndex={i >= images.length ? -1 : 0}
                        className={`gallery-card relative h-36 md:h-48 shrink-0 ${VERTICAL.has(src) ? 'w-[108px] md:w-36' : 'w-[216px] md:w-72'} cursor-zoom-in rounded-2xl border border-accent-primary/30 bg-bg-surface p-1.5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/60`}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={src}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            className="h-full w-full rounded-xl object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function GalleryMarquee() {
    const [active, setActive] = useState<number | null>(null);

    const open = useCallback((src: string) => setActive(IMAGES.indexOf(src)), []);
    const close = useCallback(() => setActive(null), []);
    const step = useCallback(
        (d: number) => setActive((a) => (a === null ? a : (a + d + COUNT) % COUNT)),
        []
    );

    useEffect(() => {
        if (active === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight') step(1);
            else if (e.key === 'ArrowLeft') step(-1);
        };
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [active, close, step]);

    return (
        <>
            <div className="relative mt-16 space-y-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <Row images={ROW_ONE} duration={70} onOpen={open} />
                <Row images={ROW_TWO} duration={80} reverse onOpen={open} />
            </div>

            {active !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo preview"
                    onClick={close}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
                >
                    <button
                        type="button"
                        onClick={close}
                        aria-label="Close preview"
                        className="absolute right-4 top-4 rounded-full border border-accent-primary/40 bg-black/60 p-2 text-accent-primary transition hover:bg-accent-primary/20"
                    >
                        <X size={20} />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); step(-1); }}
                        aria-label="Previous photo"
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-accent-primary/40 bg-black/60 p-2 text-accent-primary transition hover:bg-accent-primary/20 md:left-6"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); step(1); }}
                        aria-label="Next photo"
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-accent-primary/40 bg-black/60 p-2 text-accent-primary transition hover:bg-accent-primary/20 md:right-6"
                    >
                        <ChevronRight size={24} />
                    </button>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-2xl bg-bg-surface p-2"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={IMAGES[active]}
                            alt={`Photo ${active + 1} of ${COUNT}`}
                            className="max-h-[60vh] max-w-[80vw] md:max-w-[640px] rounded-xl object-contain"
                        />
                        <p className="mt-2 text-center font-mono text-[10px] tracking-widest text-accent-primary/70">
                            {String(active + 1).padStart(2, '0')} / {COUNT}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
