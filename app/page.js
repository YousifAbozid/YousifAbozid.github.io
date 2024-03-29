import BioSection from '@/components/home/BioSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import SkillsSection from '@/components/home/SkillsSection'

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <div className="container">
      <BioSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}
