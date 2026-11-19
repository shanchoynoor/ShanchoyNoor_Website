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
    title: 'Shanchoy Noor — Web & AI Developer',
    description:
        'Frontend engineer specializing in React, Next.js, and TypeScript. Building AI-powered systems and production-grade web applications from Dhaka, Bangladesh.',
    keywords:
        'frontend engineer, next.js developer, react developer, AI systems, Dhaka, Bangladesh, available for hire',
    url: 'https://shanchoynoor.com',
    social: {
        github: 'https://github.com/shanchoynoor',
        linkedin: 'https://www.linkedin.com/in/shanchoynoor/',
        twitter: 'https://x.com/shanchoynoor',
        facebook: 'https://www.facebook.com/imshanchoynoor',
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
    eyebrow: 'WEB & AI DEVELOPER · ENTREPRENEUR',
    firstName: 'Shanchoy',
    lastName: 'Noor',
    tagline:
        'I build fast, accessible, and scalable frontend systems — with the architectural depth to take them all the way to production.',
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
    "I'm a computer engineer and entrepreneur with over 10 years of experience building at the intersection of design, software, and media — focused on systems that scale, assets that compound, and products that actually move people.",
    "I work within a joint ecosystem where a software development company and a video production studio operate under one roof. On the tech side, I work as a Frontend Developer — turning complex product requirements into clean, scalable web platforms and digital products. On the media side, I serve as Post Production Manager, running end-to-end content workflows, narrative structure, and editing systems for AroundMeBD, Village Grandpa's Cooking, and Fortunate Guest — high-volume channels reaching millions across social platforms.",
    "Beyond my primary roles, I founded Choyzenic — a product-focused software company dedicated to AI-driven tools, automation systems, and scalable digital infrastructure. This shift reflects a deliberate long-term strategy: moving from trading time for services toward building proprietary technology assets. Currently, my deepest focus is Choy AI — an agentic AI, cross-platform personal assistant designed to orchestrate productivity, decision-making, and workflow automation intelligently.",
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
    {
        title: 'ChoyWatch',
        tag: 'web app',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'A unified experience tracking movies and TV shows with real-time ratings from top critic platforms.',
        description:
            'A modern movie and TV show tracking application featuring seamless TMDB integration, personalized watchlists, and real-time ratings from major critic platforms like IMDb and Rotten Tomatoes. Designed with a dark cinematic UI.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Routes', 'PostgreSQL', 'Vercel'],
        liveUrl: 'https://choywatch.vercel.app/',
        images: [
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYWATCH+SCREEN+1',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYWATCH+SCREEN+2',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYWATCH+SCREEN+3'
        ],
        isFeatured: true,
        status: 'ready',
    },
    {
        title: 'Lostlinkip.org',
        tag: 'web app',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'A community platform helping find missing persons and reunite families through volunteer efforts.',
        description:
            'To provide hope and action for families of missing persons through community mobilization, resources, and unwavering support.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'API Routes', 'PostgreSQL', 'Vercel', 'Cloudflare R2'],
        liveUrl: 'https://lostlinkip.org/',
        images: [
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=LOSTLINK+SCREEN+1',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=LOSTLINK+SCREEN+2'
        ],
        isFeatured: true,
        status: 'ready',
    },
    {
        title: 'YouTube Village',
        tag: 'website',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'Elevates rural content creators by providing a structured platform to showcase their work globally.',
        description:
            'A central hub tailored for rural video content creators in Bangladesh. The platform features organized video galleries, detailed creator profiles, and streamlined content distribution, bridging the gap between local talent and global audiences.',
        tech: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
        liveUrl: 'https://youtubevillage.com/',
        images: [
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=YTVILLAGE+SCREEN+1',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=YTVILLAGE+SCREEN+2',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=YTVILLAGE+SCREEN+3'
        ],
        isFeatured: true,
        status: 'ready',
    },
    {
        title: 'AroundMeBD',
        tag: 'website',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'An interactive mapping platform highlighting cultural locations and businesses across Bangladesh.',
        description:
            'An interactive local discovery platform highlighting culturally significant locations, businesses, and untold stories across Bangladesh. Features dynamic mapping interfaces and a highly performant directory structure.',
        tech: ['Next.js', 'React', 'Google Maps API', 'Framer Motion'],
        liveUrl: 'https://aroundmebd.com/',
        images: [
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=AROUNDMEBD+SCREEN+1',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=AROUNDMEBD+SCREEN+2'
        ],
        isFeatured: true,
        status: 'ready',
    },
    {
        title: 'ChoyCraft - AI Content Generation',
        tag: 'web app',
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'A dedicated creative suite for generating and iterating on complex multi-modal AI assets locally.',
        description:
            'A dedicated creative suite for generating and iterating on complex multi-modal AI assets locally.',
        tech: ['Python', 'FastAPI', 'Next.js', 'Electron', 'AWS'],
        liveUrl: '#',
        images: [
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYCRAFT+SCREEN+1',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYCRAFT+SCREEN+2'
        ],
        isFeatured: true,
        status: 'in-progress',
    },
    {
        title: 'ChoyAI — Personal AI Assistant',
        tag: ['DESKTOP APP', 'MOBILE APP'],
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'Abstracts LLM calls behind a unified interface to eliminate vendor lock-in.',
        description:
            'Abstracts LLM calls behind a unified interface to eliminate vendor lock-in.',
        architectureNote:
            'Client → API Gateway → LLM Orchestrator → [OpenAI / Brave Search] → Response Formatter → Supabase logging → Client',
        tech: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'Supabase', 'LLM Orchestration', 'Search API'],
        liveUrl: '#',
        images: [
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYAI+SCREEN+1',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYAI+SCREEN+2',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYAI+SCREEN+3'
        ],
        isFeatured: true,
        status: 'in-progress',
    },
    {
        title: 'ChoyNet  — Social Media Platform',
        tag: ['DESKTOP APP', 'MOBILE APP'],
        featuredLabel: 'TECH_STACK',
        problemStatement:
            'A real-time AI companion focused on fluid conversational dynamics and emotional intelligence.',
        description:
            'A real-time AI companion focused on fluid conversational dynamics and emotional intelligence.',
        tech: ['Next.js', 'WebSockets', 'OpenAI API', 'Framer Motion'],
        liveUrl: '#',
        images: [
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYNET+SCREEN+1',
            'https://placehold.co/1280x720/0a0a0a/00F0FF.png?text=CHOYNET+SCREEN+2'
        ],
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
        title: 'Frontend Developer',
        company: 'Iqrasys Solutions Limited',
        location: '',
        period: 'September 1, 2019 - Present',
        body: 'Architecting premium frontend systems with React and Next.js. Delivering high-performance, accessible interfaces.',
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
    'Currently exploring senior frontend engineering roles and AI product collaborations — particularly within high-growth startups, AI-native companies, and tech hubs in Dubai and beyond.';

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
