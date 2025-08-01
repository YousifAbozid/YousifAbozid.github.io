import {
  Calendar,
  MapPin,
  ExternalLink,
  Mail,
  Award,
  Star,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from '../../hooks/useScrollAnimation';
import { education } from '../../data/portfolio';
import { formatDate } from '../../lib/utils';
import { cn, createEmailLink } from '../../lib/utils';

export default function Education() {
  const titleRef = useScrollAnimation({ delay: 200 });
  const [expandedAchievements, setExpandedAchievements] = useState<Set<string>>(
    new Set()
  );
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(new Set());

  useStaggeredAnimation('[data-education-item]', 200);

  const formatDateRange = (startDate: Date, endDate?: Date) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : 'Present';
    return `${start} - ${end}`;
  };

  const toggleAchievements = (eduId: string) => {
    const newExpanded = new Set(expandedAchievements);
    if (newExpanded.has(eduId)) {
      newExpanded.delete(eduId);
    } else {
      newExpanded.add(eduId);
    }
    setExpandedAchievements(newExpanded);
  };

  const toggleSkills = (eduId: string) => {
    const newExpanded = new Set(expandedSkills);
    if (newExpanded.has(eduId)) {
      newExpanded.delete(eduId);
    } else {
      newExpanded.add(eduId);
    }
    setExpandedSkills(newExpanded);
  };

  const getBadgeColor = (color?: string) => {
    switch (color) {
      case 'gold':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700';
      case 'green':
        return 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700';
      case 'blue':
        return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700';
      case 'purple':
        return 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700';
      case 'primary':
      default:
        return 'bg-primary/10 text-primary border-primary/30';
    }
  };

  return (
    <section id="education" className="py-20 bg-l-bg-1 dark:bg-d-bg-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} data-animate="fade" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              Education & Learning Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mt-6 max-w-3xl mx-auto">
              My continuous learning journey through prestigious programs, elite
              scholarships, and comprehensive certifications that shaped my
              expertise.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-l dark:bg-border-d transform md:-translate-x-0.5"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  data-education-item
                  className={cn(
                    'relative flex flex-col md:flex-row',
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  )}
                >
                  {/* Timeline Dot */}
                  <div
                    className={cn(
                      'absolute left-4 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 border-4 border-l-bg-1 dark:border-d-bg-1 z-10',
                      edu.featured ? 'bg-gradient-primary' : 'bg-primary'
                    )}
                  ></div>

                  {/* Content */}
                  <div
                    className={cn(
                      'flex-1 ml-12 md:ml-0 max-w-none md:max-w-2xl lg:max-w-4xl',
                      index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'
                    )}
                  >
                    <div
                      className={cn(
                        'bg-l-bg-2 dark:bg-d-bg-2 p-6 md:p-8 rounded-lg border border-border-l dark:border-border-d shadow-lg hover:shadow-xl transition-shadow relative',
                        edu.featured &&
                          'ring-2 ring-primary/20 border-primary/30'
                      )}
                    >
                      {/* Featured Badge */}
                      {edu.featured && (
                        <div className="absolute top-0 right-0 z-10">
                          <div className="bg-gradient-primary text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-medium shadow-lg">
                            <Star className="w-3 h-3 inline mr-1" />
                            Featured
                          </div>
                        </div>
                      )}

                      {/* Header - More Compact */}
                      <div className="mb-5">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-2">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center text-primary font-medium mb-2">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {edu.institution}
                            </div>
                            {edu.grade && (
                              <div className="flex items-center text-l-text-2 dark:text-d-text-2 text-sm mb-2">
                                <Award className="w-4 h-4 mr-2" />
                                Grade: {edu.grade}
                              </div>
                            )}
                          </div>

                          {/* Date and Location - Compact */}
                          <div className="lg:text-right lg:ml-4">
                            <div className="flex items-center lg:justify-end text-l-text-3 dark:text-d-text-3 text-sm mb-1">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDateRange(edu.startDate, edu.endDate)}
                            </div>
                            {edu.location && (
                              <div className="flex items-center lg:justify-end text-l-text-3 dark:text-d-text-3 text-sm">
                                <MapPin className="w-4 h-4 mr-1" />
                                {edu.location}
                              </div>
                            )}
                          </div>
                        </div>

                        <p className="text-l-text-2 dark:text-d-text-2 leading-relaxed text-sm">
                          {edu.description}
                        </p>
                      </div>

                      {/* Main Content - Side by Side Layout */}
                      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-3 text-sm">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {(expandedAchievements.has(edu.id)
                              ? edu.achievements
                              : edu.achievements.slice(0, 4)
                            ).map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="flex items-start text-l-text-2 dark:text-d-text-2 leading-relaxed text-sm"
                              >
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                {achievement}
                              </li>
                            ))}
                            {edu.achievements.length > 4 && (
                              <li>
                                <button
                                  onClick={() => toggleAchievements(edu.id)}
                                  className="flex items-center text-primary hover:text-primary-dark text-xs font-medium mt-2 transition-colors cursor-pointer"
                                >
                                  {expandedAchievements.has(edu.id) ? (
                                    <>
                                      <ChevronUp className="w-3 h-3 mr-1" />
                                      Show Less
                                    </>
                                  ) : (
                                    <>
                                      <ChevronDown className="w-3 h-3 mr-1" />
                                      Show {edu.achievements.length - 4} More
                                    </>
                                  )}
                                </button>
                              </li>
                            )}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-3 text-sm">
                            Skills Acquired:
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {(expandedSkills.has(edu.id)
                              ? edu.skills
                              : edu.skills.slice(0, 8)
                            ).map(skill => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          {edu.skills.length > 8 && (
                            <button
                              onClick={() => toggleSkills(edu.id)}
                              className="flex items-center text-primary hover:text-primary-dark text-xs font-medium mt-2 transition-colors cursor-pointer"
                            >
                              {expandedSkills.has(edu.id) ? (
                                <>
                                  <ChevronUp className="w-3 h-3 mr-1" />
                                  Show Less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="w-3 h-3 mr-1" />
                                  Show {edu.skills.length - 8} More Skills
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Certificates & Badges Section */}
                      {edu.certificates && edu.certificates.length > 0 && (
                        <div className="mt-6 pt-4 border-t border-border-l dark:border-border-d">
                          <h4 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 mb-3 text-sm">
                            Certificates & Achievements:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.certificates.map((cert, certIndex) => (
                              <div
                                key={certIndex}
                                className={cn(
                                  'inline-flex items-center px-3 py-2 rounded-lg border text-xs font-medium',
                                  getBadgeColor(cert.badgeColor)
                                )}
                                title={cert.description}
                              >
                                <Award className="w-3 h-3 mr-1.5" />
                                {cert.title}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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
              Interested in my educational background and certifications?
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
                href={createEmailLink('education')}
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-colors cursor-pointer inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Discuss Education
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
