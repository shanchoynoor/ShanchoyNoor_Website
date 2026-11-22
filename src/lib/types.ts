export interface NavLink {
    label: string;
    href: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface SkillPanel {
    title: string;
    iconName: string;
    skills: string[];
    isPrimary?: boolean;
}

export interface Project {
    title: string;
    tag: string | string[];
    yearLabel?: string;
    featuredLabel?: string;
    problemStatement: string;
    description: string;
    architectureNote?: string;
    tech: string[];
    stack?: {
        frontend: string[];
        backend: string[];
        data: string[];
        ai?: string[];
        services?: string[];
    };
    liveUrl?: string;
    githubUrl?: string;
    images?: string[];
    imageKind?: 'screenshot' | 'design-preview';
    category: 'web' | 'mobile';
    isFeatured?: boolean;
    status?: 'ready' | 'mvp' | 'in-progress';
    uiStatus?: 'final' | 'in-progress';
}

export interface ExperienceEntry {
    title: string;
    company: string;
    location: string;
    period: string;
    body: string;
    isCurrent?: boolean;
}

export interface EducationEntry {
    title: string;
    institution: string;
    location: string;
    period: string;
    body: string;
    isCurrent?: boolean;
}

export interface ContactLink {
    label: string;
    href: string;
    iconName: string;
}

export interface RoleOption {
    value: string;
    label: string;
}
