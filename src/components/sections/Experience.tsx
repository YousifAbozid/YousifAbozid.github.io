import {
  Calendar,
  MapPin,
  ExternalLink,
  Mail,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from '../../hooks/useScrollAnimation';
import { experiences } from '../../data/portfolio';
import { formatDate } from '../../lib/utils';
import { cn, createEmailLink } from '../../lib/utils';

export default function Experience() {
  const titleRef = useScrollAnimation({ delay: 200 });
  const [expandedAchievements, setExpandedAchievements] = useState<Set<string>>(
    new Set()
  );
  const [expandedTechnologies, setExpandedTechnologies] = useState<Set<string>>(
    new Set()
  );

  useStaggeredAnimation('[data-experience-item]', 200);

  const formatDateRange = (startDate: Date, endDate?: Date) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} - ${end}`;
  };

  const toggleAchievements = (expId: string) => {
    const newExpanded = new Set(expandedAchievements);
    if (newExpanded.has(expId)) {
      newExpanded.delete(expId);
    } else {
      newExpanded.add(expId);
    }
    setExpandedAchievements(newExpanded);
  };

  const toggleTechnologies = (expId: string) => {
    const newExpanded = new Set(expandedTechnologies);
    if (newExpanded.has(expId)) {
      newExpanded.delete(expId);
    } else {
      newExpanded.add(expId);
    }
    setExpandedTechnologies(newExpanded);
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
                      'flex-1 ml-12 md:ml-0 max-w-none md:max-w-2xl lg:max-w-4xl',
                      index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'
                    )}
                  >
                    <div className="bg-l-bg-1 dark:bg-d-bg-1 p-6 md:p-8 rounded-lg border border-border-l dark:border-border-d shadow-lg hover:shadow-xl transition-shadow">
                      {/* Header - More Compact */}
                      <div className="mb-5">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-2">
                              {experience.title}
                            </h3>
                            <div className="flex items-center text-primary font-medium mb-2">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {experience.company}
                            </div>
                          </div>

                          {/* Date and Location - Compact */}
                          <div className="lg:text-right lg:ml-4">
                            <div className="flex items-center lg:justify-end text-l-text-3 dark:text-d-text-3 text-sm mb-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDateRange(
                                experience.startDate,
                                experience.endDate
                              )}
                            </div>
                            <div className="flex items-center lg:justify-end text-l-text-3 dark:text-d-text-3 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {experience.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-l-text-2 dark:text-d-text-2 leading-relaxed text-sm">
                          {experience.description}
                        </p>
                      </div>

                      {/* Main Content - Side by Side Layout */}
                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-3 text-sm">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {(expandedAchievements.has(experience.id)
                              ? experience.achievements
                              : experience.achievements.slice(0, 4)
                            ).map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start text-l-text-2 dark:text-d-text-2 leading-relaxed text-sm"
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                            {experience.achievements.length > 4 && (
                              <li>
                                <button
                                  onClick={() =>
                                    toggleAchievements(experience.id)
                                  }
                                  className="flex items-center text-primary hover:text-primary-dark text-xs font-medium mt-2 transition-colors"
                                >
                                  {expandedAchievements.has(experience.id) ? (
                                    <>
                                      <ChevronUp className="w-3 h-3 mr-1" />
                                      Show Less
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="w-3 h-3 mr-1" />
                                      Show {experience.achievements.length -
                                        4}{' '}
                                      More
                                    </>
                                  )}
                                </button>
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-3 text-sm">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {(expandedTechnologies.has(experience.id)
                              ? experience.technologies
                              : experience.technologies.slice(0, 8)
                            ).map(tech => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          {experience.technologies.length > 8 && (
                            <button
                              onClick={() => toggleTechnologies(experience.id)}
                              className="flex items-center text-primary hover:text-primary-dark text-xs font-medium mt-2 transition-colors"
                            >
                              {expandedTechnologies.has(experience.id) ? (
                                <>
                                  <ChevronUp className="w-3 h-3 mr-1" />
                                  Show Less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-3 h-3 mr-1" />
                                  Show {experience.technologies.length - 8} More
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Certificates/Badges Section - Placeholder for future */}
                      {/* This will be used for education section */}
                      {/* 
                      <div className="mt-4 pt-4 border-t border-border-l dark:border-border-d">
                        <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-3 text-sm">
                          Certificates & Achievements:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          // Certificate badges will go here
                        </div>
                      </div>
                      */}
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
