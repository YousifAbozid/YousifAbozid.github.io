import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function calculateYearsOfExperience(startDate: Date): number {
  const now = new Date();
  const diff = now.getTime() - startDate.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), wait);
    }
  };
}

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export function getRandomDelay(min = 0, max = 800): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Professional email template generator
export function createEmailLink(
  type:
    | 'general'
    | 'collaboration'
    | 'inquiry'
    | 'project'
    | 'experience'
    | 'simple' = 'simple',
  email: string = 'yousif.abozid@yahoo.com'
): string {
  const baseUrl = `mailto:${email}`;

  const templates = {
    general: {
      subject: "Let's Connect - Portfolio Inquiry",
      body: `Hi Yousif,

I came across your portfolio and would love to connect.

Best regards`,
    },
    collaboration: {
      subject: 'Project Collaboration Opportunity',
      body: `Hi Yousif,

I reviewed your portfolio and would like to discuss a potential collaboration opportunity.

Project Details:
- 

Looking forward to hearing from you!

Best regards`,
    },
    inquiry: {
      subject: 'Professional Inquiry - Experience Discussion',
      body: `Hi Yousif,

I'm interested in learning more about your professional experience and background.

I'd like to discuss:
- 

Looking forward to your response.

Best regards`,
    },
    project: {
      subject: 'New Project Opportunity',
      body: `Hi Yousif,

I have an exciting project opportunity and would love to discuss it with you.

Project Overview:
- 
- 
- 

Timeline: 
Budget Range: 

When would be a good time to discuss this further?

Best regards`,
    },
    experience: {
      subject: 'Experience & Background Discussion',
      body: `Hi Yousif,

I'm impressed by your experience and would like to learn more about your background.

Specifically interested in:
- 

Looking forward to connecting.

Best regards`,
    },
    simple: {
      subject: '',
      body: '',
    },
  };

  const template = templates[type];

  if (type === 'simple') {
    return baseUrl;
  }

  const encodedSubject = encodeURIComponent(template.subject);
  const encodedBody = encodeURIComponent(template.body);

  return `${baseUrl}?subject=${encodedSubject}&body=${encodedBody}`;
}

export function isElementInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
