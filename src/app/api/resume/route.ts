import { timingSafeEqual } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const pinPattern = /^[0-9]{6}$/;
const headers = { 'Cache-Control': 'no-store' };
const attemptLimit = 20;
const windowMs = 15 * 60 * 1000;
let failures = 0;
let resetAt = 0;

export async function POST(request: Request) {
    const secret = process.env.RESUME_PIN;
    if (!secret || !pinPattern.test(secret)) {
        return new Response('Download unavailable.', { status: 503, headers });
    }
    const now = Date.now();
    if (now >= resetAt) {
        failures = 0;
        resetAt = now + windowMs;
    }
    if (failures >= attemptLimit) {
        return new Response('Too many attempts. Try again in 15 minutes.', { status: 429, headers });
    }
    const body: unknown = await request.json().catch(() => null);
    const pin = body && typeof body === 'object' && 'pin' in body ? body.pin : null;
    if (failures >= attemptLimit) {
        return new Response('Too many attempts. Try again in 15 minutes.', { status: 429, headers });
    }
    if (typeof pin !== 'string' || !pinPattern.test(pin) || !timingSafeEqual(Buffer.from(pin), Buffer.from(secret))) {
        failures++;
        return new Response('Incorrect PIN.', { status: 403, headers });
    }
    const pdf = await readFile(path.join(process.cwd(), 'private/Shanchoy_Noor_Resume_MAR21-2026.pdf'));
    return new Response(new Uint8Array(pdf), {
        headers: {
            ...headers,
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="Shanchoy_Noor_Resume.pdf"',
        },
    });
}
