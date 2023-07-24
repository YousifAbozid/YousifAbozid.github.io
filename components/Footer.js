'use client'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src="coding.svg" alt="Coding" />
      </div>
      <div className="middle">
        <div className="text">
          Made with ♥️ by <Link href="">Me</Link> Source Code on
        </div>
        <div className="github">
          <Link href="">
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
