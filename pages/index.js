import Head from "next/head"

const Home = () => {
    return (
        <div>
            <Head>
                <title>Yousif's Resume | About Me</title>
            </Head>

            <div className="about_me" id="about_me">
                <h1>About me</h1>
                <p>
                    I'm 22 years old Full Stack Web Developer From Egypt, I
                    learned how to code since 2018, this was my first step in
                    this industry, I learned Python in Udacity with professor
                    David Evans in cs101 course, it was very good start. In
                    September 2020 I learned MERN Stack in Full Stack Open 2020
                    MOOC, This MOOC was introduced by professor Matti
                    Luukkainen, he is a professor in computer science department
                    in University of Helsinki in Finland, he is a great man, and
                    I'm in love with MERN Stack since then. Also I'm a Law
                    student in Zagazig University in Egypt and novelist. I’m
                    currently working remotely as freelancer.
                </p>
            </div>
        </div>
    )
}

export default Home
