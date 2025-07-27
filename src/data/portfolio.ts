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
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    startDate: new Date('2022-01-01'),
    description:
      'Leading development of enterprise-scale web applications serving 100K+ users.',
    achievements: [
      'Architected and built scalable microservices reducing API response time by 40%',
      'Led a team of 5 developers in migrating legacy systems to modern React/Node.js stack',
      'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
      'Mentored junior developers and established code review best practices',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'AWS',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: new Date('2020-06-01'),
    endDate: new Date('2021-12-31'),
    description:
      'Developed MVP and scaling infrastructure for a fast-growing fintech startup.',
    achievements: [
      'Built the complete frontend application from scratch using React and TypeScript',
      'Designed and implemented RESTful APIs handling 10M+ requests per month',
      'Optimized database queries resulting in 60% performance improvement',
      'Collaborated with product team to deliver features that increased user retention by 25%',
    ],
    technologies: [
      'React',
      'JavaScript',
      'Express.js',
      'MongoDB',
      'Redis',
      'Stripe API',
    ],
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    location: 'New York, NY',
    startDate: new Date('2019-03-01'),
    endDate: new Date('2020-05-31'),
    description:
      'Created responsive web applications for diverse clients across various industries.',
    achievements: [
      'Delivered 15+ client projects with 100% on-time completion rate',
      'Improved website performance scores by average of 35% through optimization',
      'Implemented accessibility standards achieving WCAG 2.1 AA compliance',
      'Trained team on modern frontend best practices and tooling',
    ],
    technologies: ['React', 'Vue.js', 'SASS', 'Webpack', 'GraphQL', 'Figma'],
  },
  {
    id: '4',
    title: 'Junior Developer',
    company: 'WebDev Studio',
    location: 'Chicago, IL',
    startDate: new Date('2018-01-01'),
    endDate: new Date('2019-02-28'),
    description:
      'Started career building websites and learning modern development practices.',
    achievements: [
      'Contributed to 20+ WordPress and custom web projects',
      'Learned React, JavaScript ES6+, and modern development workflows',
      'Collaborated with designers to create pixel-perfect implementations',
      'Participated in code reviews and agile development processes',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'PHP', 'jQuery'],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Styled Components', level: 80, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 90, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'Redis', level: 75, category: 'backend' },
  { name: 'GraphQL', level: 80, category: 'backend' },
  { name: 'REST APIs', level: 90, category: 'backend' },

  // DevOps & Tools
  { name: 'Git', level: 90, category: 'devops' },
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'AWS', level: 75, category: 'devops' },
  { name: 'Kubernetes', level: 70, category: 'devops' },
  { name: 'CI/CD', level: 80, category: 'devops' },
  { name: 'Webpack', level: 75, category: 'devops' },
  { name: 'Vite', level: 85, category: 'devops' },

  // Soft Skills
  { name: 'Problem Solving', level: 95, category: 'soft' },
  { name: 'Team Leadership', level: 85, category: 'soft' },
  { name: 'Communication', level: 90, category: 'soft' },
  { name: 'Project Management', level: 80, category: 'soft' },
  { name: 'Code Review', level: 90, category: 'soft' },
  { name: 'Mentoring', level: 85, category: 'soft' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with real-time inventory and payment processing.',
    longDescription:
      'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, Stripe payment integration, admin dashboard, and responsive design. Handles 10K+ concurrent users with 99.9% uptime.',
    image: '/api/placeholder/600/400',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Stripe',
      'Redis',
      'Docker',
    ],
    category: 'fullstack',
    githubUrl: 'https://github.com/YousifAbozid/ecommerce-platform',
    demoUrl: 'https://ecommerce-demo.example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates and team features.',
    longDescription:
      'A modern task management application similar to Trello/Asana. Built with React, Express.js, and Socket.io for real-time collaboration. Features drag-and-drop interface, team workspaces, time tracking, and detailed analytics.',
    image: '/api/placeholder/600/400',
    technologies: [
      'React',
      'Socket.io',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
    ],
    category: 'fullstack',
    githubUrl: 'https://github.com/YousifAbozid/task-manager',
    demoUrl: 'https://taskmanager-demo.example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'Interactive weather application with location-based forecasts and historical data.',
    longDescription:
      'A beautiful weather dashboard that provides current conditions, 7-day forecasts, and historical weather data. Built with React and integrates multiple weather APIs. Features location search, favorites, and detailed weather maps.',
    image: '/api/placeholder/600/400',
    technologies: [
      'React',
      'JavaScript',
      'Chart.js',
      'Weather API',
      'Geolocation',
    ],
    category: 'frontend',
    githubUrl: 'https://github.com/YousifAbozid/weather-dashboard',
    demoUrl: 'https://weather-demo.example.com',
    featured: true,
  },
  {
    id: '4',
    title: 'Blog Platform API',
    description:
      'RESTful API for a blogging platform with authentication and content management.',
    longDescription:
      'A robust backend API for a blogging platform with user authentication, content management, comment system, and admin features. Built with Node.js, Express, and PostgreSQL with comprehensive testing suite.',
    image: '/api/placeholder/600/400',
    technologies: [
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JWT',
      'Jest',
      'Swagger',
    ],
    category: 'backend',
    githubUrl: 'https://github.com/YousifAbozid/blog-api',
    featured: false,
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description:
      'Responsive portfolio website with dark mode and smooth animations.',
    longDescription:
      'A modern portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode toggle, smooth scroll animations, contact form, and fully responsive design. Optimized for performance and accessibility.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    githubUrl: 'https://github.com/YousifAbozid/portfolio',
    demoUrl: 'https://yousifabozid.github.io',
    featured: false,
  },
  {
    id: '6',
    title: 'Real-time Chat App',
    description:
      'Modern chat application with file sharing and group conversations.',
    longDescription:
      'A real-time chat application with private messaging, group chats, file sharing, and emoji reactions. Built with React, Socket.io, and Node.js. Features message encryption, user presence indicators, and mobile-responsive design.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'CloudFront'],
    category: 'fullstack',
    githubUrl: 'https://github.com/YousifAbozid/chat-app',
    demoUrl: 'https://chat-demo.example.com',
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
