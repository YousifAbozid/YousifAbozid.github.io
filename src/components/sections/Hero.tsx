import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../data/portfolio';
import { cn } from '../../lib/utils';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = personalInfo.title;

  const heroRef = useScrollAnimation({ delay: 200 });
  const contentRef = useScrollAnimation({ delay: 400 });
  const buttonsRef = useScrollAnimation({ delay: 600 });

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-primary-light/20 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-dark/20 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div ref={heroRef} data-animate="slide-right" className="space-y-4">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-heading font-bold text-l-text-1 dark:text-d-text-1">
                Hi, I&apos;m{' '}
                <span className="text-gradient">
                  {personalInfo.name.split(' ')[0]}
                </span>
              </h1>

              <div className="h-16 md:h-20">
                <h2 className="text-2xl md:text-3xl xl:text-4xl font-heading font-semibold text-l-text-2 dark:text-d-text-2">
                  <span
                    className={cn(
                      'inline-block',
                      isTyping && 'border-r-2 border-primary animate-pulse'
                    )}
                  >
                    {typedText}
                  </span>
                </h2>
              </div>
            </div>

            <div
              ref={contentRef}
              data-animate="slide-right"
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-l-text-2 dark:text-d-text-2 max-w-2xl leading-relaxed">
                {personalInfo.subtitle}
              </p>

              <p className="text-base md:text-lg text-l-text-3 dark:text-d-text-3 max-w-2xl">
                {personalInfo.bio[0]}
              </p>
            </div>

            {/* Action Buttons */}
            <div
              ref={buttonsRef}
              data-animate="slide-right"
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity animate-pulse-glow cursor-pointer">
                <Mail className="inline-block w-5 h-5 mr-2" />
                Get In Touch
              </button>

              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer">
                <Download className="inline-block w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {[
                {
                  icon: Github,
                  href: personalInfo.social.github,
                  label: 'GitHub',
                },
                {
                  icon: Linkedin,
                  href: personalInfo.social.linkedin,
                  label: 'LinkedIn',
                },
                { icon: Mail, href: personalInfo.social.email, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-l-bg-2 dark:bg-d-bg-2 hover:bg-l-bg-3 dark:hover:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Decorative Element */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Code Animation */}
              <div className="absolute inset-0 bg-l-bg-2 dark:bg-d-bg-2 rounded-lg border border-border-l dark:border-border-d overflow-hidden">
                <div className="p-4">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>

                  <div className="font-mono text-sm space-y-2">
                    <div className="text-l-text-3 dark:text-d-text-3">
                      <span className="text-purple-500">const</span>{' '}
                      <span className="text-blue-500">developer</span> ={' '}
                      <span className="text-green-500">{`{`}</span>
                    </div>
                    <div className="pl-4 text-l-text-2 dark:text-d-text-2">
                      name:{' '}
                      <span className="text-green-500">
                        &apos;{personalInfo.name}&apos;
                      </span>
                      ,
                    </div>
                    <div className="pl-4 text-l-text-2 dark:text-d-text-2">
                      skills: [
                      <span className="text-green-500">&apos;React&apos;</span>,{' '}
                      <span className="text-green-500">
                        &apos;TypeScript&apos;
                      </span>
                      ,{' '}
                      <span className="text-green-500">
                        &apos;Node.js&apos;
                      </span>
                      ],
                    </div>
                    <div className="pl-4 text-l-text-2 dark:text-d-text-2">
                      hardWorker: <span className="text-orange-500">true</span>,
                    </div>
                    <div className="pl-4 text-l-text-2 dark:text-d-text-2">
                      problemSolver:{' '}
                      <span className="text-orange-500">true</span>,
                    </div>
                    <div className="pl-4 text-l-text-2 dark:text-d-text-2">
                      hireable:{' '}
                      <span className="text-orange-500">function</span>() {`{`}
                    </div>
                    <div className="pl-8 text-l-text-2 dark:text-d-text-2">
                      <span className="text-purple-500">return</span> (
                    </div>
                    <div className="pl-12 text-l-text-2 dark:text-d-text-2">
                      <span className="text-orange-500">this</span>.hardWorker
                      &&
                    </div>
                    <div className="pl-12 text-l-text-2 dark:text-d-text-2">
                      <span className="text-orange-500">this</span>
                      .problemSolver &&
                    </div>
                    <div className="pl-12 text-l-text-2 dark:text-d-text-2">
                      <span className="text-orange-500">this</span>
                      .skills.length {'>='}{' '}
                      <span className="text-blue-500">3</span>
                    </div>
                    <div className="pl-8 text-l-text-2 dark:text-d-text-2">
                      );{`}`}
                    </div>
                    <div className="pl-4 text-l-text-2 dark:text-d-text-2">{`}`}</div>
                    <div className="text-l-text-3 dark:text-d-text-3">
                      {`}`};
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-lg animate-float"></div>
              <div
                className="absolute top-1/2 -left-4 w-6 h-6 bg-primary-light rounded-full animate-float"
                style={{ animationDelay: '1s' }}
              ></div>
              <div
                className="absolute -bottom-4 right-1/4 w-4 h-4 bg-primary-dark rounded-full animate-float"
                style={{ animationDelay: '2s' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-l-text-3 dark:text-d-text-3 hover:text-primary transition-colors animate-bounce cursor-pointer"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
