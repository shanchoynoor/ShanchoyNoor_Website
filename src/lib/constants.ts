import type {
    NavLink,
    Stat,
    SkillPanel,
    Project,
    ExperienceEntry,
    EducationEntry,
    ContactLink,
    RoleOption,
} from './types';

// ─── Metadata ───
export const SITE_METADATA = {
    title: 'Shanchoy Noor — Web & App Developer · AI Builder',
    description:
        'Web & app developer and AI builder specializing in React, Next.js, React Native, and TypeScript. Building AI-powered systems and production-grade web and mobile applications from Dhaka, Bangladesh.',
    keywords:
        'web developer, app developer, AI builder, next.js developer, react developer, AI systems, Dhaka, Bangladesh, available for hire',
    url: 'https://shanchoynoor.com',
    social: {
        github: 'https://github.com/shanchoynoor',
        linkedin: 'https://www.linkedin.com/in/shanchoynoor/',
        twitter: 'https://x.com/shanchoynoor',
        facebook: 'https://www.facebook.com/imshanchoynoor',
        instagram: 'https://www.instagram.com/shanchoynoor/',
        youtube: 'https://www.youtube.com/@shanchoynoor',
    }
} as const;

// ─── Navigation ───
export const NAV_LINKS: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experiences', href: '#experience' },
    { label: 'Videos', href: '#videos' },
    { label: 'Contact', href: '#contact' },
];

// ─── Hero ───
export const HERO = {
    statusBadge: 'Available for select global opportunities',
    eyebrow: 'WEB & APP DEVELOPER · AI BUILDER',
    firstName: 'Shanchoy',
    lastName: 'Noor',
    tagline:
        'I build solid solutions for web apps, mobile apps, and AI-integrated apps and systems, with the architectural depth to take them all the way to production.',
    subline: 'Dhaka, Bangladesh  ·  Open to Dubai, Remote & Global Roles',
    ctaPrimary: 'View Projects',
    ctaSecondary: 'Watch Videos',
} as const;

export const HERO_MEDIA = {
    portrait: {
        src: '/id_image/shanchoy_noor.jpg',
        width: 640,
        height: 800,
        blurDataURL:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWPYdvL/PwAETAPQ3cR/2wAAAABJRU5ErkJggg==',
        alt: 'Portrait of Shanchoy Noor',
    },
} as const;

// ─── About ───
export const ABOUT_PARAGRAPHS: string[] = [
    "I'm tech savvy with an artist's mind and an entrepreneur soul. I have over 10 years of experience building at the intersection of design, software, and media, focused on systems that scale, assets that compound, and products that actually move people.",
    "I work as Post-Production Manager at Iqrasys Solutions Limited, running end-to-end content workflows and editing systems for AroundMeBD, Village Grandpa's Cooking, and Fortunate Guest, and as Social Media Manager at YouTube Village. Alongside that, I run my own businesses: Choyzenic, an AI-based SaaS product ecosystem, and Oegoo LLC, a US-based company building daily-life global products for everyone.",
    "Beyond my primary roles, I founded Choyzenic, a product-focused software company dedicated to AI-driven tools, automation systems, and scalable digital infrastructure. This shift reflects a deliberate long-term strategy: moving from trading time for services toward building proprietary technology assets. Currently, my deepest focus is Choy AI, an agentic, cross-platform AI personal assistant designed to orchestrate productivity, decision-making, and workflow automation intelligently.",
];

export const ABOUT_STATS: Stat[] = [
    { value: '10+', label: 'Years of Experience' },
    { value: '50+', label: 'Projects Shipped' },
    { value: '15+', label: 'Countries Served' },
    { value: '7+', label: 'AI Systems in Production' },
];

