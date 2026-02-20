import type {
    NavLink,
    Stat,
    SkillPanel,
    Project,
    ExperienceEntry,
    PhilosophyCard,
    ArchitectureNode,
    ContactLink,
    RoleOption,
} from './types';

// ─── Navigation ───
export const NAV_LINKS: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Contact', href: '#contact' },
];

// ─── Hero ───
export const HERO = {
    statusBadge: 'Available for select global opportunities',
    eyebrow: 'FRONTEND ENGINEER  ·  AI SYSTEMS  ·  PRODUCT THINKING',
    firstName: 'Shanchoy',
    lastName: 'Noor',
    tagline:
        'I build fast, accessible, and scalable frontend systems — with the architectural depth to take them all the way to production.',
    subline: 'Dhaka, Bangladesh  ·  Open to Dubai, Remote & Global Roles',
    ctaPrimary: 'View Projects',
    ctaSecondary: 'See Architecture',
} as const;

// ─── About ───
export const ABOUT_PARAGRAPHS: string[] = [
    "I'm a frontend engineer with 8+ years of hands-on experience building production-grade web applications — from component architecture and performance optimization to full deployment pipelines.",
    'My primary expertise is frontend engineering: React, Next.js, TypeScript, and Tailwind CSS built to real performance standards. I go beyond the UI layer when the product demands it — backend API design, database modeling, AI integration, and DevOps are part of how I think about every system I build.',
    'Currently leading development of Choy AI — a modular AI assistant platform architected for LLM orchestration, real-time data pipelines, and multi-environment deployment.',
    'I operate with a product engineer\'s mental model: architecture defines the ceiling, execution determines the floor.',
];

export const ABOUT_STATS: Stat[] = [
    { value: '8+', label: 'Years of Experience' },
    { value: '15+', label: 'Projects Shipped' },
    { value: '95+', label: 'Lighthouse Score Achieved' },
    { value: '3', label: 'AI Systems in Production' },
];

// ─── Skills ───
export const SKILL_PANELS: SkillPanel[] = [
    {
        title: 'Frontend Engineering',
        iconName: 'Monitor',
        isPrimary: true,
        skills: [
            'React.js',
            'Next.js (App Router)',
            'TypeScript',
            'JavaScript (ES6+)',
            'Tailwind CSS',
            'HTML5 / CSS3',
            'Framer Motion',
            'Component Architecture',
            'State Management',
            'Performance Optimization',
            'SEO & Metadata',
            'Core Web Vitals',
            'Responsive Design',
            'Accessibility (WCAG)',
        ],
    },
    {
        title: 'Backend Development',
        iconName: 'Server',
        skills: [
            'Node.js',
            'Express.js',
            'REST API Architecture',
            'JWT / OAuth Auth',
            'Role-Based Access Control',
            'Redis Rate Limiting',
            'PostgreSQL',
            'Supabase',
            'Firebase',
            'Schema Design',
            'Query Optimization',
        ],
    },
    {
        title: 'AI & Automation',
        iconName: 'Brain',
        skills: [
            'OpenAI API Integration',
            'LLM Orchestration',
            'Prompt Engineering',
            'Multimodal AI Workflows',
            'Retrieval-Based AI',
            'Brave Search API',
            'Telegram Bot Automation',
            'Cron Scheduling',
            'Data Pipeline Design',
        ],
    },
    {
        title: 'DevOps & Deployment',
        iconName: 'Cloud',
        skills: [
            'Vercel',
            'Render',
            'Docker',
            'VPS Configuration',
            'AWS Fundamentals',
            'CI/CD Pipelines',
            'Environment & Secrets Management',
            'Production Deployment Strategies',
            'Git & GitHub',
        ],
    },
];

// ─── Projects ───
export const PROJECTS: Project[] = [
    {
        title: 'Choy AI — Modular AI Assistant Platform',
        tag: 'AI PLATFORM',
        featuredLabel: 'FEATURED',
        problemStatement:
            'Eliminates the rebuild cost of switching AI providers by abstracting LLM calls behind a unified orchestration interface.',
        description:
            'An extensible AI infrastructure platform built for real production workloads. Architected around a modular LLM orchestration layer with pluggable data sources, real-time API integrations, and multi-environment deployment pipelines.',
        architectureNote:
            'Client → API Gateway → LLM Orchestrator → [OpenAI / Brave Search] → Response Formatter → Supabase logging → Client',
        tech: [
            'Next.js',
            'Node.js',
            'PostgreSQL',
            'Supabase',
            'OpenAI API',
            'Brave Search API',
            'Docker',
            'Vercel',
        ],
        isFeatured: true,
    },
    {
        title: 'AI News & Finance Telegram Bot',
        tag: 'AUTOMATION · PYTHON',
        yearLabel: '2024',
        problemStatement:
            'Delivers automated daily intelligence briefings — news, crypto, and finance data — without manual aggregation.',
        description:
            'Automated pipeline that fetches global and Bangladesh news, crypto market movers, and finance headlines on a 6-hour cron schedule. Built with rate-limit-safe architecture and clean formatted output.',
        tech: ['Python', 'GNews API', 'Telegram Bot API', 'Cron Scheduling'],
    },
];

