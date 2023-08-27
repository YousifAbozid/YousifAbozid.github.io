import Bio from '@/components/Bio'
import Footer from '@/components/Footer'

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default function Home() {
  return (
    <div className="container">
      <Bio />
      <Footer />
    </div>
  )
}
