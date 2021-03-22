import Head from "next/head"
import ProgressBar from "../components/ProgressBar"

const skills = () => {
    return (
        <div>
            <Head>
                <title>Yousif's Resume | Skills</title>
            </Head>

            <div className="skills" id="skills">
                <h1>Skills</h1>

                <div>
                    <h3>General Skills</h3>
                    <h5>
                        Including Bash Unix shell, Git and GitHub, deployment to
                        many platforms such as Heroku, Netlify and Vercel, CI/CD
                        and many more
                    </h5>
                    <ProgressBar value="100" />
                    <p>Excellent Level</p>
                </div>

                <div>
                    <h3>React</h3>
                    <h5>
                        Including frameworks and libraries such as Next.js,
                        Redux, Bootstrap, Material UI and more
                    </h5>
                    <ProgressBar value="90" />
                    <p>Excellent Level</p>
                </div>

                <div>
                    <h3>HTML, CSS and JavaScript</h3>
                    <ProgressBar value="80" />
                    <p>Good Level</p>
                </div>

                <div>
                    <h3>Node</h3>
                    <h5>Including Express.js framework</h5>
                    <ProgressBar value="75" />
                    <p>Good Level</p>
                </div>

                <div>
                    <h3>MongoDB</h3>
                    <ProgressBar value="75" />
                    <p id="last_child">Good Level</p>
                </div>
            </div>
        </div>
    )
}

export default skills
