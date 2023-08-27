'use client'
import Link from 'next/link'
import React from 'react'

/**
 * Renders the Footer component.
 *
 * @return {JSX.Element} The Footer component.
 */
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src="coding.svg" alt="Coding" />
      </div>
      <div className="middle">
        <div className="text">
          Made with ♥️ by <Link href="https://github.com/YousifAbozid">Me</Link> Source Code on
        </div>
        <div className="github">
          <Link href="https://github.com/YousifAbozid/YousifAbozid.github.io">
            <img src="github.svg" alt="GitHub" />
          </Link>
        </div>
      </div>
      <div className="scroll">
        <img src="up.svg" alt="Go Up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </div>
    </div>
  )
}

export default Footer
