import { useState } from 'react';
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from '../../hooks/useScrollAnimation';
import { skills } from '../../data/portfolio';
import { cn } from '../../lib/utils';

type SkillCategory = 'frontend' | 'backend' | 'devops' | 'soft';

const categories = [
  { id: 'frontend' as SkillCategory, label: 'Frontend', icon: '🎨' },
  { id: 'backend' as SkillCategory, label: 'Backend', icon: '⚙️' },
  { id: 'devops' as SkillCategory, label: 'DevOps & Tools', icon: '🛠️' },
  { id: 'soft' as SkillCategory, label: 'Soft Skills', icon: '🧠' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategory>('frontend');
  const titleRef = useScrollAnimation({ delay: 200 });
  const tabsRef = useScrollAnimation({ delay: 400 });

  useStaggeredAnimation('[data-skill-item]', 100);

  const filteredSkills = skills.filter(
    skill => skill.category === activeCategory
  );

  const getSkillLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 75) return 'bg-blue-500';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <section id="skills" className="py-20 bg-l-bg-1 dark:bg-d-bg-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} data-animate="fade" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional
              competencies.
            </p>
          </div>

          {/* Category Tabs */}
          <div ref={tabsRef} data-animate="slide-up" className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all cursor-pointer',
                    'border border-border-l dark:border-border-d',
                    activeCategory === category.id
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                      : 'bg-l-bg-2 dark:bg-d-bg-2 text-l-text-2 dark:text-d-text-2 hover:bg-l-bg-3 dark:hover:bg-d-bg-3 hover:border-primary/50'
                  )}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                data-skill-item
                className="bg-l-bg-2 dark:bg-d-bg-2 p-6 rounded-lg border border-border-l dark:border-border-d hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-semibold text-l-text-1 dark:text-d-text-1">
                    {skill.name}
                  </h3>
                  <span
                    className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium text-white',
                      getSkillLevelColor(skill.level)
                    )}
                  >
                    {getSkillLevelLabel(skill.level)}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-l-text-2 dark:text-d-text-2">
                      Proficiency
                    </span>
                    <span className="text-l-text-1 dark:text-d-text-1 font-medium">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative h-2 bg-l-bg-3 dark:bg-d-bg-3 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Experience Indicator */}
                <div className="mt-4 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          'w-2 h-2 rounded-full',
                          i < Math.floor(skill.level / 20)
                            ? 'bg-primary'
                            : 'bg-l-bg-3 dark:bg-d-bg-3'
                        )}
                      ></div>
                    ))}
                  </div>
                  <span className="text-xs text-l-text-3 dark:text-d-text-3">
                    Experience Level
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 pt-8 border-t border-border-l dark:border-border-d">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {skills.filter(s => s.category === 'frontend').length}
                </div>
                <div className="text-l-text-2 dark:text-d-text-2">
                  Frontend Skills
                </div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {skills.filter(s => s.category === 'backend').length}
                </div>
                <div className="text-l-text-2 dark:text-d-text-2">
                  Backend Skills
                </div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {skills.filter(s => s.category === 'devops').length}
                </div>
                <div className="text-l-text-2 dark:text-d-text-2">
                  DevOps Tools
                </div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  {Math.round(
                    skills.reduce((acc, skill) => acc + skill.level, 0) /
                      skills.length
                  )}
                  %
                </div>
                <div className="text-l-text-2 dark:text-d-text-2">
                  Average Proficiency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
