import Link from 'next/link'
import ProjectsArray from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <div className="projects_container">
      <div className="projects">
        <h1>My Projects: Total of {ProjectsArray.length} projects</h1>
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
      <Footer />
    </div>
  )
}
