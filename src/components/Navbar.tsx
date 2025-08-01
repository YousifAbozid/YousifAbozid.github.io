import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeProvider';
import { cn, smoothScrollTo } from '../lib/utils';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigation.map(nav => nav.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.slice(1);
    smoothScrollTo(sectionId);
    setIsOpen(false);
  };

  const ThemeIcon = theme === 'dark' ? Sun : theme === 'light' ? Moon : Monitor;

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-l-bg-1/80 dark:bg-d-bg-1/80 backdrop-blur-md border-b border-border-l dark:border-border-d shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div
            className="font-heading text-xl md:text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => handleNavClick('#home')}
          >
            &lt;Yousif /&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary cursor-pointer',
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-l-text-2 dark:text-d-text-2'
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={cycleTheme}
              className={cn(
                'p-2 rounded-lg transition-colors cursor-pointer',
                'bg-l-bg-2 dark:bg-d-bg-2',
                'hover:bg-l-bg-3 dark:hover:bg-d-bg-3',
                'text-l-text-1 dark:text-d-text-1'
              )}
              aria-label="Toggle theme"
            >
              <ThemeIcon className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                'md:hidden p-2 rounded-lg transition-colors',
                'bg-l-bg-2 dark:bg-d-bg-2',
                'hover:bg-l-bg-3 dark:hover:bg-d-bg-3',
                'text-l-text-1 dark:text-d-text-1'
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 overflow-hidden',
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-l-bg-1/95 dark:bg-d-bg-1/95 backdrop-blur-md rounded-lg mt-2 border border-border-l dark:border-border-d">
            {navigation.map(item => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors',
                  activeSection === item.href.slice(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-l-text-2 dark:text-d-text-2 hover:text-primary hover:bg-l-bg-2 dark:hover:bg-d-bg-2'
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
