import Header from '@/components/Header'
import '@/styles/globals.css'

export const metadata = {
  title: 'Yousif Abozid - Software Engineer',
  description: 'My portfolio app built with next.js',
}

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
