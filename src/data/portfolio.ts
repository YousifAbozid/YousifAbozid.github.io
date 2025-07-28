export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'devops' | 'soft';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

// Portfolio Data
export const personalInfo = {
  name: 'Yousif Abozid',
  title: 'Full Stack Software Engineer',
  subtitle: 'Building scalable web applications with modern technologies',
  bio: [
    'Passionate Full Stack Software Engineer with 4+ years of experience creating robust, scalable applications. Specialized in React, TypeScript, Node.js, and cloud technologies.',
    'I thrive on solving complex problems and delivering high-quality solutions that exceed expectations. My approach combines technical expertise with user-centered design thinking.',
    "When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or mentoring fellow developers in the community.",
  ],
  email: 'yousif.abozid@yahoo.com',
  phone: '+20 1024022092',
  location: 'Cairo, Egypt',
  social: {
    github: 'https://github.com/YousifAbozid',
    linkedin: 'https://linkedin.com/in/yousifabozid',
    twitter: 'https://twitter.com/YousifAbozid12',
    email: 'mailto:yousif.abozid@yahoo.com',
  },
};

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Full Stack Software Engineer',
    company: 'Salem Ventures / TradeSocio',
    location: 'Zahraa El Maadi, Cairo, Egypt (On-site)',
    startDate: new Date('2024-07-01'),
    description:
      'Leading frontend development for fintech trading platforms, working directly with executive leadership on mission-critical financial applications.',
    achievements: [
      'Developed Bruno, a trading platform used by 10K+ users, using React, Tailwind CSS, and Redux',
      'Increased platform performance by 60% through modularization and advanced hooks implementation',
      'Integrated biometric authentication (Face ID/Fingerprint) across iOS & Android builds using Capacitor',
      'Delivered ERP system managing 500+ client accounts and permissions with React Query and REST APIs',
      'Reduced frontend defects by 40% after refactoring legacy code into reusable components',
      'Coordinated with cross-functional teams to launch 20+ features across 3 fintech products',
      'Provided mentorship to junior developers and onboarding support to new hires',
      'Collaborated directly with executive leadership on strategic feature roadmap and market fit goals',
      'Built cross-platform mobile applications supporting both iOS and Android with full biometric integration',
      'Established collaborative environment through peer support and clean, maintainable frontend architecture',
    ],
    technologies: [
      'React.js',
      'Redux',
      'React Query',
      'Tailwind CSS',
      'Material-UI',
      'Node.js',
      'Capacitor',
      'REST APIs',
      'Git',
      'GitHub',
      'Azure DevOps',
      'FinTech',
      'Cross-Platform Development',
      'Biometric Authentication',
      'ERP Systems',
    ],
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Mohandes Life Insurance',
    location: 'Dokki, Giza, Egypt (On-site)',
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-06-30'),
    description:
      'Developed and maintained innovative software solutions to streamline insurance processes and enhance customer experiences.',
    achievements: [
      'Built insurance issuance system increasing processing efficiency by 80%',
      'Customized 10+ products to meet specific client requirements and specifications',
      'Achieved 99.9% uptime by maintaining and improving SISos 11 internal system',
      'Produced actionable reports adopted by executive leadership for strategic planning',
      'Led modernization of legacy stack, cutting support tickets by 45%',
      'Spearheaded migration of legacy systems to modern web technologies',
      'Generated comprehensive reports providing critical insights for decision-making processes',
      'Enhanced overall system performance and user satisfaction through modernization initiatives',
    ],
    technologies: [
      'React.js',
      'JavaScript',
      'SISos 11',
      'Web Development',
      'Frontend Development',
      'Legacy System Migration',
      'Insurance Systems',
      'Report Generation',
      'System Maintenance',
    ],
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'African Leadership Experience',
    location: 'Westlands, Nairobi, Kenya (Remote)',
    startDate: new Date('2023-02-01'),
    endDate: new Date('2024-06-30'),
    description:
      'Full-time software engineer role focused on comprehensive skill development and building production-grade applications across the full stack.',
    achievements: [
      'Completed 50+ projects, including full-stack web applications using React, Node.js, and PostgreSQL',
      'Mastered 12+ tools across frontend and backend: TypeScript, GraphQL, AWS, CI/CD, and testing frameworks',
      'Reviewed peer submissions and supported community learning groups weekly',
      'Contributed to production-grade applications featured in ALX engineering showcase',
      'Participated in Peer Learning Days (PLD) and collaborative development practices',
      'Built comprehensive portfolio projects demonstrating full-stack development capabilities',
      'Gained expertise in agile development methodologies and team-based project collaboration',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'GraphQL',
      'AWS',
      'Python',
      'C',
      'Linux',
      'Git',
      'CI/CD',
      'Jest',
      'Cypress',
      'DevOps',
      'System Administration',
    ],
  },
  {
    id: '4',
    title: 'Software Engineer Intern',
    company: 'Gig Bud',
    location: 'Zagazig, Sharqia, Egypt (On-site)',
    startDate: new Date('2022-02-01'),
    endDate: new Date('2023-02-28'),
    description:
      'Completed a comprehensive one-year software engineering internship focused on building scalable SaaS applications.',
    achievements: [
      'Built scalable SaaS web application using Next.js and Express',
      'Decreased feature delivery time by 30% through improved time management and workflow optimization',
      'Owned end-to-end implementation of core modules and database connections',
      'Participated in Agile sprints and contributed to daily standups and code reviews',
      'Implemented APIs and connected them to the database for seamless data flow',
      'Collaborated effectively in team environment while maintaining attention to detail',
      'Developed expertise in software project management and team leadership',
      'Applied secure authentication using JWT and bcrypt for user management',
    ],
    technologies: [
      'Next.js',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JavaScript',
      'CSS',
      'REST APIs',
      'JWT',
      'bcrypt',
      'GitHub Actions',
      'ESLint',
      'Prettier',
      'SaaS Development',
      'Full-Stack Development',
    ],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'React.js', level: 95, category: 'frontend' },
  { name: 'Redux', level: 90, category: 'frontend' },
  { name: 'React Query', level: 85, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend' },
  { name: 'Material-UI', level: 90, category: 'frontend' },
  { name: 'Capacitor', level: 85, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Express.js', level: 90, category: 'backend' },
  { name: 'REST APIs', level: 95, category: 'backend' },
  { name: 'MongoDB', level: 85, category: 'backend' },
  { name: 'PostgreSQL', level: 80, category: 'backend' },
  { name: 'JWT', level: 90, category: 'backend' },
  { name: 'bcrypt', level: 85, category: 'backend' },
  { name: 'GraphQL', level: 75, category: 'backend' },
  { name: 'Python', level: 70, category: 'backend' },
  { name: 'C', level: 65, category: 'backend' },

  // DevOps & Tools
  { name: 'Git', level: 95, category: 'devops' },
  { name: 'GitHub', level: 95, category: 'devops' },
  { name: 'GitHub Actions', level: 80, category: 'devops' },
  { name: 'Azure DevOps', level: 75, category: 'devops' },
  { name: 'ESLint', level: 85, category: 'devops' },
  { name: 'Prettier', level: 85, category: 'devops' },
  { name: 'Husky', level: 85, category: 'devops' },
  { name: 'CI/CD', level: 80, category: 'devops' },
  { name: 'AWS', level: 70, category: 'devops' },
  { name: 'Linux', level: 75, category: 'devops' },
  { name: 'Bash', level: 85, category: 'devops' },
  { name: 'Shell Scripting', level: 85, category: 'devops' },
  { name: 'Docker', level: 65, category: 'devops' },

  // Soft Skills
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Team Leadership', level: 90, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Mentoring', level: 90, category: 'soft' },
  { name: 'Project Management', level: 85, category: 'soft' },
  { name: 'Code Review', level: 90, category: 'soft' },
  { name: 'Time Management', level: 90, category: 'soft' },
  { name: 'Attention to Detail', level: 85, category: 'soft' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'DevInsight',
    description:
      'Powerful GitHub analytics platform transforming profiles into beautiful insights with advanced visualizations.',
    longDescription:
      'DevInsight is a comprehensive GitHub analytics platform that transforms raw GitHub data into meaningful visualizations and actionable insights. Built with React 19, TypeScript, and Tailwind CSS v4, it offers a complete suite of tools including detailed profile analysis with contribution heatmaps, developer personas and personalized insights, customizable dev card generator with 15+ themes, GitHub battles for user comparisons, and advanced features like repository recommendations. The platform provides higher API rate limits, detailed contribution data, and beautiful interactive visualizations for developers, hiring managers, and GitHub enthusiasts.',
    image: '/api/placeholder/600/400',
    technologies: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'React Router v7',
      'TanStack Query',
      'Chart.js',
      'Framer Motion',
      'Vite',
      'GitHub API',
      'React Context API',
    ],
    category: 'frontend',
    githubUrl: 'https://github.com/YousifAbozid/DevInsight',
    demoUrl: 'https://github-dev-insight.vercel.app/',
    featured: true,
  },
  {
    id: '2',
    title: 'React 19 TypeScript Template',
    description:
      'Modern React 19 starter template with TypeScript, Vite, and Tailwind CSS v4. Production-ready with comprehensive theming.',
    longDescription:
      'A modern, production-ready template for building web applications with React 19, TypeScript, Vite, and Tailwind CSS v4. Features a comprehensive theming system with semantic color variables, dark mode support out of the box, ESLint/Prettier configuration, Husky pre-commit hooks, and optimized builds. Includes organized color categories for light/dark backgrounds, text, accents, borders, and shadows. Perfect for developers who want to start projects with modern tooling and best practices already configured.',
    image: '/api/placeholder/600/400',
    technologies: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'ESLint',
      'Prettier',
      'Husky',
      'Dark Mode',
      'Semantic Theming',
    ],
    category: 'frontend',
    githubUrl: 'https://github.com/YousifAbozid/template-react-ts',
    demoUrl: 'https://template-react-ts-ten.vercel.app/',
    featured: true,
  },
  {
    id: '3',
    title: 'Mirage Master',
    description:
      'AI image SaaS platform with advanced processing capabilities, secure payments, and multiple AI features.',
    longDescription:
      'Mirage Master is a comprehensive AI image SaaS platform that excels in image processing capabilities with secure payment infrastructure and advanced search functionalities. Built with Next.js 14, TypeScript, and MongoDB, it supports multiple AI features including image restoration, recoloring, object removal, generative filling, and background removal. Features secure authentication with Clerk, payment processing via Stripe, cloud storage with Cloudinary, community image showcase, credits system, and responsive UI/UX. Perfect example of modern SaaS architecture with AI integration.',
    image: '/api/placeholder/600/400',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'MongoDB',
      'Clerk Auth',
      'Cloudinary',
      'Stripe',
      'Shadcn/ui',
      'Tailwind CSS',
      'AI Processing',
      'SaaS Architecture',
    ],
    category: 'fullstack',
    githubUrl: 'https://github.com/YousifAbozid/mirage-master',
    demoUrl: 'https://mirage-master.vercel.app/',
    featured: true,
  },
  {
    id: '4',
    title: 'Next.js 15 TypeScript Template',
    description:
      'Modern Next.js v15 starter template with TypeScript and Tailwind CSS v4. Production-ready with App Router and theming.',
    longDescription:
      'A modern, production-ready template for building web applications with Next.js v15, TypeScript, and Tailwind CSS v4. Features the latest App Router architecture, comprehensive theming system with semantic color variables, dark mode support out of the box, ESLint/Prettier configuration, and Husky pre-commit hooks. Includes Next.js v15 specific features like Server Components, Server Actions, improved TypeScript support, optimized images, API routes, middleware, and Incremental Static Regeneration. Perfect for developers who want to start Next.js projects with the latest features and best practices already configured.',
    image: '/api/placeholder/600/400',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'App Router',
      'Server Components',
      'ESLint',
      'Prettier',
      'Husky',
      'Dark Mode',
    ],
    category: 'fullstack',
    githubUrl: 'https://github.com/YousifAbozid/template-nextjs-ts',
    demoUrl: 'https://template-nextjs-ts.vercel.app/',
    featured: true,
  },
  {
    id: '5',
    title: 'Next.js Backend API Template',
    description:
      'Modern Next.js API starter with MongoDB, JWT auth, and Zod validation. Production-ready backend architecture.',
    longDescription:
      'A robust, production-ready template for building scalable RESTful APIs with Next.js. Features comprehensive authentication with JWT, MongoDB integration with Mongoose ORM, rate limiting system, input validation with Zod, centralized error handling, structured logging with Winston, complete Jest test setup, and API documentation. Includes CORS support, ESLint/Prettier configuration, Husky pre-commit hooks, and tiered rate limiting for different user types. Perfect for developers who need a solid backend foundation with modern tooling and best practices.',
    image: '/api/placeholder/600/400',
    technologies: [
      'Next.js 15',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Zod',
      'Winston',
      'Jest',
      'ESLint',
      'Prettier',
      'Husky',
      'Rate Limiting',
      'API Development',
    ],
    category: 'backend',
    githubUrl: 'https://github.com/YousifAbozid/template-nextjs-backend',
    demoUrl: 'https://template-nextjs-backend.vercel.app/',
    featured: false,
  },
  {
    id: '6',
    title: 'Express.js Production Template',
    description:
      'Modern Express.js starter with MongoDB, JWT auth, and comprehensive security. Production-ready with Swagger docs.',
    longDescription:
      'A fully-featured, production-ready Express.js template with modern development tooling and best practices built-in. Features JWT-based authentication using Passport.js, MongoDB integration with Mongoose ODM, built-in Swagger/OpenAPI documentation, request validation with Express Validator, comprehensive security with CORS, Helmet.js, rate limiting, compression middleware, request logging with Morgan, application logging with Winston, ESLint/Prettier integration, Git hooks with Husky, Jest testing framework with Supertest for API testing, and code coverage reports. Perfect foundation for building scalable REST APIs.',
    image: '/api/placeholder/600/400',
    technologies: [
      'Express.js',
      'Node.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Passport.js',
      'Swagger',
      'Jest',
      'Winston',
      'Helmet.js',
      'ESLint',
      'Prettier',
    ],
    category: 'backend',
    githubUrl: 'https://github.com/YousifAbozid/template-expressjs',
    demoUrl: 'https://mammoth-stacy-octopus-labs-467290b1.koyeb.app/',
    featured: false,
  },
  {
    id: '7',
    title: 'TVFlix',
    description:
      'Movie and TV show discovery platform built with vanilla HTML, CSS, and JavaScript.',
    longDescription:
      'TVFlix is a web application that provides a platform for discovering the latest movies and trending TV shows. Built entirely with vanilla HTML, CSS, and JavaScript, it demonstrates strong foundational web development skills without relying on frameworks. Features a user-friendly interface for browsing available content, searching for films, and exploring trending entertainment. The project showcases clean code architecture, responsive design principles, and effective DOM manipulation using pure JavaScript.',
    image: '/api/placeholder/600/400',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design',
      'DOM Manipulation',
      'Web APIs',
    ],
    category: 'frontend',
    githubUrl: 'https://github.com/YousifAbozid/Tvflix',
    demoUrl: 'https://yousifabozid.github.io/Tvflix/',
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    title: 'Product Manager',
    company: 'TechCorp Solutions',
    content:
      'Yousif consistently delivers high-quality code and innovative solutions. His technical expertise and collaborative approach make him an invaluable team member. He led our migration to microservices architecture flawlessly.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    title: 'CTO',
    company: 'StartupXYZ',
    content:
      'Working with Yousif was exceptional. He built our entire frontend from scratch and delivered ahead of schedule. His attention to detail and problem-solving skills helped us launch successfully and scale rapidly.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Johnson',
    title: 'Senior Developer',
    company: 'Digital Agency Pro',
    content:
      'Yousif is a mentor and leader who elevates everyone around him. His code reviews are thorough and educational. He introduced modern best practices that improved our entire development workflow.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Park',
    title: 'Designer',
    company: 'WebDev Studio',
    content:
      'Collaborating with Yousif on projects was always a pleasure. He translates designs into pixel-perfect implementations and often suggests improvements that enhance the user experience. Truly talented developer.',
    avatar: '/api/placeholder/100/100',
    rating: 5,
  },
];

export const services: Service[] = [
  {
    icon: 'Code',
    title: 'Frontend Development',
    description:
      'Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks. Focus on performance, accessibility, and user experience.',
  },
  {
    icon: 'Server',
    title: 'Backend Development',
    description:
      'Building scalable APIs and server-side applications with Node.js, Express, and databases. Expertise in microservices architecture and cloud deployment.',
  },
  {
    icon: 'Zap',
    title: 'Web Performance',
    description:
      'Optimizing websites for speed, SEO, and Core Web Vitals. Performance auditing, code splitting, image optimization, and caching strategies.',
  },
  {
    icon: 'Shield',
    title: 'Quality Assurance',
    description:
      'Implementing comprehensive testing strategies, code reviews, and CI/CD pipelines. Ensuring code quality, security, and maintainability.',
  },
];
