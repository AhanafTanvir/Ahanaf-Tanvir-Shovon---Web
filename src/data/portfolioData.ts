export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'all';
  icon: string;
  proficiency: number;
  experience: string;
  highlightColor: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
  details: {
    client: string;
    timeline: string;
    role: string;
    challenge: string;
    solution: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    greeting: string;
    title: string;
    titles?: string[];
    secondaryTitle: string;
    bio: string;
    avatar: string;
    yearsOfExperience: string;
    projectsCompleted: string;
    happyClients: string;
    designImpact: string;
    resumeUrl: string;
    email: string;
    phone: string;
    location: string;
  };
  trustedCompanies: { name: string; icon: string }[];
  about: {
    headline: string;
    storyParagraphs: string[];
  };
  skills: Skill[];
  services: Service[];
  projects: Project[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  socials: { name: string; url: string; icon: string }[];
}

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: 'Ahanaf Tanvir Shovon',
    greeting: "HELLO, I'M",
    title: 'Web Developer',
    titles: ['Web Developer', 'Graphic Designer', 'App Developer'],
    secondaryTitle: '& Creative Technologist',
    bio: 'I craft meaningful digital experiences that are intuitive, beautiful and built with purpose.',
    avatar: '/assets/hero_portrait.jpg',
    yearsOfExperience: '5+',
    projectsCompleted: '30+',
    happyClients: '15+',
    designImpact: '+120%',
    resumeUrl: '#',
    email: 'shovonahanaftanvir@gmail.com',
    phone: '01773825317',
    location: 'Block G, Road No. 13, Bashundhara R/A, Dhaka',
  },
  trustedCompanies: [
    { name: 'Google', icon: 'google' },
    { name: 'Microsoft', icon: 'microsoft' },
    { name: 'Airbnb', icon: 'airbnb' },
    { name: 'HubSpot', icon: 'hubspot' },
    { name: 'Dribbble', icon: 'dribbble' },
  ],
  about: {
    headline: 'Designing with Empathy, Building with Purpose',
    storyParagraphs: [
      "I'm a Web Developer, Graphic Designer, and App Developer with 5+ years of experience transforming complex challenges into simple, intuitive, and visually captivating digital experiences.",
      'I bridge creative visual design with modern web and mobile engineering. Whether crafting sleek web apps, mobile solutions, or polished graphic identities, I build products that leave a lasting impression.',
    ],
  },
  services: [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Developing modern, fast, and responsive web applications with React, Next.js, and clean architecture.',
      iconName: 'Code',
      deliverables: ['Full-Stack Web Apps', 'Responsive Frontend', 'API & Database Integration', 'SEO & Performance'],
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Crafting memorable visual identities, brand guidelines, illustrations, and high-impact digital graphics.',
      iconName: 'Palette',
      deliverables: ['Brand Identity & Logos', 'Social Media Graphics', 'Vector Art & Assets', 'Print & Digital Layouts'],
    },
    {
      id: 'app-development',
      title: 'App Development',
      description: 'Building engaging cross-platform mobile applications with fluid animations and responsive mobile UX.',
      iconName: 'Smartphone',
      deliverables: ['iOS & Android Apps', 'Cross-Platform Architecture', 'Mobile UI/UX', 'Cloud Sync & APIs'],
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Creating user-centered flows, interactive prototypes, and modern glassmorphic interface systems.',
      iconName: 'Layers',
      deliverables: ['Wireframing & Prototyping', 'Design Systems', 'User Flow Mapping', 'Usability Audits'],
    },
  ],
  skills: [
    {
      name: 'React.js',
      category: 'frontend',
      icon: 'react',
      proficiency: 95,
      experience: '5+ yrs',
      highlightColor: '#61dafb',
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      icon: 'typescript',
      proficiency: 92,
      experience: '4+ yrs',
      highlightColor: '#3178c6',
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      icon: 'javascript',
      proficiency: 96,
      experience: '6+ yrs',
      highlightColor: '#f7df1e',
    },
    {
      name: 'Next.js',
      category: 'frontend',
      icon: 'nextjs',
      proficiency: 90,
      experience: '4+ yrs',
      highlightColor: '#000000',
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      icon: 'tailwind',
      proficiency: 94,
      experience: '4+ yrs',
      highlightColor: '#06b6d4',
    },
    {
      name: 'Node.js',
      category: 'backend',
      icon: 'nodejs',
      proficiency: 88,
      experience: '4+ yrs',
      highlightColor: '#339933',
    },
    {
      name: 'NestJS',
      category: 'backend',
      icon: 'nestjs',
      proficiency: 85,
      experience: '3+ yrs',
      highlightColor: '#ea2845',
    },
    {
      name: 'PostgreSQL / SQL',
      category: 'backend',
      icon: 'database',
      proficiency: 84,
      experience: '3+ yrs',
      highlightColor: '#4169e1',
    },
    {
      name: 'Figma',
      category: 'tools',
      icon: 'figma',
      proficiency: 95,
      experience: '5+ yrs',
      highlightColor: '#f24e1e',
    },
    {
      name: 'UI/UX Glassmorphism',
      category: 'tools',
      icon: 'palette',
      proficiency: 98,
      experience: '5+ yrs',
      highlightColor: '#8b5cf6',
    },
    {
      name: 'Docker',
      category: 'tools',
      icon: 'docker',
      proficiency: 80,
      experience: '2+ yrs',
      highlightColor: '#2496ed',
    },
    {
      name: 'Git & GitHub',
      category: 'tools',
      icon: 'git',
      proficiency: 94,
      experience: '5+ yrs',
      highlightColor: '#f05032',
    },
  ],
  projects: [
    {
      id: 'finova-finance',
      title: 'Finova – Finance App',
      category: 'Mobile & Web App Design',
      subtitle: 'Next-Gen Personal Wealth Management',
      description: 'A revolutionary fintech platform featuring real-time financial tracking, automated budgeting, and AI portfolio insights with sleek glassmorphism micro-interactions.',
      image: '/assets/project_finova.jpg',
      tags: ['React Native', 'TypeScript', 'Tailwind', 'Node.js', 'Fintech'],
      metrics: '+45% User Retention',
      liveUrl: 'https://example.com/finova',
      githubUrl: 'https://github.com/example/finova',
      details: {
        client: 'Finova Labs, San Francisco',
        timeline: '3 Months (2025)',
        role: 'Lead UI/UX Designer & Frontend Architect',
        challenge: 'Simplifying complex multi-currency investment portfolios into an effortless, transparent mobile experience that builds financial confidence.',
        solution: 'Engineered a modular design system with frosted glass widgets, quick-glance spending rings, and fluid motion transitions.'
      }
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      category: 'Enterprise SaaS Application',
      subtitle: 'Real-Time Revenue & User Intelligence',
      description: 'Comprehensive business intelligence platform processing over 10M daily events with customizable widgets, predictive analytics, and team collaboration.',
      image: '/assets/project_analytics.jpg',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'DataViz'],
      metrics: '3.2x Faster Decision Making',
      liveUrl: 'https://example.com/analytics',
      githubUrl: 'https://github.com/example/analytics',
      details: {
        client: 'DataFuse Cloud Inc.',
        timeline: '4 Months (2025)',
        role: 'Full-Stack Developer & UI Designer',
        challenge: 'Rendering high-density financial metrics and charts without sacrificing page performance or clean visual hierarchy.',
        solution: 'Implemented virtualized data grids, responsive frosted glass summary cards, and custom GPU-accelerated SVG interactive charts.'
      }
    },
    {
      id: 'saas-landing-page',
      title: 'SaaS Landing Page',
      category: 'Marketing Web Experience',
      subtitle: 'High-Converting Conversion Architecture',
      description: 'An ethereal, high-converting product landing page with interactive 3D elements, dynamic pricing calculator, and seamless onboarding flows.',
      image: '/assets/project_saas.jpg',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      metrics: '+68% Conversion Rate',
      liveUrl: 'https://example.com/saas-flow',
      githubUrl: 'https://github.com/example/saas-flow',
      details: {
        client: 'NexaFlow Systems',
        timeline: '2 Weeks (2025)',
        role: 'Design & Frontend Engineering',
        challenge: 'Differentiating an enterprise workflow tool in a crowded market with memorable visual identity and clear value proposition.',
        solution: 'Designed a signature frosted glass aesthetic with subtle ambient lighting, interactive product tours, and friction-free signup.'
      }
    }
  ],
  process: [
    {
      step: '01',
      title: 'Discover',
      description: 'Deep diving into user needs, business goals, and competitive landscape through research and stakeholder interviews.',
      iconName: 'Compass'
    },
    {
      step: '02',
      title: 'Define',
      description: 'Synthesizing insights, mapping user journeys, and structuring information architecture with clear milestones.',
      iconName: 'Target'
    },
    {
      step: '03',
      title: 'Ideate',
      description: 'Brainstorming creative possibilities, rapid wireframing, and crafting interactive prototypes for early validation.',
      iconName: 'Lightbulb'
    },
    {
      step: '04',
      title: 'Design & Build',
      description: 'Crafting pixel-perfect glassmorphism UI and engineering robust, production-ready code with clean architecture.',
      iconName: 'Code'
    },
    {
      step: '05',
      title: 'Test & Iterate',
      description: 'Running usability tests, analyzing real performance data, and continuously refining details for maximum impact.',
      iconName: 'CheckCircle'
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Rohit Sharma',
      role: 'Product Manager',
      company: 'Google',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      quote: 'Ahanaf is an exceptional designer and engineer. He understands user needs deeply and delivers outstanding results on every project. The glassmorphic UI he created transformed our customer retention.',
      rating: 5
    },
    {
      id: '2',
      name: 'Neha Verma',
      role: 'Design Lead',
      company: 'Microsoft',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      quote: 'Working with Ahanaf was a smooth and inspiring experience. His attention to detail, aesthetic mastery, and understanding of modern frontend technologies is truly impressive.',
      rating: 5
    },
    {
      id: '3',
      name: 'Karan Malhotra',
      role: 'Founder',
      company: 'Startuplab',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      quote: "Ahanaf's designs not only look amazing but also solve real user problems. Highly recommended for anyone looking to build a high-impact, modern digital presence!",
      rating: 5
    }
  ],
  socials: [
    { name: 'GitHub', url: 'https://github.com', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Twitter / X', url: 'https://twitter.com', icon: 'Twitter' },
    { name: 'Dribbble', url: 'https://dribbble.com', icon: 'Dribbble' }
  ]
};
