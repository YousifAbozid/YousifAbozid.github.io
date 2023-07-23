import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yousif Abozid - Software Engineer',
  description: 'My portfolio app built with next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/128/3242/3242257.png" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
