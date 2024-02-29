import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'

export const metadata = {
	title: 'Yousif Abozid - Software Engineer',
	description:
		'Passionate Full Stack Software Engineer. Explore my projects and skills in web development, and learn more about my journey in the tech industry. Welcome to my world of creativity and code!',
	url: 'https://yousifabozid.github.io/',
	type: 'portfolio',
	themeColor: 'dark',
	image:
		'https://res.cloudinary.com/octopus-labs/image/upload/v1693155786/yousif-mini.jpg',
	creator: 'Yousif Abozid',
	publisher: 'Yousif Abozid',
	keywords: [
		'Yousif Abozid',
		'Full Stack Software Engineer',
		// 'Novelist',
		// 'Entrepreneur',
		'Portfolio',
		'Projects',
		'Skills',
		'Resume',
		'Blog',
		'HTML',
		'CSS',
		'JavaScript',
		'TypeScript',
		'SQL',
		'Bash',
		'C',
		'Python',
		'React.js',
		'Next.js',
		'Redux',
		'Context API',
		'Bootstrap',
		'Material-UI',
		'Axios',
		'Fetch API',
		'RESTful APIs',
		'GraphQL',
		'Node.js',
		'Express.js',
		'MongoDB',
		'PostgreSQL',
		'Mongoose',
		'JWT',
		'Bcrypt',
		'Dotenv',
		'Cors',
		'Git',
		'GitHub',
		'GitHub Pages',
		'Heroku',
		'Netlify',
		'Vercel',
		'AWS',
		'GitHub Actions',
		'CircleCI',
		'Jest',
		'Jasmine',
		'Cypress'
	]
}

/**
 * Renders the root layout of the application.
 *
 * @param {Object} children - The child components to be rendered.
 * @return {JSX.Element} The root layout component.
 */
export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
