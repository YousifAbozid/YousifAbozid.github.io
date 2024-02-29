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
	const menuButtonRef = useRef(null)
	const isTogglingRef = useRef(false)

	const handleLinkClick = () => {
		setShowMenu(false) // Close menu when a link is clicked
	}

	const toggleMenu = () => {
		if (!isTogglingRef.current) {
			isTogglingRef.current = true
			setShowMenu((prevState) => !prevState)
			setTimeout(() => {
				isTogglingRef.current = false
			}, 500) // Adjust the delay as needed
		}
	}

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setShowMenu(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('touchstart', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('touchstart', handleClickOutside)
		}
	}, [])

	useEffect(() => {
		const handleMenuButtonClick = () => {
			toggleMenu()
		}

		menuButtonRef.current.addEventListener('click', handleMenuButtonClick)

		return () => {
			menuButtonRef.current.removeEventListener('click', handleMenuButtonClick)
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
				ref={menuButtonRef}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
}

export default Header