export const PERFORMANCE_METRICS = {
    title: 'Frontend Performance Results',
    items: [
        '95+ Lighthouse Score',
        'Clean Core Web Vitals',
        'Lazy Loading · Image Optimization · SEO Metadata',
    ],
} as const;

// ─── Architecture ───
export const ARCHITECTURE_INTRO =
    'Before writing a single line of code, I map the data flow, define the API contract, and establish the security boundary. Below is the architecture of Choy AI\'s core request pipeline.';

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
    { id: 'client', label: 'Client / Browser', tooltip: 'The end-user interface that initiates requests and renders responses.', x: 400, y: 30, category: 'client' },
    { id: 'frontend', label: 'Next.js Frontend', tooltip: 'Server-rendered React application handling routing, SSR, and UI state.', x: 400, y: 100, category: 'service' },
    { id: 'gateway', label: 'API Gateway', tooltip: 'Route handler that validates requests, applies rate limiting, and manages auth.', x: 400, y: 170, isAccent: true, category: 'service' },
    { id: 'orchestrator', label: 'LLM Orchestrator', tooltip: 'Core engine that routes prompts to the appropriate AI provider and manages context.', x: 400, y: 240, isAccent: true, category: 'service' },
    { id: 'openai', label: 'OpenAI API', tooltip: 'Primary LLM provider for text generation, chat, and embeddings.', x: 250, y: 310, category: 'ai' },
    { id: 'brave', label: 'Brave Search API', tooltip: 'Real-time web search provider for grounding AI responses with current data.', x: 550, y: 310, category: 'ai' },
    { id: 'formatter', label: 'Response Formatter', tooltip: 'Normalizes and structures AI outputs into a consistent response format.', x: 400, y: 380, category: 'service' },
    { id: 'supabase', label: 'Supabase · Logging', tooltip: 'Persistent storage layer for conversation logs, analytics, and user data.', x: 400, y: 450, category: 'data' },
    { id: 'response', label: 'Client Response', tooltip: 'Formatted response delivered back to the user interface.', x: 400, y: 520, category: 'client' },
];

export const PHILOSOPHY_CARDS: PhilosophyCard[] = [
    {
        title: 'Architecture First',
        description:
            'System design before implementation. Every component knows its boundary before it knows its logic.',
    },
    {
        title: 'Scalability by Default',
        description:
            'If traffic scales 10×, the architecture should hold without a rewrite. That\'s the standard I build to.',
    },
    {
        title: 'Security at the Boundary',
        description:
            'Auth, rate limiting, input validation, and environment separation are not features — they\'re prerequisites.',
    },
];

// ─── Experience ───
export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
    {
        title: 'Software Engineer & Frontend Developer',
        company: 'Software Company — Dhaka, Bangladesh (Confidential)',
        location: 'Dhaka, Bangladesh',
        period: '2016 – Present',
        body: 'Designing and developing web interfaces, frontend systems, and product-facing features in a professional software environment. Collaborated with backend engineers, optimized UI systems for scalability, and delivered client-facing software with measurable performance improvements.',
        isCurrent: true,
    },
    {
        title: 'Independent AI Systems Builder',
        company: 'ChoyGroup · Dhaka, Bangladesh',
        location: 'Dhaka, Bangladesh',
        period: '2022 – Present',
        body: 'Alongside full-time engineering, independently architected and shipped: Choy AI — modular AI assistant platform built for extensibility and scale. Choy AI Studio — generative AI tooling for text, image, and automation. Automated intelligence systems for news aggregation and crypto market tracking.',
        isCurrent: true,
    },
];

// ─── Contact ───
export const CONTACT_INTRO =
    'Currently exploring senior frontend engineering roles and AI product collaborations — particularly within high-growth startups, AI-native companies, and tech hubs in Dubai and beyond.';

export const ROLE_OPTIONS: RoleOption[] = [
    { value: '', label: 'Select role type' },
    { value: 'frontend', label: 'Frontend Role' },
    { value: 'fullstack', label: 'Full-Stack Role' },
    { value: 'ai', label: 'AI Product' },
    { value: 'other', label: 'Other' },
];

export const CONTACT_LINKS: ContactLink[] = [
    { label: 'your@email.com', href: 'mailto:your@email.com', iconName: 'Mail' },
    {
        label: 'github.com/yourprofile',
        href: 'https://github.com/yourprofile',
        iconName: 'Github',
    },
    {
        label: 'linkedin.com/in/yourprofile',
        href: 'https://linkedin.com/in/yourprofile',
        iconName: 'Linkedin',
    },
];

// ─── Footer ───
export const FOOTER = {
    copyright: '© 2025 Shanchoy Noor',
} as const;

// ─── Metadata ───
export const SITE_METADATA = {
    title: 'Shanchoy Noor — Frontend Engineer & AI Systems Builder',
    description:
        'Frontend engineer specializing in React, Next.js, and TypeScript. Building AI-powered systems and production-grade web applications from Dhaka, Bangladesh.',
    keywords:
        'frontend engineer, next.js developer, react developer, AI systems, Dhaka, Bangladesh, available for hire',
    url: 'https://shanchoynoor.com',
} as const;
