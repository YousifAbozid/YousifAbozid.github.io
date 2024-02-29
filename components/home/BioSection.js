import Image from 'next/image'
import Link from 'next/link'
import SocialIconsSection from './SocialIconsSection'

/**
 * Renders the bio section of the website.
 *
 * @return {JSX.Element} The JSX element representing the bio section.
 */
const BioSection = () => {
	return (
		<div className='bio-container'>
			<div className='avatar'>
				<Image
					alt='Yousif Abozid'
					width={0}
					height={0}
					priority={true}
					src={
						'https://res.cloudinary.com/octopus-labs/image/upload/v1693155786/yousif-mini.jpg'
					}
				/>
			</div>

			<div className='bio'>
				<div className='name'>
					<Link href='https://github.com/YousifAbozid' target='_blank'>
						<Image
							src='YousifAbozid.svg'
							alt='Yousif Abozid'
							width={0}
							height={0}
						/>
					</Link>
				</div>

				<div className='typing-svg'>
					<Image
						src="https://readme-typing-svg.demolab.com/?lines=Full+Stack+Software+Engineer;I+love+coding+%5E_%5E;Always+learning+new+things&font=Fira%20Code&center=true&width=440&height=45&color=f75c7e&vCenter=true&pause=1000&size=25'"
						alt='Typing SVG'
						width={0}
						height={0}
					/>
				</div>

				<p>
					👋 Hey there, fellow tech enthusiasts! 🚀 I'm Yousif, your friendly
					neighborhood Full Stack Software Engineer, crafting digital
					experiences that mesmerize and inspire. 💻✨
				</p>
				<p>
					With JavaScript as my trusty tool, I wield frameworks like React.js
					and Next.js to breathe life into ideas and turn them into
					pixel-perfect realities. It's all about that perfect blend of
					creativity and functionality, where every line of code tells a story
					and every project leaves a lasting impression. 🎨🔮
				</p>
				<p>
					But beyond the code, I'm driven by the thrill of innovation and the
					joy of problem-solving. Let's join forces and embark on a journey to
					build something truly remarkable together! 💫👨‍💻
				</p>

				<SocialIconsSection />
			</div>
		</div>
	)
}

export default BioSection
