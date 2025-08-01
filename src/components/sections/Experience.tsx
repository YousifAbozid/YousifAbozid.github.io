import { Calendar, MapPin, ExternalLink, Mail } from 'lucide-react';
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from '../../hooks/useScrollAnimation';
import { experiences } from '../../data/portfolio';
import { formatDate } from '../../lib/utils';
import { cn, createEmailLink } from '../../lib/utils';

export default function Experience() {
  const titleRef = useScrollAnimation({ delay: 200 });

  useStaggeredAnimation('[data-experience-item]', 200);

  const formatDateRange = (startDate: Date, endDate?: Date) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} - ${end}`;
  };

  return (
    <section id="experience" className="py-20 bg-l-bg-2 dark:bg-d-bg-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} data-animate="fade" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mt-6 max-w-3xl mx-auto">
              My journey as a software engineer, building scalable applications
              and leading development teams.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-l dark:bg-border-d transform md:-translate-x-0.5"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  data-experience-item
                  className={cn(
                    'relative flex flex-col md:flex-row',
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5 md:-translate-x-1.5 border-4 border-l-bg-2 dark:border-d-bg-2 z-10"></div>

                  {/* Content */}
                  <div
                    className={cn(
                      'flex-1 ml-12 md:ml-0 max-w-none md:max-w-2xl lg:max-w-3xl',
                      index % 2 === 0
                        ? 'md:pr-12 lg:pr-16'
                        : 'md:pl-12 lg:pl-16'
                    )}
                  >
                    <div className="bg-l-bg-1 dark:bg-d-bg-1 p-8 md:p-10 rounded-lg border border-border-l dark:border-border-d shadow-lg hover:shadow-xl transition-shadow">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-xl md:text-2xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-3">
                          {experience.title}
                        </h3>

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div className="flex items-center text-primary font-medium mb-2 lg:mb-0">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {experience.company}
                          </div>

                          <div className="flex items-center text-l-text-3 dark:text-d-text-3 text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {experience.location}
                          </div>
                        </div>

                        <div className="flex items-center text-l-text-3 dark:text-d-text-3 text-sm mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          {formatDateRange(
                            experience.startDate,
                            experience.endDate
                          )}
                        </div>

                        <p className="text-l-text-2 dark:text-d-text-2 leading-relaxed text-base">
                          {experience.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-4">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-3">
                          {experience.achievements.map(
                            (achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start text-l-text-2 dark:text-d-text-2 leading-relaxed"
                              >
                                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-4">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map(tech => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 pt-8 border-t border-border-l dark:border-border-d">
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mb-6">
              Want to know more about my experience?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Yousif_Abozid_Resume.pdf"
                download="Yousif_Abozid_Resume.pdf"
                className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center justify-center"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Download Full Resume
              </a>
              <a
                href={createEmailLink('experience')}
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Discuss Experience
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
