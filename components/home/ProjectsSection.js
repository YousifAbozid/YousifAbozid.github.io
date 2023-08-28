import projectsArray from '@/projectsArray'
import Link from 'next/link'

const ProjectsSection = () => {
  return (
    <div className="projects_section">
      <p>
        My total projects is {projectsArray.length} projects, explore all of them at{' '}
        <Link href="/projects">Projects</Link> page.
      </p>
      {projectsArray.slice(0, 4).map((project) => (
        <div className="project_section" key={project.name}>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <div className="tools_section">
            {project.tools.map((tool) => (
              <div key={tool}>{tool}</div>
            ))}
          </div>
          {project.live ? (
            <>
              <Link href={project.live} target="_blank">
                Live Version
              </Link>
              <Link href={project.source} target="_blank">
                Source Code
              </Link>
            </>
          ) : (
            <Link href={project.source} target="_blank">
              Source Code
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProjectsSection
