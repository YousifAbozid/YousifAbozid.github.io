import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from '../../hooks/useScrollAnimation';
import { projects } from '../../data/portfolio';
import { cn } from '../../lib/utils';

type ProjectFilter = 'all' | 'frontend' | 'backend' | 'fullstack';

const filters = [
  { id: 'all' as ProjectFilter, label: 'All Projects', count: projects.length },
  {
    id: 'frontend' as ProjectFilter,
    label: 'Frontend',
    count: projects.filter(p => p.category === 'frontend').length,
  },
  {
    id: 'backend' as ProjectFilter,
    label: 'Backend',
    count: projects.filter(p => p.category === 'backend').length,
  },
  {
    id: 'fullstack' as ProjectFilter,
    label: 'Full Stack',
    count: projects.filter(p => p.category === 'fullstack').length,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const titleRef = useScrollAnimation({ delay: 200 });
  const filtersRef = useScrollAnimation({ delay: 400 });

  useStaggeredAnimation('[data-project-item]', 150);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-l-bg-2 dark:bg-d-bg-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} data-animate="fade" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mt-6 max-w-2xl mx-auto">
              A showcase of my recent work, from complex full-stack applications
              to elegant frontend solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            ref={filtersRef}
            data-animate="slide-up"
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  'flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all cursor-pointer',
                  'border border-border-l dark:border-border-d',
                  activeFilter === filter.id
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                    : 'bg-l-bg-1 dark:bg-d-bg-1 text-l-text-2 dark:text-d-text-2 hover:bg-l-bg-3 dark:hover:bg-d-bg-3 hover:border-primary/50'
                )}
              >
                <span>{filter.label}</span>
                <span
                  className={cn(
                    'px-2 py-1 rounded-full text-xs',
                    activeFilter === filter.id
                      ? 'bg-white/20 text-white'
                      : 'bg-l-text-3/20 dark:bg-d-text-3/20 text-l-text-3 dark:text-d-text-3'
                  )}
                >
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                data-project-item
                className={cn(
                  'group relative bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border overflow-hidden hover:shadow-xl transition-all duration-300 hover:shadow-primary/10',
                  project.featured
                    ? 'border-primary/50 ring-2 ring-primary/20 hover:ring-primary/30'
                    : 'border-border-l dark:border-border-d'
                )}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-0 left-0 z-10">
                    <div className="bg-gradient-primary text-white px-3 py-1 rounded-br-lg text-xs font-medium shadow-lg">
                      Featured
                    </div>
                  </div>
                )}

                {/* Project Header */}
                <div
                  className={cn(
                    'relative p-6 border-b border-border-l dark:border-border-d',
                    project.featured
                      ? 'bg-gradient-to-br from-primary/10 to-primary-light/10'
                      : ''
                  )}
                >
                  <div className="flex items-start justify-between pt-4 mb-3">
                    <div>
                      <h3 className="text-lg font-heading font-bold text-l-text-1 dark:text-d-text-1">
                        {project.title}
                      </h3>
                      <span
                        className={cn(
                          'inline-block px-2 py-1 rounded-full text-xs font-medium mt-1',
                          project.category === 'frontend' &&
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
                          project.category === 'backend' &&
                            'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
                          project.category === 'fullstack' &&
                            'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                        )}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Action Links */}
                    <div className="flex space-x-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                          aria-label="View demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-l-text-3/10 dark:bg-d-text-3/10 rounded-lg text-l-text-2 dark:text-d-text-2 hover:bg-primary/10 hover:text-primary transition-colors"
                          aria-label="View source code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-l-text-2 dark:text-d-text-2 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Long Description for All Projects */}
                  {project.longDescription && (
                    <details className="mb-4 group">
                      <summary className="cursor-pointer text-primary hover:text-primary-dark text-sm font-medium mb-2 select-none">
                        Read more about this project...
                      </summary>
                      <p className="text-l-text-3 dark:text-d-text-3 text-sm leading-relaxed pl-4 border-l-2 border-primary/20">
                        {project.longDescription}
                      </p>
                    </details>
                  )}

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-l-text-1 dark:text-d-text-1 mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies
                        .slice(0, project.featured ? 8 : 6)
                        .map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-l-bg-3 dark:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 rounded text-xs border border-border-l dark:border-border-d"
                          >
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length >
                        (project.featured ? 8 : 6) && (
                        <span className="px-2 py-1 bg-l-bg-3 dark:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 rounded text-xs border border-border-l dark:border-border-d">
                          +
                          {project.technologies.length -
                            (project.featured ? 8 : 6)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex space-x-3 pt-3 border-t border-border-l dark:border-border-d">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-xs font-medium"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 px-3 py-2 border border-border-l dark:border-border-d text-l-text-2 dark:text-d-text-2 rounded-lg hover:border-primary hover:text-primary transition-colors text-xs font-medium"
                      >
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 pt-8 border-t border-border-l dark:border-border-d">
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mb-6">
              Interested in working together on a project?
            </p>
            <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer">
              Let&apos;s Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
