'use client'

import React, { useState } from 'react'

const Contact = () => {
	const [query, setQuery] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleParam = () => (e) => {
		const name = e.target.name
		const value = e.target.value
		setQuery((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const formSubmit = (e) => {
		e.preventDefault()

		const formData = new FormData()
		Object.entries(query).forEach(([key, value]) => {
			formData.append(key, value)
		})

		fetch('https://getform.io/f/90201b71-e03a-49e0-a0a8-b7f3a3f6981f', {
			method: 'POST',
			body: formData
		})
			.then(() => {
				alert('Message sent!')
				setQuery({ name: '', email: '', message: '' })
			})
			.catch(() => {
				alert('Message failed to send, try again later!')
			})
	}

	return (
		<div className='contact-container'>
			<div className='form-container'>
				<form onSubmit={formSubmit}>
					<h1>Contact</h1>

					<input
						type='text'
						name='name'
						placeholder='Name'
						className='dark-input'
						required
						value={query.name}
						onChange={handleParam()}
					/>

					<input
						type='text'
						name='email'
						className='dark-input'
						placeholder='Email'
						required
						value={query.email}
						onChange={handleParam()}
					/>

					<textarea
						name='message'
						placeholder='Message'
						rows='10'
						className='dark-textarea'
						required
						value={query.message}
						onChange={handleParam()}
					/>

					<button type='submit' className='dark-button'>
						Work With Me
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
