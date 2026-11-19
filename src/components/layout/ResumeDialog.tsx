'use client';

import { useState, type FormEvent, type Ref } from 'react';

export default function ResumeDialog({ dialogRef }: { dialogRef: Ref<HTMLDialogElement> }) {
    const [error, setError] = useState('');
    const [pending, setPending] = useState(false);

    async function download(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const pin = new FormData(form).get('pin');
        setPending(true);
        setError('');
        try {
            const response = await fetch('/api/resume', {
                method: 'POST',
                signal: AbortSignal.timeout(15000),
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pin }),
            });
            if (!response.ok) {
                setError(response.status === 403
                    ? 'Incorrect PIN.'
                    : response.status === 429
                        ? 'Too many attempts. Please try again later.'
                        : 'Download failed. Please try again.');
                return;
            }
            const url = URL.createObjectURL(await response.blob());
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Shanchoy_Noor_Resume.pdf';
            link.click();
            form.closest('dialog')?.close();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        } catch {
            setError('Download failed. Please try again.');
        } finally {
            setPending(false);
        }
    }

    return (
        <dialog
            ref={dialogRef}
            aria-labelledby="resume-title"
            onCancel={(event) => { if (pending) event.preventDefault(); }}
            onClose={(event) => {
                event.currentTarget.querySelector('form')?.reset();
                setError('');
            }}
            className="m-auto w-[calc(100%-2rem)] max-w-sm rounded border border-accent-primary/50 bg-bg-panel p-6 text-text-bright shadow-xl backdrop:bg-black/75"
        >
            <div className="mb-5 flex items-center justify-between gap-4">
                <h2 id="resume-title" className="font-tech text-xl font-bold">Download résumé</h2>
                <button type="button" disabled={pending} aria-label="Close résumé dialog"
                    onClick={(event) => event.currentTarget.closest('dialog')?.close()}
                    className="min-h-11 min-w-11 rounded text-xl hover:bg-accent-primary/15 disabled:opacity-50">
                    ×
                </button>
            </div>
            <form method="dialog" onSubmit={download} className="grid gap-3">
                <label htmlFor="resume-pin">Enter the six-digit PIN</label>
                <input id="resume-pin" name="pin" type="password" inputMode="numeric"
                    pattern="[0-9]{6}" maxLength={6} required autoComplete="off" autoFocus
                    readOnly={pending} aria-invalid={Boolean(error)} aria-describedby={error ? 'resume-error' : undefined}
                    className="rounded border border-accent-primary/50 bg-bg-base px-4 py-3 focus-visible:outline-2 focus-visible:outline-accent-primary" />
                {error && <p id="resume-error" role="alert" className="text-sm">{error}</p>}
                <button type="submit" disabled={pending}
                    className="rounded border border-accent-primary px-4 py-3 text-accent-primary hover:bg-accent-primary hover:text-bg-base disabled:opacity-50">
                    {pending ? 'Downloading…' : 'Download PDF'}
                </button>
            </form>
        </dialog>
    );
}
