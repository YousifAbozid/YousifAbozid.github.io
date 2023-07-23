import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="logo.png"></img>
      </div>
      <div className="text">
        <h1>Hi, I'm Yousif Abozid</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
