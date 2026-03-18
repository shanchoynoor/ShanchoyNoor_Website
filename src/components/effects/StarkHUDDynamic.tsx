'use client';

import dynamic from 'next/dynamic';

const StarkHUD = dynamic(() => import('./StarkHUD'), { ssr: false });

export default function StarkHUDDynamic() {
    return <StarkHUD />;
}
