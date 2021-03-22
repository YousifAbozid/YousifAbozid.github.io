import Head from "next/head"

const projects = () => {
    return (
        <div>
            <Head>
                <title>Yousif's Resume | Projects</title>
            </Head>

            <div id="projects">
                <h1>Projects</h1>
                <div>
                    <a href="https://github.com/YousifAbozid/AsgardMarket">
                        <img
                            align="center"
                            src="https://github-readme-stats.vercel.app/api/pin/?username=YousifAbozid&repo=AsgardMarket&show_owner=true&theme=dark"
                        />
                    </a>
                    <a href="https://github.com/YousifAbozid/Memories">
                        <img
                            align="center"
                            src="https://github-readme-stats.vercel.app/api/pin/?username=YousifAbozid&repo=Memories&show_owner=true&theme=dark"
                        />
                    </a>
                    <a href="https://github.com/YousifAbozid/UrlShrinker">
                        <img
                            align="center"
                            src="https://github-readme-stats.vercel.app/api/pin/?username=YousifAbozid&repo=UrlShrinker&show_owner=true&theme=dark"
                        />
                    </a>
                    <a href="https://github.com/YousifAbozid/E-Commerce-backend">
                        <img
                            align="center"
                            src="https://github-readme-stats.vercel.app/api/pin/?username=YousifAbozid&repo=E-Commerce-backend&show_owner=true&theme=dark"
                        />
                    </a>
                    <a href="https://github.com/YousifAbozid/E-Commerce-frontend">
                        <img
                            align="center"
                            src="https://github-readme-stats.vercel.app/api/pin/?username=YousifAbozid&repo=E-Commerce-frontend&show_owner=true&theme=dark"
                        />
                    </a>
                </div>
                <div className="many_projects">
                    And many more on my{" "}
                    <a
                        href="https://github.com/YousifAbozid"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                        <span>
                            <i className="fab fa-github" aria-hidden></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default projects
