import Image from 'next/image'

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="avatar">
        <Image
          alt="Yousif Abozid"
          width={0}
          height={0}
          priority={true}
          src={'https://res.cloudinary.com/fswd/image/upload/v1693155786/Khalifa_446_-min_wavfue.jpg'}></Image>
      </div>
      <div className="bio">
        <h2>Yousif Abozid</h2>
        <h3>Full Stack Software Engineer | Novelist | Entrepreneur</h3>
        <p>
          Greetings! I take pride in being a skilled and dedicated Full Stack Software Engineer, driven by my enthusiasm
          for crafting cutting-edge and intuitive web applications. My expertise spans across both Front-end and
          Back-end development, allowing me to deliver well-rounded solutions.
        </p>
        <p>
          I specialize in developing robust and scalable solutions that deliver seamless user experiences. My core
          expertise lies in leveraging the power of javascript through its libraries and frameworks like React.js and
          specially Next.js which allowing me to create dynamic and responsive web applications.
        </p>
        <p>
          In addition to my technical prowess, I am also an accomplished Novelist, capable of weaving captivating
          stories that resonate with readers. On top of that, I'm an Entrepreneur, and I am honored to be the Founder &
          CEO of Gig Bud, a venture that fuels my passion for innovation and business leadership.
        </p>
        <p>
          I'm constantly seeking opportunities to push boundaries and create meaningful impact through my work. Whether
          it's writing code or crafting narratives, I strive for excellence, making a positive difference in the world
          around me.
        </p>
        <p>
          In conclusion, I'm excited about the opportunity to bring my skills, experience, and passion to a dynamic
          team. If you believe my expertise aligns with your company's goals, I would love to connect further. Please
          feel free to reach out to me through the contact information provided in my resume. Thank you for considering
          my application, and I look forward to the possibility of working together.
        </p>
      </div>
    </div>
  )
}

export default Bio
