import type {
    NavLink,
    Stat,
    SkillPanel,
    Project,
    ExperienceEntry,
    EducationEntry,
    PhilosophyCard,
    ArchitectureNode,
    ContactLink,
    RoleOption,
} from './types';

// ─── Metadata ───
export const SITE_METADATA = {
    title: 'Shanchoy Noor — Frontend & AI Developer',
    description:
        'Frontend engineer specializing in React, Next.js, and TypeScript. Building AI-powered systems and production-grade web applications from Dhaka, Bangladesh.',
    keywords:
        'frontend engineer, next.js developer, react developer, AI systems, Dhaka, Bangladesh, available for hire',
    url: 'https://shanchoynoor.com',
    social: {
        github: 'https://github.com/shanchoynoor',
        linkedin: 'https://linkedin.com/in/shanchoynoor',
        twitter: 'https://twitter.com/shanchoynoor',
        facebook: '#',
        youtube: '#',
    }
} as const;

// ─── Navigation ───
export const NAV_LINKS: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experiences', href: '#experience' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Contact', href: '#contact' },
];

// ─── Hero ───
export const HERO = {
    statusBadge: 'Available for select global opportunities',
    eyebrow: 'FRONTEND & AI DEVELOPER · ENTREPRENEUR',
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
    { value: '6+', label: 'Years of Experience' },
    { value: '32+', label: 'Projects Shipped' },
    { value: '7+', label: 'Countries Served' },
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
        title: 'ChoyWatch',
        tag: 'web app',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'A unified experience for tracking movies and TV shows with real-time ratings from top platforms.',
        description:
            'A modern movie and TV show tracking application featuring seamless TMDB integration, personalized watchlists, and real-time ratings from major critic platforms like IMDb and Rotten Tomatoes. Designed with a dark cinematic UI.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Routes', 'PostgreSQL', 'Vercel'],
        liveUrl: 'https://choywatch.vercel.app/',
        isFeatured: true,
        status: 'ready',
    },
    {
        title: 'Lostlinkip.org',
        tag: 'web app',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'A community-powered platform dedicated to helping find missing persons and reunite them with their families through volunteer efforts and donations.',
        description:
            'To provide hope and action for families of missing persons through community mobilization, resources, and unwavering support.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Routes', 'PostgreSQL', 'Vercel', 'Cloudflare R2'],
        liveUrl: 'https://lostlinkip.org/',
        isFeatured: true,
        status: 'ready',
    },
    {
        title: 'YouTube Village',
        tag: 'website',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'Elevates rural content creators by providing a dedicated, structured platform to showcase their work globally.',
        description:
            'A central hub tailored for rural video content creators in Bangladesh. The platform features organized video galleries, detailed creator profiles, and streamlined content distribution, bridging the gap between local talent and global audiences.',
        tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
        liveUrl: 'https://youtubevillage.com/',
        isFeatured: true,
        status: 'ready',
    },
    {
        title: 'AroundMeBD',
        tag: 'website',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'An interactive mapping platform highlighting culturally significant locations and local businesses across Bangladesh.',
        description:
            'An interactive local discovery platform highlighting culturally significant locations, businesses, and untold stories across Bangladesh. Features dynamic mapping interfaces and a highly performant directory structure.',
        tech: ['Next.js', 'React', 'Google Maps API', 'Framer Motion'],
        liveUrl: 'https://aroundmebd.com/',
        isFeatured: true,
        status: 'ready',
    },
    {
        title: 'ChoyAI Studio',
        tag: 'web app',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'A dedicated creative suite for generating, managing, and iterating upon complex multi-modal AI assets locally.',
        description:
            'A professional desktop and web-based AI creation studio featuring advanced prompting environments, multi-modal generation pipelines, and local asset management, built for power users demanding high bandwidth creation capabilities.',
        tech: ['Python', 'FastAPI', 'Next.js', 'Electron', 'AWS'],
        liveUrl: '#',
        isFeatured: true,
        status: 'in-progress',
    },
    {
        title: 'ChoyAI — Personal AI Assistant',
        tag: 'DESKTOP APP',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'Eliminates the rebuild cost of switching AI providers by abstracting LLM calls behind a unified orchestration interface.',
        description:
            'An extensible AI infrastructure platform built for real production workloads. Architected around a modular LLM orchestration layer with pluggable data sources, real-time API integrations, and multi-environment deployment pipelines.',
        architectureNote:
            'Client → API Gateway → LLM Orchestrator → [OpenAI / Brave Search] → Response Formatter → Supabase logging → Client',
        tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Supabase', 'LLM Orchestration', 'Search API'],
        liveUrl: '#',
        isFeatured: true,
        status: 'in-progress',
    },
    {
        title: 'ChoyMate',
        tag: 'AI COMPANION',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'A highly interactive, real-time AI companion focused on fluid conversational dynamics and emotional intelligence.',
        description:
            'A specialized AI companion application focusing on low-latency, real-time conversational interfaces. Integrates advanced emotional intelligence modeling and contextual memory access for incredibly lifelike digital interactions.',
        tech: ['Next.js', 'WebSockets', 'OpenAI API', 'Framer Motion'],
        liveUrl: '#',
        isFeatured: true,
        status: 'in-progress',
    }
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
        title: 'UI/UX and Frontend Developer',
        company: 'Iqrasys Solutions Limited',
        location: '',
        period: 'September 1, 2019 - Present',
        body: 'Designed and improved user interfaces and user experiences for various digital products, ensuring high-quality interactive designs.',
        isCurrent: true,
    },
    {
        title: 'Post Production Manager',
        company: 'Youtube Village',
        location: 'Dhaka, Bangladesh',
        period: '2020 - Present',
        body: 'Managed social media presence and executed video editing tasks to create engaging content and grow online audience.',
        isCurrent: true,
    },
    {
        title: 'Co-Founder and CEO',
        company: 'Choyzenic',
        location: 'Dhaka, Bangladesh',
        period: 'October 2025 - Present',
        body: 'Led overall strategic vision, operations, and business growth as the Co-Founder and Chief Executive Officer.',
        isCurrent: true,
    },
    {
        title: 'Artist',
        company: 'Film & Television Industry, Bangladesh.',
        location: '',
        period: 'November 1, 2021 - November 2022',
        body: 'Worked as an artist in the local film and television industry, contributing to various creative media productions.',
        isCurrent: false,
    },
    {
        title: 'Assistant Engineer',
        company: 'Link Line',
        location: '',
        period: 'December 2016 - August 2019',
        body: 'Assisted in engineering tasks, project execution, and oversaw technical operations alongside senior engineers.',
        isCurrent: false,
    },
    {
        title: 'Founder and CEO',
        company: 'Techponno.com',
        location: 'Dhaka, Bangladesh',
        period: '2016 - 2017',
        body: 'Founded and managed Techponno.com, taking responsibility for the overall business direction and technical platform.',
        isCurrent: false,
    },
    {
        title: 'Sub Assistant Engineer',
        company: 'Optimal Technology Private Limited',
        location: '',
        period: 'January 2016 - April 2016',
        body: 'Provided dedicated engineering support and effectively contributed to technical projects and operations.',
        isCurrent: false,
    },
    {
        title: 'Web Designer & Graphics Designer',
        company: 'Upwork & Freelancer',
        location: 'Dhaka, Bangladesh',
        period: 'June 2015 - December 2020',
        body: 'Delivered freelance web design and graphic design services to international clients, managing projects independently.',
        isCurrent: false,
    },
];

