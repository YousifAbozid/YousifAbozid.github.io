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

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  grade?: string;
  description: string;
  achievements: string[];
  skills: string[];
  certificates?: {
    title: string;
    description?: string;
    badgeColor?: string;
    imageUrl?: string;
  }[];
  featured?: boolean;
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
  longDescription?: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack';
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
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
    title: 'Brainwave',
    description:
      'Modern website with sleek parallax effects and bento box layouts. Mobile-first design with React.js and Tailwind CSS.',
    longDescription:
      'Brainwave is a modern website showcasing advanced UI/UX design with sleek parallax effects and bento box layouts. Built with React.js and Tailwind CSS, it demonstrates everything from stylish UI design to mobile-first principles. Features smooth parallax scrolling, scroll-lock functionality, responsive design, and modern web animations. Perfect example of contemporary web design trends and advanced CSS techniques combined with React development skills.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Vite',
      'React Router',
      'Parallax Scrolling',
      'Scroll Lock',
      'Responsive Design',
      'UI/UX Design',
    ],
    category: 'frontend',
    githubUrl: 'https://github.com/YousifAbozid/brainwave',
    demoUrl: 'https://ai-brainwave.vercel.app/',
    featured: false,
  },
  {
    id: '8',
    title: 'Personal Portfolio Website',
    description:
      'Modern portfolio website built with React 19, TypeScript, and Tailwind CSS v4. Showcases professional experience and projects.',
    longDescription:
      'This portfolio website serves as a comprehensive showcase of my professional journey and technical expertise. Built using my own React 19 TypeScript template as the foundation, it demonstrates modern web development practices with React 19, TypeScript, Vite, and Tailwind CSS v4. Features include a comprehensive theming system with semantic color variables, dark mode support, responsive design, smooth animations, and scroll-triggered effects. The site effectively presents professional experience, technical skills, project portfolio, and contact information in an engaging and accessible format. It represents the culmination of my frontend development skills and serves as both a portfolio piece and a practical demonstration of modern React development.',
    technologies: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Vite',
      'React Router',
      'Framer Motion',
      'Dark Mode',
      'Responsive Design',
      'GitHub Actions',
      'GitHub Pages',
    ],
    category: 'frontend',
    githubUrl: 'https://github.com/YousifAbozid/YousifAbozid.github.io',
    demoUrl: 'https://yousifabozid.github.io/',
    featured: true,
  },
  {
    id: '9',
    title: 'TVFlix',
    description:
      'Movie and TV show discovery platform built with vanilla HTML, CSS, and JavaScript.',
    longDescription:
      'TVFlix is a web application that provides a platform for discovering the latest movies and trending TV shows. Built entirely with vanilla HTML, CSS, and JavaScript, it demonstrates strong foundational web development skills without relying on frameworks. Features a user-friendly interface for browsing available content, searching for films, and exploring trending entertainment. The project showcases clean code architecture, responsive design principles, and effective DOM manipulation using pure JavaScript.',
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
    name: 'Shahenda M. Aal',
    title: 'Head of Marketing',
    company: 'Tradesocio',
    content:
      "I had the pleasure of meeting & working with Joe during my time at Tradesocio, and I can confidently say he's one of the most supportive and solutions-oriented developers I've come across. Joe is always willing to help—no matter how busy or complex the task. He listens, understands the need behind the request, and offers smart, digital solutions that genuinely make processes easier and more efficient. His ideas often saved us time, reduced manual work, and helped streamline collaboration across teams. What truly sets Joe apart, though, is his spirit. He brings kindness, positivity, and cheerfulness into every interaction, creating a comfortable and collaborative environment that makes working with him not just productive, but genuinely enjoyable. Any team would be lucky to have him—not just for his technical skills, but for the positive energy and thoughtful innovation he brings to the table.",
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQFm3HkpBUYCpA/profile-displayphoto-scale_200_200/B4DZfqZAjQH4Ac-/0/1751984114649?e=1756339200&v=beta&t=tFuI1KQhsLPNL14kmuGMqvALaBNYU2Uqdk7ltjaJQ6s',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ahmad Salama',
    title:
      'Digital Solutions Development | Fintech Innovation | Partnerships | Operations',
    company: 'TradeSocio',
    content:
      'I can confidently say that Yousif is a highly committed and disciplined professional. While not under my direct supervision, however he always shows reliability and approaches his responsibilities with dedication. All the best mate.',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQHBE34gtzcpTg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725282810809?e=1756944000&v=beta&t=NOLWOmnnpFNUGynLcunH2aaUpygb-oNpkbo1M4W_ZfU',
    rating: 5,
  },
  {
    id: '3',
    name: 'Mohamed Samir',
    title: 'Product-minded Software Engineer',
    company: 'Salem Ventures',
    content:
      'I worked with Yousif for six months and found him to be a dedicated, skilled, and collaborative colleague. He consistently delivered quality work and was always eager to learn and support the team.',
    avatar:
      'https://media.licdn.com/dms/image/v2/C5603AQHxWJAxFTX4hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649160758151?e=1756339200&v=beta&t=JylHvayd_Nqnm1ZM2u_cbB5a3DkdVSMp3MocT04rmTg',
    rating: 5,
  },
  {
    id: '4',
    name: 'Beshoy Nasry',
    title: 'Full Stack Engineer',
    company: 'Salem Ventures',
    content:
      "I had the pleasure of working with Yousif as part of the same MERN stack development team. He's a highly skilled and dedicated developer with a strong problem-solving mindset and great attention to detail. His commitment to delivering quality work on time made a big difference to our team. Wishing you all the best in your future endeavors — you truly deserve it!",
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQFUTMxr-v8oUQ/profile-displayphoto-shrink_800_800/B4DZedUGIgHkAc-/0/1750690985502?e=1756339200&v=beta&t=gJh8FoCLNj3-biWFgkc9Yj5KCXyUTby9wtwwHw-_MsM',
    rating: 5,
  },
  {
    id: '5',
    name: 'Eman Wagih',
    title: 'Full Stack Developer',
    company: 'Salem Ventures',
    content:
      "I had the pleasure of working with Yousif and was consistently impressed by his innovative thinking, creative approach to problem-solving, and strong work ethic. He brings a forward-thinking mindset to everything he does and isn't afraid to explore new ideas or take initiative. Yousif is not only hardworking but also thoughtful and intentional in the way he approaches challenges. His positive attitude and growth-oriented mindset make him a valuable asset to any team.",
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQH5BRiO5fjYjg/profile-displayphoto-crop_800_800/B4DZgPwa7WGQAI-/0/1752611010079?e=1756339200&v=beta&t=_uzkn0aORa79c_r7ogfihut3oZ2v6A6qtukp9SjsDws',
    rating: 5,
  },
  {
    id: '6',
    name: 'Tasneem Khaled',
    title: 'Junior Software Engineer',
    company: 'Salem Ventures',
    content:
      'I have had the pleasure of working with Yousif. He is truly sincere, ambitious, and technically skilled. A great team player, always willing to go the extra mile. I highly recommend him.',
    avatar:
      'https://media.licdn.com/dms/image/v2/D4D03AQHbPDvb9UoqZw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721839506528?e=1756339200&v=beta&t=W2ii6clHOlfRs7ypHtxsQPOQelSLlemKtRCYp-QVj7k',
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

export const education: Education[] = [
  {
    id: '1',
    degree: 'Software Engineering Program',
    institution:
      'African Leadership Experience (ALX Africa & Holberton School)',
    location: 'Westlands, Nairobi, Kenya (Remote)',
    startDate: new Date('2023-02-01'),
    endDate: new Date('2024-06-30'),
    description:
      'Completed an intensive 12-month software engineering program, one of the most prestigious and challenging scholarships in the tech industry. This elite program focused on comprehensive full-stack development with hands-on project experience and peer-to-peer learning.',
    achievements: [
      'Graduated with Front End Specialization from one of the most selective tech programs globally',
      'Participated in Peer Learning Days (PLD) and provided mentorship to fellow cohort members',
      'Reviewed peer projects and contributed to collaborative learning community groups',
      'Built comprehensive portfolio projects demonstrating full-stack development capabilities',
      'Achieved elite status as part of the small percentage who successfully completed the rigorous program',
    ],
    skills: [
      'SSL Certificates',
      'Networking',
      'Low Level Programming',
      'DevOps',
      'Linux',
      'MySQL',
      'Git',
      'Web Servers',
      'Firewalls',
      'Web Development',
      'Shell Scripting',
      'Object-Oriented Programming (OOP)',
      'Algorithms',
      'Nginx',
      'Load Balancing',
      'Bash',
      'Data Structures',
      'Software Development',
      'SQL',
      'Problem Solving',
      'Secure Shell (SSH)',
      'System Monitoring',
      'Emacs',
      'Python',
      'C',
      'JavaScript',
      'Vi',
      'System Administration',
    ],
    certificates: [
      {
        title: 'ALX SE Program Completion Certificate',
        description:
          'Graduation certificate from ALX Software Engineering Program powered by Holberton School',
        badgeColor: 'primary',
        imageUrl: '/certificates/ALX-SE-Program-Completion-Certificate.png',
      },
    ],
    featured: true,
  },
  {
    id: '2',
    degree: 'Bertelsmann Next Generation Tech Booster Scholarship',
    institution: 'Udacity',
    startDate: new Date('2023-12-01'),
    endDate: new Date('2024-02-28'),
    description:
      'Completed an intensive 2-month AI Programming with Python challenge. This competitive scholarship program was designed to identify top talent for advanced AI and machine learning education.',
    achievements: [
      'Successfully completed the challenge phase of the prestigious Bertelsmann scholarship program',
      'Gained foundational knowledge in artificial intelligence and machine learning concepts',
      'Demonstrated excellence in Python programming for AI applications',
      'Earned recognition through completion and recipient badges',
    ],
    skills: ['Artificial Intelligence (AI)', 'Linear Algebra', 'Python'],
    certificates: [
      {
        title: 'Challenge Completion Badge',
        description:
          'Awarded for successfully completing the 2-month challenge',
        badgeColor: 'green',
        imageUrl: '/certificates/Challenge-Completion-Badge.jpg',
      },
      {
        title: 'Challenge Recipient Badge',
        description: 'Awarded for being selected for the scholarship program',
        badgeColor: 'blue',
        imageUrl: '/certificates/Challenge-Recipient-Badge.png',
      },
    ],
    featured: true,
  },
  {
    id: '3',
    degree: 'Founder Academy',
    institution: 'ALX Ventures',
    startDate: new Date('2023-02-01'),
    endDate: new Date('2023-05-31'),
    description:
      'Completed comprehensive entrepreneurship program focused on building startups from conception to market. Gained fundamental knowledge in business development, product strategy, and customer acquisition.',
    achievements: [
      'Mastered the entrepreneurial mindset and startup methodology',
      'Learned end-to-end product development from idea to customer sales',
      'Gained practical experience in business strategy and market analysis',
      'Developed skills in customer validation and product-market fit',
    ],
    skills: [
      'Entrepreneurship',
      'Business Strategy',
      'Product Development',
      'Market Analysis',
    ],
    certificates: [
      {
        title: 'Founder Academy Completion Certificate',
        description:
          'Certificate of completion for the entrepreneurship program',
        badgeColor: 'purple',
        imageUrl: '/certificates/Founder-Academy-Completion-Certificate.jpg',
      },
    ],
  },
  {
    id: '4',
    degree: 'Advanced Full-Stack Web Development Nanodegree',
    institution: 'Udacity (Sponsored by MCIT)',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-02-28'),
    description:
      'Advanced full-stack development program focusing on modern web technologies and industry best practices. Sponsored by the Ministry of Communications and Information Technology, preparing students for professional software development roles.',
    achievements: [
      'Earned Top Graduate Badge for exceptional performance among peers',
      'Mastered advanced full-stack development concepts and practices',
      'Gained expertise in modern CI/CD practices and deployment strategies',
      'Developed proficiency in test-driven development and quality assurance',
    ],
    skills: [
      'API Development',
      'Node.js',
      'Test-Driven Development',
      'Linux',
      'Jasmine Framework',
      'TypeScript',
      'Shell Scripting',
      'Express.js',
      'Agile Methodologies',
      'Continuous Integration and Continuous Delivery (CI/CD)',
      'CircleCI',
      'Bash',
      'SQL',
      'Amazon Web Services (AWS)',
      'PostgreSQL',
    ],
    certificates: [
      {
        title: 'Top Graduate Badge',
        description: 'Awarded for excellence among peers in the program',
        badgeColor: 'gold',
        imageUrl: '/certificates/Top-Graduate-Badge.jpg',
      },
      {
        title: 'Advanced Full-Stack Web Development Completion Certificate',
        description:
          'Certificate of completion for the advanced nanodegree program',
        badgeColor: 'primary',
        imageUrl:
          '/certificates/Advanced-Full-Stack-Web-Development-Completion-Certificate.jpg',
      },
    ],
    featured: true,
  },
  {
    id: '5',
    degree: 'Full Stack Software Engineer',
    institution: 'University of Helsinki',
    startDate: new Date('2020-09-01'),
    endDate: new Date('2020-12-31'),
    grade: '8 ECTS with grade 5',
    description:
      'Completed the renowned Full Stack Open MOOC 2020, considered one of the best comprehensive web development courses globally. This intensive program provided deep expertise in modern full-stack development with hands-on projects.',
    achievements: [
      'Completed the prestigious Full Stack Open MOOC with highest grade (5/5)',
      'Gained comprehensive expertise in the MERN stack and modern web development',
      'Developed multiple production-grade full-stack applications',
      'Mastered advanced concepts including microservices, testing, and CI/CD',
      'Became part of one of the most supportive and skilled developer communities',
    ],
    skills: [
      'Bootstrap',
      'API Development',
      'Jest',
      'REST APIs',
      'Node.js',
      'Heroku',
      'Full-Stack Development',
      'Github Actions',
      'Material-UI',
      'Web Development',
      'Cypress.io',
      'Netlify',
      'Express.js',
      'CSS',
      'MERN Stack',
      'CI/CD',
      'Webpack',
      'ESLint',
      'styled-components',
      'End-to-end Testing',
      'MongoDB',
      'Software Development',
      'React.js',
      'Computer Science',
      'Redux.js',
      'Integration Testing',
      'GraphQL',
      'bcrypt',
      'Unit Testing',
      'JSON Web Token (JWT)',
    ],
    certificates: [
      {
        title: 'Full Stack Open MOOC Completion Certificate',
        description:
          'Certificate of completion for the comprehensive full-stack program',
        badgeColor: 'primary',
        imageUrl:
          '/certificates/Full-Stack-Open-MOOC-Completion-Certificate.png',
      },
      {
        title: 'Full Stack Open CI/CD Part Completion Certificate',
        description: 'Specialized certificate for CI/CD module completion',
        badgeColor: 'green',
        imageUrl:
          '/certificates/Full-Stack-Open-CI-CD-Part-Completion-Certificate.png',
      },
    ],
    featured: true,
  },
  {
    id: '6',
    degree: 'Elements of AI',
    institution: 'University of Helsinki',
    startDate: new Date('2020-12-01'),
    endDate: new Date('2021-01-31'),
    grade: '2 ECTS',
    description:
      'Foundational course in artificial intelligence concepts and applications. This comprehensive introduction to AI provided insights into machine learning, neural networks, and the potential of AI technologies.',
    achievements: [
      'Gained comprehensive understanding of AI fundamentals and applications',
      'Explored the potential and limitations of artificial intelligence',
      'Developed appreciation for ethical considerations in AI development',
    ],
    skills: [
      'Artificial Intelligence (AI)',
      'Machine Learning Concepts',
      'AI Ethics',
    ],
    certificates: [
      {
        title: 'Elements of AI Completion Certificate',
        description: 'Certificate of completion for the AI fundamentals course',
        badgeColor: 'blue',
        imageUrl: '/certificates/Elements-of-AI-Completion-Certificate.png',
      },
    ],
  },
  {
    id: '7',
    degree: 'Bachelor of Laws (LLB)',
    institution: 'Zagazig University',
    location: 'Zagazig, Egypt',
    startDate: new Date('2018-09-01'),
    endDate: new Date('2022-07-31'),
    grade: 'Good',
    description:
      'Completed comprehensive legal education covering various aspects of law, legal theory, and jurisprudence. This diverse academic background provides unique analytical and critical thinking skills that complement technical expertise.',
    achievements: [
      'Developed strong analytical and critical thinking skills',
      'Gained expertise in legal research and documentation',
      'Mastered complex problem-solving and argumentation techniques',
      'Built foundation in regulatory compliance and legal frameworks',
    ],
    skills: [
      'Legal Research',
      'Critical Thinking',
      'Analytical Skills',
      'Legal Writing',
      'Regulatory Compliance',
    ],
    certificates: [
      {
        title: 'Bachelor of Laws (LLB) Graduation Certificate',
        description:
          'Graduation certificate from Faculty of Law - Zagazig University',
        badgeColor: 'primary',
        // imageUrl: '/certificates/bachelor-of-laws-degree.svg',
      },
    ],
  },
  {
    id: '8',
    degree: 'English Diploma',
    institution: 'Edmore University (American Culture Center)',
    startDate: new Date('2017-11-01'),
    endDate: new Date('2018-03-31'),
    grade: '97%',
    description:
      'Intensive English language program focusing on advanced communication skills, cultural understanding, and professional English usage. Achieved exceptional performance with 97% grade.',
    achievements: [
      'Achieved outstanding 97% grade demonstrating English language mastery',
      'Developed proficiency in both American and British English accents and conventions',
      'Gained advanced translation skills between Arabic and English',
      'Participated actively in discussions, role-playing, and practical communication exercises',
    ],
    skills: [
      'English as a Second Language (ESL)',
      'Professional Communication',
      'Translation',
      'Cross-cultural Communication',
    ],
    certificates: [
      {
        title: 'English Diploma Completion Certificate',
        description: 'Certificate with 97% grade from American Culture Center',
        badgeColor: 'gold',
        imageUrl:
          '/certificates/English-Diploma-Final-Exam-Completion-Certificate.jpg',
      },
      {
        title: 'English Diploma Final Exam Completion Certificate',
        description: 'Certificate for final exam completion',
        badgeColor: 'green',
        imageUrl: '/certificates/English-Diploma-Completion-Certificate.jpg',
      },
    ],
  },
];
