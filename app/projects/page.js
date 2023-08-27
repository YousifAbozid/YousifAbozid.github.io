import Link from 'next/link'
import ProjectsArray from '@/components/Projects'

export default function Projects() {
  return (
    <div className="projects_container">
      <div className="projects">
        {ProjectsArray.map((project) => (
          <div className="project" key={project.name}>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="tools">
              {project.tools.map((tool) => (
                <div>{tool}</div>
              ))}
            </div>
            {project.live ? (
              <>
                <Link href={project.live}>Live Version</Link>
                <Link href={project.source}>Source Code</Link>
              </>
            ) : (
              <Link href={project.source}>Source Code</Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
