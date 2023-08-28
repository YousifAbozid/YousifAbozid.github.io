import Bio from '@/components/Bio'
import Footer from '@/components/Footer'
import ProjectsSection from '@/components/ProjectsSection'

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <div className="container">
      <Bio />
      <ProjectsSection />
      <Footer />
    </div>
  )
}
