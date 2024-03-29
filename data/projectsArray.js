const projectsArray = [
	{
		name: 'Brainwave',
		description:
			'Brainwave is a modern website with sleek parallax effects and bento box layouts, it covers everything from stylish UI design to mobile-first principles, built with React.js and Tailwind CSS.',
		tools: [
			'React.js',
			'Vite.js',
			'Tailwind CSS',
			'React-router-dom',
			'Scroll-lock',
			'Vercel'
		],
		live: 'https://ai-brainwave.vercel.app',
		source: 'https://github.com/YousifAbozid/brainwave'
	},
	{
		name: 'Mirage Master',
		description:
			'Mirage Master is an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.',
		tools: [
			'Next.js',
			'Node.js',
			'TypeScript',
			'MongoDB',
			'mongoose',
			'Tailwind CSS',
			'Shadcn-UI',
			'Clerk',
			'Cloudinary',
			'Stripe',
			'Webhooks',
			'Vercel'
		],
		live: 'https://mirage-master.vercel.app',
		source: 'https://github.com/YousifAbozid/mirage-master'
	},
	{
		name: 'Tvflix',
		description: 'Tvflix is a web applications to show the latest movies.',
		tools: ['HTML', 'CSS', 'JavaScript', 'Github Pages'],
		live: 'https://YousifAbozid.github.io/Tvflix',
		source: 'https://github.com/YousifAbozid/Tvflix'
	},
	{
		name: 'Portfolio',
		description: 'This is my portfolio app.',
		tools: [
			'React.js',
			'Next.js',
			'Node.js',
			'CSS',
			'Github Pages',
			'Github Actions'
		],
		live: 'https://YousifAbozid.github.io',
		source: 'https://github.com/YousifAbozid/YousifAbozid.github.io'
	},
	{
		name: 'Asgard Market',
		description:
			'Asgard Market is an E-Commerce App for selling your products or buying products.',
		tools: [
			'React.js',
			'Next.js',
			'Node.js',
			'MongoDB',
			'mongoose',
			'JWT',
			'bcrypt',
			'CSS',
			'Bootstrap 5',
			'Context API',
			'fetch API'
		],
		live: '',
		source: 'https://github.com/YousifAbozid/url-shrinker'
	},
	{
		name: 'E-Commerce Frontend',
		description: 'E-Commerce Frontend handles all the user interactions.',
		source: 'https://github.com/YousifAbozid/E-Commerce-frontend',
		live: '',
		tools: ['React.js', 'Bootstrap', 'Redux', 'Axios']
	},
	{
		name: 'E-Commerce Backend',
		description: 'E-Commerce Backend handles all the business logic and data.',
		source: 'https://github.com/YousifAbozid/E-Commerce-backend',
		live: '',
		tools: [
			'Node.js',
			'Express.js',
			'MongoDB',
			'mongoose',
			'JWT',
			'bcrypt',
			'dotenv',
			'cors'
		]
	},
	{
		name: 'Url Shrinker',
		description: 'Url Shrinker is a URL Shortener App for your links.',
		source: 'https://github.com/YousifAbozid/UrlShrinker',
		live: '',
		tools: [
			'React.js',
			'Node.js',
			'Express.js',
			'MongoDB',
			'mongoose',
			'Bootstrap',
			'Axios'
		]
	},
	{
		name: 'Memories',
		description: 'Memories App saves your memories and photos to the cloud.',
		source: 'https://github.com/YousifAbozid/Memories',
		live: '',
		tools: [
			'React.js',
			'Node.js',
			'Express.js',
			'MongoDB',
			'mongoose',
			'Bootstrap',
			'Axios',
			'Redux',
			'dotenv',
			'cors'
		]
	},
	{
		name: 'GraphQL Playlist',
		description:
			'GraphQL Playlist App to save your favourite books to the cloud.',
		source: 'https://github.com/YousifAbozid/GraphQlPlaylist',
		live: '',
		tools: [
			'React.js',
			'Node.js',
			'Express.js',
			'MongoDB',
			'mongoose',
			'graphQL',
			'apollo server',
			'lodash',
			'dotenv',
			'cors'
		]
	},
	{
		name: 'Todo List',
		description: 'Todo List App to save your tasks.',
		source: 'https://github.com/YousifAbozid/TodoList',
		live: '',
		tools: ['React.js', 'localstorage', 'CSS', 'fontawesome']
	},
	{
		name: 'CSS Animation Projects',
		description:
			'Mastering Creative Advanced CSS Animations With More Than 100 Project.',
		source: 'https://github.com/YousifAbozid/CSS-Animation-Projects',
		live: '',
		tools: ['HTML', 'CSS', 'flexbox', 'animation', 'keyframes']
	},
	{
		name: '50 Projects In 50 Days',
		description: '50 Projects In 50 Days.',
		source: 'https://github.com/YousifAbozid/50-Projects-In-50-Days',
		live: 'https://YousifAbozid.github.io/50-Projects-In-50-Days',
		tools: [
			'HTML',
			'CSS',
			'JavaScript',
			'flexbox',
			'grid',
			'animation',
			'keyframes'
		]
	},
	{
		name: 'Image Processing API',
		description: 'A project to get your pictuers in specific width and height.',
		source: 'https://github.com/YousifAbozid/image-processing-api',
		live: '',
		tools: [
			'Node.js',
			'Express.js',
			'TypeScript',
			'Jasmine',
			'sharp',
			'lint',
			'prettier',
			'Udacity'
		]
	},
	{
		name: 'Storefront Backend',
		description: 'This is backend for the Storefront.',
		source: 'https://github.com/YousifAbozid/storefront-backend',
		live: '',
		tools: [
			'Node.js',
			'Express.js',
			'TypeScript',
			'Jasmine',
			'PostgreSQL',
			'dotenv',
			'cors',
			'bcrypt',
			'JWT',
			'lint',
			'prettier',
			'Udacity'
		]
	},
	{
		name: 'Pipeline with Udacity',
		description: 'This is simple application with a pipeline.',
		source: 'https://github.com/YousifAbozid/pipeline-with-udacity',
		live: '',
		tools: ['CI/CD', 'CircleCI', 'Udacity']
	},
	{
		name: 'Products List',
		description: 'This is full stack application with a pipeline.',
		source: 'https://github.com/YousifAbozid/products-list',
		live: '',
		tools: [
			'React.js',
			'Node.js',
			'Express.js',
			'PostgreSQL',
			'TypeScript',
			'AWS',
			'CI/CD',
			'CircleCI',
			'dotenv',
			'cors',
			'axios',
			'Udacity'
		]
	},
	{
		name: 'Hack GitHub Contributions Graph',
		description:
			'A Program To Hack GitHub Contributions Graph And Fill The Empty Days.',
		source: 'https://github.com/YousifAbozid/Hack-GitHub-Contributions-Graph',
		live: '',
		tools: ['Node.js', 'jsonfile', 'simple-git']
	},
	{
		name: 'Photoshop',
		description: 'A simple app to edit your photos.',
		source: 'https://github.com/YousifAbozid/PhotoShop',
		live: '',
		tools: ['React.js', 'CSS']
	},
	{
		name: 'Google Maps',
		description: 'A simple google maps app.',
		source: 'https://github.com/YousifAbozid/GoogleMaps',
		live: '',
		tools: ['JavaScript', 'HTML', 'Mapbox']
	},
	{
		name: 'CodePen',
		description: 'A simple codepen editor.',
		source: 'https://github.com/YousifAbozid/CodePen',
		live: '',
		tools: ['React.js', 'CSS']
	},
	{
		name: 'Clock',
		description: 'A simple analog clock.',
		source: 'https://github.com/YousifAbozid/Clock',
		live: 'https://YousifAbozid.github.io/Clock',
		tools: ['JavaScript', 'HTML', 'CSS']
	},
	{
		name: 'README',
		description: 'My public README.md works as resume.',
		source: 'https://github.com/YousifAbozid/YousifAbozid',
		live: 'https://YousifAbozid.github.io/YousifAbozid',
		tools: ['JavaScript', 'HTML', 'CSS']
	},
	{
		name: 'printf',
		description: 'C Custom Printf Function.',
		source: 'https://github.com/YousifAbozid/printf',
		live: '',
		tools: ['C', 'ALX Africa']
	},
	{
		name: 'Simple Shell',
		description: 'Custom Linux Shell.',
		source: 'https://github.com/YousifAbozid/simple_shell',
		live: '',
		tools: ['C', 'ALX Africa']
	}
]

export default projectsArray
