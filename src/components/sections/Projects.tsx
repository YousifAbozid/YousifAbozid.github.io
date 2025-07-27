import { useState } from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';
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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const titleRef = useScrollAnimation({ delay: 200 });
  const filtersRef = useScrollAnimation({ delay: 400 });

  useStaggeredAnimation('[data-project-item]', 150);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-l-bg-2 dark:bg-d-bg-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} data-animate="fade" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              Featured Projects
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

          {/* Featured Projects Grid */}
          {activeFilter === 'all' && (
            <div className="mb-16">
              <h3 className="text-2xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-8 text-center">
                🌟 Featured Work
              </h3>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredProjects.map(project => (
                  <div
                    key={project.id}
                    data-project-item
                    className="group relative bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d overflow-hidden hover:shadow-xl transition-all duration-300 hover:shadow-primary/10"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-primary overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl font-bold opacity-20">
                          {project.title.charAt(0)}
                        </div>
                      </div>

                      {/* Overlay */}
                      <div
                        className={cn(
                          'absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 transition-opacity',
                          hoveredProject === project.id
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      >
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                            aria-label="View demo"
                          >
                            <Eye className="w-5 h-5" />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                            aria-label="View source code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-heading font-bold text-l-text-1 dark:text-d-text-1">
                          {project.title}
                        </h3>
                        <span
                          className={cn(
                            'px-2 py-1 rounded-full text-xs font-medium',
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

                      <p className="text-l-text-2 dark:text-d-text-2 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-l-bg-3 dark:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-l-bg-3 dark:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 rounded text-xs">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex space-x-4">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Live Demo
                            </span>
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-l-text-2 dark:text-d-text-2 hover:text-primary transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              Source Code
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                data-project-item
                className="group bg-l-bg-1 dark:bg-d-bg-1 rounded-lg border border-border-l dark:border-border-d overflow-hidden hover:shadow-xl transition-all duration-300 hover:shadow-primary/10"
              >
                {/* Project Image */}
                <div className="relative h-40 bg-gradient-to-br from-primary/20 to-primary-light/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-primary text-4xl font-bold opacity-30">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-heading font-bold text-l-text-1 dark:text-d-text-1">
                      {project.title}
                    </h3>
                    <span
                      className={cn(
                        'px-2 py-1 rounded-full text-xs font-medium',
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

                  <p className="text-l-text-2 dark:text-d-text-2 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-l-bg-3 dark:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-l-bg-3 dark:bg-d-bg-3 text-l-text-2 dark:text-d-text-2 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex space-x-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-primary hover:text-primary-dark transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-l-text-2 dark:text-d-text-2 hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
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
