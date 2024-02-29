'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import links from '@/data/linksArray'

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The header component.
 */
const Header = () => {
	const [showMenu, setShowMenu] = useState(false)
	const menuRef = useRef(null)

	const handleLinkClick = () => {
		setShowMenu(false) // Close menu when a link is clicked
	}

	const toggleMenu = (event) => {
		// Prevent default behavior of the touch event
		event.preventDefault()

		setShowMenu((prevState) => !prevState)
	}

	useEffect(() => {
		// Function to close menu when clicking outside of it
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setShowMenu(false)
			}
		}

		// Add event listener when component mounts
		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('touchstart', handleClickOutside) // Listen for touch events as well

		// Remove event listener when component unmounts
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('touchstart', handleClickOutside)
		}
	}, [])

	return (
		<div className='header'>
			<Link href='/' className='logo'>
				<img src='logo.png'></img>
			</Link>

			<div className={`links ${showMenu ? 'show' : ''}`} ref={menuRef}>
				<ul>
					{links.map((link, index) => (
						<li key={index}>
							<Link href={link.href} onClick={handleLinkClick}>
								{link.label}
							</Link>
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
