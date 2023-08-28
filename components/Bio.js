import Image from 'next/image'

/**
 * Renders the bio section of the website.
 *
 * @return {JSX.Element} The JSX element representing the bio section.
 */
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
          Hey there, I'm Yousif Abozid, a passionate Full Stack Software Engineer from Egypt. I craft dynamic web
          applications, spanning HTML, CSS, JavaScript, and more.
        </p>
        <p>
          With a background shaped by Udacity, Helsinki University, and ALX Africa's Software Engineering Program, I
          thrive on coding challenges. I'm not just about code, though—I'm also a novelist and an entrepreneur, fueling
          my multidimensional approach to creativity.
        </p>
        <p>
          Explore my portfolio to see my latest projects, and let's build the future together, one line of code at a
          time.
        </p>
        <p>
          Cheers,
          <br />
          Yousif Abozid
        </p>
      </div>
    </div>
  )
}

export default Bio
