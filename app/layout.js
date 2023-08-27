import Header from '@/components/Header'
import '@/styles/globals.css'

export const metadata = {
  title: 'Yousif Abozid - Software Engineer',
  description: 'My portfolio app built with next.js',
}

/**
 * Renders the root layout of the application.
 *
 * @param {Object} children - The child components to be rendered.
 * @return {JSX.Element} The root layout component.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