// ─── Education & Courses ───
export const EDUCATION_ENTRIES: EducationEntry[] = [
    {
        title: 'B.Sc. in Computer Science',
        institution: 'University Name — Location',
        location: 'City, Country',
        period: '2018 – 2022',
        body: 'Focused on software engineering, distributed systems, and artificial intelligence. Graduated with honors. Key projects included a machine learning-based recommendation engine.',
    },
    {
        title: 'Advanced AI Systems Certification',
        institution: 'Tech Institute / Platform',
        location: 'Online',
        period: '2023',
        body: 'Intensive coursework covering LLM orchestration, retrieval-augmented generation (RAG) pipelines, and deployment of containerized AI services.',
        isCurrent: false,
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
    { label: 'shanchoy.noor@gmail.com', href: 'mailto:shanchoy.noor@gmail.com', iconName: 'Mail' },
    {
        label: '/shanchoynoor',
        href: SITE_METADATA.social.github,
        iconName: 'Github',
    },
    {
        label: '/in/shanchoynoor',
        href: SITE_METADATA.social.linkedin,
        iconName: 'Linkedin',
    },
    {
        label: '/imshanchoynoor',
        href: SITE_METADATA.social.facebook,
        iconName: 'Facebook',
    },
    {
        label: '/shanchoynoor',
        href: SITE_METADATA.social.twitter,
        iconName: 'Twitter',
    },
    {
        label: '/@shanchoynoor',
        href: SITE_METADATA.social.youtube,
        iconName: 'Youtube',
    },
];

// ─── Footer ───
export const FOOTER = {
    copyright: '© 2026 Shanchoy Noor',
} as const;
