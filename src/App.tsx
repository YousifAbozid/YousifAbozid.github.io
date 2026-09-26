import { lazy, Suspense, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeProvider';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';

const Certificates = lazy(() => import('./components/sections/Certificates'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || '0';
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, parseInt(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-l-bg-1 dark:bg-d-bg-1 text-l-text-1 dark:text-d-text-1 overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Suspense fallback={<div className="h-100">Loading...</div>}>
            <Certificates />
          </Suspense>
          <Suspense fallback={<div className="h-50">Loading...</div>}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div className="h-50">Loading...</div>}>
            <Projects />
          </Suspense>
          <Suspense fallback={<div className="h-100">Loading...</div>}>
            <Testimonials />
          </Suspense>
          <Suspense fallback={<div className="h-50">Loading...</div>}>
            <Contact />
          </Suspense>
          <Suspense fallback={<div className="h-25">Loading...</div>}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