// ─── Skills ───
export const SKILL_PANELS: SkillPanel[] = [
    {
        title: 'Frontend Development',
        iconName: 'Monitor',
        isPrimary: true,
        skills: [
            'React.js',
            'Next.js (App Router)',
            'React Native / Expo',
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
            'Python (FastAPI)',
            'Node.js (JS / TS)',
            'PostgreSQL / MySQL',
            'Supabase / Firebase',
            'REST & GraphQL API',
            'JWT / OAuth',
            'Redis / Rate Limiting',
            'Schema Design',
            'Query Optimization',
            'Data Crawlers', 
            'Data Scrapers',
        ],
    },
    {
        title: 'AI & Automation',
        iconName: 'Brain',
        skills: [
            'LLM API Integration',
            'RAG & Vector Search',
            'LLM Orchestration',
            'Agentic Workflows',
            'Multi-modal Configure',
            'Function Calling',
            'Structured Output',
            'Bot Automation',
            'Prompt Engineering',
            'Optimization'
        ],
    },
    {
        title: 'DevOps & Deployment',
        iconName: 'Cloud',
        skills: [
            'Vercel',
            'Render / Railway',
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
    // ─── Web apps ───
    {
        title: 'ChoyCraft — AI Content Studio',
        category: 'web',
        tag: 'WEB APP',
        featuredLabel: 'TECH_STACK',
        problemStatement: 'One workspace for text, image, video and audio generation across 50+ AI models.',
        description:
            'A production AI studio that unifies 50+ models from 18+ providers behind a single prompt-to-asset workflow. Every output persists to a personal library with full metadata, plus plans, credits and billing built in.',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Auth', 'Multi-Model API Gateway', 'Sentry', 'Vercel'],
        stack: { frontend: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4'], backend: ['TypeScript', 'Next.js Route Handlers', 'Edge + Node runtime', 'Zod'], data: ['Supabase PostgreSQL', 'Cloudflare R2', 'Upstash Redis'], ai: ['Unified Multi-Model API Gateway', '50+ models · 18+ providers', 'SSE streaming'], services: ['Managed Auth (Sessions · OAuth)', 'Polar', 'Sentry', 'Vercel'] },
        liveUrl: 'https://choycraft.com',
        images: ['/projects/choycraft/01.webp'],
        isFeatured: true,
        status: 'mvp',
        uiStatus: 'final',
    },
    {
        title: 'K-Beauty — AI-Powered Ecommerce',
        category: 'web',
        tag: 'WEB APP',
        featuredLabel: 'TECH_STACK',
        problemStatement: 'A Korean skincare storefront with guided discovery, routines and a full admin backend.',
        description:
            'A multilingual, multi-currency K-Beauty store with a skin-concern quiz, routine builder, ingredient guides, flash sales and live shopping, backed by Payload CMS for products, brands, orders and a custom analytics dashboard.',
        tech: ['Next.js', 'TypeScript', 'Payload CMS', 'SQLite', 'Framer Motion', 'i18n'],
        stack: { frontend: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 3', 'Framer Motion', 'next-intl'], backend: ['Node.js', 'TypeScript', 'Payload CMS 3', 'REST + GraphQL'], data: ['SQLite', 'PostgreSQL (planned)', 'Algolia search (planned)'], ai: ['Skin-concern quiz', 'Routine builder', 'AI skincare advisor (planned)'], services: ['Payload Admin', 'Managed Auth (planned)', 'Stripe (planned)', 'Resend email (planned)', 'Cloudflare R2 (planned)'] },
        liveUrl: 'https://kbeauty-teal.vercel.app/',
        images: ['/projects/kbeauty/01.webp'],
        isFeatured: true,
        status: 'in-progress',
        uiStatus: 'final',
    },
    {
        title: 'ChoyNet — Map-Based Social Network',
        category: 'web',
        tag: 'WEB APP',
        featuredLabel: 'TECH_STACK',
        problemStatement: 'A living map of real people for finding friends, partners, investors and skill exchanges.',
        description:
            'A location-first professional and social network where members discover people nearby on an interactive map, with a premium purple design system and email sign-up.',
        tech: ['Next.js', 'TypeScript', 'Mapbox GL', 'Tailwind CSS'],
        stack: { frontend: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Mapbox GL', 'React Three Fiber'], backend: ['TypeScript', 'Next.js API routes', 'bcrypt auth', 'Realtime chat (planned)'], data: ['Neon PostgreSQL', 'Dexie (IndexedDB)', 'PostGIS (planned)'], ai: ['AI people matching (planned)', 'Semantic search (planned)'], services: ['Mapbox', 'Resend email (planned)', 'Sentry (planned)', 'Vercel (planned)'] },
        images: ['/projects/choynet/01.webp'],
        isFeatured: true,
        status: 'in-progress',
        uiStatus: 'final',
    },
    {
        title: 'ChoyArc — Life & Work Productivity',
        category: 'web',
        tag: 'WEB APP',
        featuredLabel: 'TECH_STACK',
        problemStatement: 'Tasks, projects, goals, habits and finance in one connected workspace with an AI copilot.',
        description:
            'One data model for personal life, freelance work and business. Goals, projects and tasks link together, with Today, Routines, Habits, Focus and an AI copilot that plans your day and writes your weekly review. The landing page is live in the preview; the app UI is still being finalized.',
        tech: ['Next.js', 'TypeScript', 'Auth', 'Drizzle ORM', 'SQLite', 'Tailwind CSS'],
        stack: { frontend: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'], backend: ['TypeScript', 'Next.js server routes', 'Drizzle ORM'], data: ['SQLite (better-sqlite3)', 'Neon PostgreSQL (planned)'], ai: ['AI Copilot (planned)', 'Daily plan + weekly review (planned)'], services: ['Managed Auth (Sessions · OAuth)', 'Sentry (planned)', 'Vercel (planned)'] },
        images: ['/projects/choyarc/01.webp'],
        isFeatured: true,
        status: 'in-progress',
        uiStatus: 'in-progress',
    },
    {
        title: 'ChoyWatch — Movies & Ticket Booking',
        category: 'web',
        tag: 'WEB APP',
        featuredLabel: 'TECH_STACK',
        problemStatement: 'A unified experience tracking movies and TV shows with real-time ratings from top critic platforms.',
        description:
            'A movie and TV tracking application with TMDB integration, personalized watchlists, IMDb and Rotten Tomatoes ratings, box office and upcoming releases, and ticket booking, in a dark cinematic UI.',
        tech: ['Next.js', 'TypeScript', 'Supabase', 'Zustand', 'TMDB API', 'Vercel'],
        stack: { frontend: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Zustand'], backend: ['TypeScript', 'Next.js API routes', 'Zod'], data: ['Supabase PostgreSQL', 'TMDB API'], ai: ['AI recommendations (planned)'], services: ['Vercel', 'Stripe payments (planned)', 'Sentry (planned)'] },
        liveUrl: 'https://choywatch.vercel.app/',
        images: ['/projects/choywatch/01.webp'],
        isFeatured: true,
        status: 'ready',
        uiStatus: 'final',
    },
    {
        title: 'LostLinkIP — Missing Persons Platform',
        category: 'web',
        tag: 'WEB APP',
        featuredLabel: 'TECH_STACK',
        problemStatement: 'A community platform helping find missing persons and reunite families through volunteer efforts.',
        description:
            'A lost-and-found recovery platform with missing and found reports, volunteer onboarding, donation campaigns and success stories, giving families hope and action through community mobilization.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Cloudflare R2', 'Vercel'],
        stack: { frontend: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 3'], backend: ['TypeScript', 'Next.js Server Actions', 'Middleware auth'], data: ['Supabase PostgreSQL', 'Cloudflare R2'], ai: ['AI photo matching (planned)'], services: ['Supabase Auth', 'Vercel', 'Resend email (planned)', 'Sentry (planned)'] },
        liveUrl: 'https://lostlinkip.org/',
        images: ['/projects/lostlinkip/01.webp'],
        isFeatured: true,
        status: 'ready',
        uiStatus: 'final',
    },

    // ─── Mobile apps ───
    {
        title: 'Lookergo — Local Marketplace',
        category: 'mobile',
        tag: 'MOBILE APP',
        featuredLabel: 'TECH_STACK',
        problemStatement: 'Rent a home, borrow a book, hire a pro or trade used goods, ranked by how close it is to you.',
        description:
            'A location-first marketplace with five verticals: To-Let, Books, Services, Items and Explore. Built for many languages and currencies, with verified listings and an admin console. Part of Oegoo LLC. Final UI is still in progress; these are screens from the current build.',
        tech: ['React Native', 'Expo', 'Expo Router', 'TypeScript', 'Maps'],
        stack: { frontend: ['React Native 0.88', 'Expo 58', 'Expo Router', 'TypeScript'], backend: ['TypeScript', 'Bun runtime', 'Router → service → data layers'], data: ['SQLite', 'Neon PostgreSQL (planned)'], ai: ['AI listing assistant (planned)', 'Semantic search (planned)'], services: ['Email auth', 'Managed Auth (planned)', 'Push notifications (planned)', 'Expo EAS (planned)'] },
        liveUrl: 'https://www.lookergo.app/',
        images: [
            '/projects/lookergo/01.webp',
            '/projects/lookergo/02.webp',
            '/projects/lookergo/03.webp',
            '/projects/lookergo/04.webp',
        ],
        imageKind: 'screenshot',
        isFeatured: true,
        status: 'in-progress',
        uiStatus: 'in-progress',
    },
    {
        title: 'CallingIP — Calling & Utility App',
        category: 'mobile',
        tag: 'MOBILE APP',
        featuredLabel: 'TECH_STACK',
        problemStatement: 'A communication and everyday utility app for global migrants and a wider audience.',
        description:
            'Five tabs (Chats, IP Call, Story, Features, Wallet) plus prayer times, sports scores, rewards, city To-Let, local services and an AI assistant. I am co-founder; the frontend runs on demo data and the final UI is still in progress. Previews are design studies, not native screenshots.',
        tech: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'SQLite'],
        stack: { frontend: ['React Native 0.88', 'Expo 58', 'TypeScript', 'React Navigation'], backend: ['Demo data (no server yet)', 'Node.js API (planned)'], data: ['expo-sqlite (local)', 'PostgreSQL (planned)'], ai: ['AI assistant (preview)', 'LLM assistant (planned)'], services: ['VoIP / SIP provider (planned)', 'Push notifications (planned)', 'Payments (planned)', 'Expo EAS (planned)'] },
        liveUrl: 'https://callingip.vercel.app/',
        images: [
            '/projects/callingip/01.webp',
            '/projects/callingip/02.webp',
            '/projects/callingip/03.webp',
            '/projects/callingip/04.webp',
        ],
        imageKind: 'design-preview',
        isFeatured: true,
        status: 'in-progress',
        uiStatus: 'in-progress',
    },
    {
        title: 'ChoyAI — Personal AI Assistant',
        category: 'mobile',
        tag: 'MOBILE APP',
        featuredLabel: 'TECH_STACK',
        problemStatement: 'An agentic cross-platform assistant that orchestrates productivity, decisions and workflows.',
        description:
            'A cross-platform assistant with chat, server-side memory and automations behind one interface that avoids vendor lock-in. The React Native client targets iOS and Android through Expo, with a local demo mode. Final UI is still in progress.',
        tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'LLM Orchestration'],
        stack: { frontend: ['React Native 0.86', 'Expo 57', 'TypeScript', 'React Navigation'], backend: ['Python', 'FastAPI', 'JWT auth'], data: ['SQLite + Alembic', 'expo-sqlite (client)', 'FTS5 memory'], ai: ['LLM provider adapter', 'Layered memory'], services: ['Supabase client', 'Push notifications (planned)', 'Sentry (planned)', 'Expo EAS (planned)'] },
        isFeatured: true,
        status: 'in-progress',
        uiStatus: 'in-progress',
    },
];

export const PERFORMANCE_METRICS = {
    title: 'Web Performance Results',
    items: [
        '95+ Lighthouse Score',
        'Clean Core Web Vitals',
        'Lazy Loading · Image Optimization · SEO Metadata',
    ],
} as const;

// ─── Videos ───
export const VIDEOS_INTRO =
    'Here are the last 3 published videos from my YouTube channel, chronicling my journey, tech insights, and creative endeavors.';

export const YOUTUBE_PROFILE_IMAGE = 'https://yt3.googleusercontent.com/ItogoZ0ZYr_lqdFM63t2u0ZJUTEdQbE8J5qfqC3Ocmtd4hw6zFvol_CjxO4yasb86Ch5WX_a=s176-c-k-c0x00ffffff-no-rj';

export const LATEST_YOUTUBE_VIDEOS = [
    { id: 'CugOXmH-JMY', title: 'Sajek 2024 | Travel V5' },
    { id: 'YidbonU4HYk', title: 'Sreemangal | Travel V4' },
    { id: 'IN6H4xq2B7c', title: 'Nepal Tour Glimpse | Outing V9' }
];

// ─── Experience ───
export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
    {
        title: 'Post-Production Manager',
        company: 'Iqrasys Solutions Limited',
        location: '',
        period: 'September 1, 2019 - Present',
        body: 'Managing end-to-end post-production workflows, from editing systems and narrative structure to final delivery for high-volume video channels.',
        isCurrent: true,
    },
    {
        title: 'Social Media Manager',
        company: 'YouTube Village',
        location: 'Dhaka, Bangladesh',
        period: '2020 - Present',
        body: 'Managed social media presence and executed video editing tasks to create engaging content and grow online audience.',
        isCurrent: true,
    },
    {
        title: 'Founder and CEO',
        company: 'Choyzenic & Oegoo LLC',
        location: 'Dhaka, Bangladesh',
        period: 'October 2025 - Present',
        body: 'Leading the vision, strategy, operations, and growth of Choyzenic (since October 2025) and Oegoo LLC (since 2026) as Founder and Chief Executive Officer.',
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
        title: 'BSc, Computer Science and Engineering',
        institution: 'European University of Bangladesh',
        location: 'Dhaka, Bangladesh',
        period: '2023 - 2026',
        body: 'Mastering advanced software architecture, distributed systems and algorithms. Preparing for high-impact tech roles.',
        isCurrent: true,
    },
    {
        title: 'Diploma In Computer Engineering, CSE',
        institution: 'Daffodil Polytechnic Institute (DPI)',
        location: 'Dhaka, Bangladesh',
        period: '2012 - 2016',
        body: 'Mastering core computer systems, programming logic and hardware engineering. Foundation for advanced engineering.',
        isCurrent: false,
    },
];

// ─── Contact ───
export const CONTACT_INTRO =
    'Currently exploring senior web & app development roles and AI product collaborations — particularly within high-growth startups, AI-native companies, and tech hubs in Dubai and beyond.';

export const ROLE_OPTIONS: RoleOption[] = [
    { value: '', label: 'Select purpose' },
    { value: 'business-proposal', label: 'Business Proposal' },
    { value: 'ai-product-development', label: 'AI Product Development' },
    { value: 'webapp-development', label: 'Webapp Development' },
    { value: 'mobileapp-development', label: 'Mobileapp Development' },
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
        href: SITE_METADATA.social.instagram,
        iconName: 'Instagram',
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
