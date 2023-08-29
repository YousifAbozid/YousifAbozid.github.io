import AllProjects from '@/components/projects/AllProjects'
import Footer from '@/components/Footer'

/**
 * Renders a list of projects.
 *
 * @return {JSX.Element} - The JSX element representing the list of projects.
 */
export default function Projects() {
  return (
    <div className="projects_container">
      <AllProjects />
      <Footer />
    </div>
  )
}
