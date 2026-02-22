'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Facebook, Twitter, Youtube } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import Button from '@/components/ui/Button';
import TechPanel from '@/components/ui/TechPanel';
import { CONTACT_INTRO, ROLE_OPTIONS, CONTACT_LINKS } from '@/lib/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

const ICON_MAP: Record<string, React.ElementType> = { Mail, Github, Linkedin, Facebook, Twitter, Youtube };

interface FormState {
    name: string;
    email: string;
    role: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

function validateForm(data: FormState): FormErrors {
    const errors: FormErrors = {};
    if (!data.name.trim()) errors.name = 'IDENTITY_REQUIRED';
    if (!data.email.trim()) errors.email = 'COMM_LINK_REQUIRED';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        errors.email = 'INVALID_PROTOCOL';
    if (!data.message.trim()) errors.message = 'PAYLOAD_EMPTY';
    return errors;
}

const INPUT_BASE =
    'w-full bg-bg-surface border-b border-border-dim p-4 text-text-bright text-sm placeholder:text-text-dim/50 focus:outline-none focus:border-accent-primary focus:bg-accent-primary/5 transition-all duration-300 font-mono';

const ERROR_TEXT = 'text-accent-secondary text-[10px] mt-1 font-mono uppercase tracking-widest';

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        role: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm(form);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus('sending');
        // Simulate send — replace with real API call
        setTimeout(() => {
            setStatus('sent');
            setForm({ name: '', email: '', role: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-6 pb-32">
            <div className="max-w-6xl mx-auto relative z-10">
                <SectionLabel label="06" title="Initiate Contact" />

                <div className="grid md:grid-cols-[1fr_250px] gap-12">
                    {/* Main Form Terminal */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <TechPanel sysId="COMM.UPLINK" className="relative">
                            <div className="absolute inset-0 bg-repeat opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00F0FF 1px, transparent 1px)', backgroundSize: '10px 10px' }} />

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
                                <div>
                                    <label className="block font-tech text-[10px] text-accent-primary mb-1 uppercase tracking-widest">Identify</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="ENTER_NAME"
                                        className={INPUT_BASE}
                                        autoComplete="name"
                                    />
                                    {errors.name && <p className={ERROR_TEXT}>// ERROR: {errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block font-tech text-[10px] text-accent-primary mb-1 uppercase tracking-widest">Frequency</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="ENTER_EMAIL"
                                        className={INPUT_BASE}
                                        autoComplete="email"
                                    />
                                    {errors.email && <p className={ERROR_TEXT}>// ERROR: {errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block font-tech text-[10px] text-accent-primary mb-1 uppercase tracking-widest">Purpose</label>
                                    <select
                                        name="role"
                                        value={form.role}
                                        onChange={handleChange}
                                        className={INPUT_BASE}
                                    >
                                        {ROLE_OPTIONS.map((opt) => (
                                            <option key={opt.value} value={opt.value} className="bg-bg-surface text-text-bright">
                                                {opt.label.toUpperCase()}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-tech text-[10px] text-accent-primary mb-1 uppercase tracking-widest">Transmission</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="TYPE_MESSAGE..."
                                        rows={5}
                                        className={`${INPUT_BASE} resize-none`}
                                    />
                                    {errors.message && <p className={ERROR_TEXT}>// ERROR: {errors.message}</p>}
                                </div>

                                <div className="pt-4">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full"
                                    >
                                        {status === 'idle' && 'TRANSMIT_DATA'}
                                        {status === 'sending' && 'UPLOADING...'}
                                        {status === 'sent' && 'TRANSMISSION_COMPLETE'}
                                        {status === 'error' && 'ERROR_RETRY'}
                                    </Button>
                                </div>
                            </form>
                        </TechPanel>
                    </motion.div>

                    {/* Sidebar: Direct Links */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-4"
                    >
                        <p className="font-tech text-xs text-text-dim border-b border-border-dim pb-2">// SECURE_CHANNELS</p>
                        {CONTACT_LINKS.map((link) => {
                            const Icon = ICON_MAP[link.iconName];
                            return (
                                <motion.a
                                    key={link.iconName}
                                    variants={fadeUp}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-4 p-4 border border-border-dim bg-bg-surface hover:border-accent-primary hover:bg-accent-primary/5 transition-all group"
                                >
                                    <div className="text-text-dim group-hover:text-accent-primary transition-colors">
                                        {Icon && <Icon size={20} />}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-display text-sm font-bold text-text-bright">{link.label}</span>
                                        <span className="font-mono text-[10px] text-text-dim">LINK_ESTABLISHED</span>
                                    </div>
                                </motion.a>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
