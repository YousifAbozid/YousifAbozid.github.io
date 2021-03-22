import React from "react"
import Avatar from "./Avatar"
import Footer from "./Footer"
import NavBar from "./NavBar"
import SocialButtons from "./SocialButtons"

const Layout = ({ children }) => {
    return (
        <>
            <div className="layout">
                <div className="row">
                    <div className="col-md-4">
                        <Avatar />
                        <div className="bio">
                            <h2>Yousif Abozid</h2>
                            <p>Full Stack Web Developer</p>
                        </div>
                        <SocialButtons />
                    </div>
                    <div className="col-md-8">
                        <NavBar />
                        {children}
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default Layout
