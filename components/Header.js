'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import links from '@/data/linksArray'

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

			<div className={`links ${showMenu ? 'show' : ''}`}>
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<Link href={link.href}>{link.label}</Link>
						</li>
					))}
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
