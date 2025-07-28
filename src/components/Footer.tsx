import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { smoothScrollTo, cn, createEmailLink } from '../lib/utils';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  'Frontend Development',
  'Backend Development',
  'Full Stack Solutions',
  'Web Performance',
  'UI/UX Implementation',
  'Technical Consulting',
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    const sectionId = href.slice(1);
    smoothScrollTo(sectionId);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-l-bg-1 dark:bg-d-bg-1 border-t border-border-l dark:border-border-d">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="font-heading text-2xl font-bold text-gradient mb-4">
              &lt;Yousif /&gt;
            </div>
            <p className="text-l-text-2 dark:text-d-text-2 mb-6 leading-relaxed">
              Full Stack Software Engineer passionate about creating scalable,
              user-focused web applications with modern technologies.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-l-bg-2 dark:bg-d-bg-2 hover:bg-l-bg-3 dark:hover:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-l-bg-2 dark:bg-d-bg-2 hover:bg-l-bg-3 dark:hover:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={createEmailLink('general')}
                className="p-3 rounded-lg bg-l-bg-2 dark:bg-d-bg-2 hover:bg-l-bg-3 dark:hover:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-l-text-2 dark:text-d-text-2 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service}>
                  <span className="text-l-text-2 dark:text-d-text-2">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-l-text-3 dark:text-d-text-3 mb-1">
                  Email
                </div>
                <a
                  href={createEmailLink('general')}
                  className="text-l-text-2 dark:text-d-text-2 hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <div className="text-sm text-l-text-3 dark:text-d-text-3 mb-1">
                  Phone
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-l-text-2 dark:text-d-text-2 hover:text-primary transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <div className="text-sm text-l-text-3 dark:text-d-text-3 mb-1">
                  Location
                </div>
                <span className="text-l-text-2 dark:text-d-text-2">
                  {personalInfo.location}
                </span>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <div className="w-2 h-2 bg-accent-success rounded-full animate-pulse"></div>
                <span className="text-accent-success text-sm font-medium">
                  Available for hire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-l dark:border-border-d">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-l-text-3 dark:text-d-text-3 text-sm">
                © {new Date().getFullYear()} {personalInfo.name}. All rights
                reserved.
              </p>
              <p className="text-l-text-3 dark:text-d-text-3 text-sm flex items-center justify-center md:justify-start mt-1">
                Made with{' '}
                <Heart
                  className="w-4 h-4 text-red-500 mx-1"
                  fill="currentColor"
                />{' '}
                and lots of coffee
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-l-text-3 dark:text-d-text-3 text-sm">
                Built with React, TypeScript & Tailwind CSS
              </div>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className={cn(
                  'p-2 rounded-lg transition-colors cursor-pointer',
                  'bg-l-bg-2 dark:bg-d-bg-2',
                  'hover:bg-l-bg-3 dark:hover:bg-d-bg-3',
                  'text-l-text-2 dark:text-d-text-2 hover:text-primary'
                )}
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
