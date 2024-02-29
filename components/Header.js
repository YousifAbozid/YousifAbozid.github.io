'use client'
import Link from 'next/link'
import React, { useState } from 'react'

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The header component.
 */
const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	/**
	 * Toggles the menu display.
	 *
	 * @return {void} - No return value
	 */
	const toggleMenu = () => {
		setShowMenu((prevState) => !prevState)
	}
	return (
		<div className='header'>
			<Link href='/' className='logo'>
				<img src='logo.png'></img>
			</Link>
			{/* <div className="text">
        <h1>Hi, I'm Yousif Abozid</h1>
      </div> */}
			<div className={`links ${showMenu ? 'show' : ''}`}>
				<ul>
					<li>
						<Link href='/projects'>Projects</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
				</ul>
			</div>
			<div
				className={`menu-button ${showMenu ? 'show' : ''}`}
				onClick={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}

export default Header
