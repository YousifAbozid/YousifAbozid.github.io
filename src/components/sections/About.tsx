import { Code, Server, Zap, Shield } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo, services } from '../../data/portfolio';
import { cn, createEmailLink } from '../../lib/utils';

const iconMap = {
  Code,
  Server,
  Zap,
  Shield,
};

export default function About() {
  const titleRef = useScrollAnimation({ delay: 200 });
  const contentRef = useScrollAnimation({ delay: 400 });
  const servicesRef = useScrollAnimation({ delay: 600 });

  return (
    <section id="about" className="py-20 bg-l-bg-1 dark:bg-d-bg-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} data-animate="fade" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
            {/* Personal Info */}
            <div
              ref={contentRef}
              data-animate="slide-right"
              className="space-y-6"
            >
              <div className="space-y-4">
                {personalInfo.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg text-l-text-2 dark:text-d-text-2 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 pt-6">
                <div>
                  <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-2">
                    Location
                  </h4>
                  <p className="text-l-text-2 dark:text-d-text-2">
                    {personalInfo.location}
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-2">
                    Experience
                  </h4>
                  <p className="text-l-text-2 dark:text-d-text-2">4+ Years</p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-2">
                    Email
                  </h4>
                  <a
                    href={createEmailLink('general')}
                    className="text-primary hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-2">
                    Availability
                  </h4>
                  <p className="text-accent-success">Available for hire</p>
                </div>
              </div>
            </div>

            {/* Stats or Image */}
            <div data-animate="slide-left" className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-l-bg-2 dark:bg-d-bg-2 p-6 rounded-lg border border-border-l dark:border-border-d">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-l-text-2 dark:text-d-text-2">
                    Projects Completed
                  </div>
                </div>
                <div className="bg-l-bg-2 dark:bg-d-bg-2 p-6 rounded-lg border border-border-l dark:border-border-d">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-l-text-2 dark:text-d-text-2">
                    Happy Clients
                  </div>
                </div>
                <div className="bg-l-bg-2 dark:bg-d-bg-2 p-6 rounded-lg border border-border-l dark:border-border-d">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    4+
                  </div>
                  <div className="text-l-text-2 dark:text-d-text-2">
                    Years Experience
                  </div>
                </div>
                <div className="bg-l-bg-2 dark:bg-d-bg-2 p-6 rounded-lg border border-border-l dark:border-border-d">
                  <div className="text-3xl font-heading font-bold text-primary mb-2">
                    24/7
                  </div>
                  <div className="text-l-text-2 dark:text-d-text-2">
                    Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div ref={servicesRef} data-animate="fade" className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
                What I Do
              </h3>
              <p className="text-lg text-l-text-2 dark:text-d-text-2 max-w-2xl mx-auto">
                I specialize in creating modern, scalable web applications with
                focus on performance, user experience, and maintainable code.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap];
                return (
                  <div
                    key={service.title}
                    data-animate="scale"
                    data-delay={index * 100}
                    className={cn(
                      'group p-6 rounded-lg border border-border-l dark:border-border-d',
                      'bg-l-bg-2 dark:bg-d-bg-2',
                      'hover:bg-l-bg-3 dark:hover:bg-d-bg-3',
                      'hover:border-primary/50',
                      'transition-all duration-300',
                      'hover:shadow-lg hover:shadow-primary/10'
                    )}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-l-text-2 dark:text-d-text-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
