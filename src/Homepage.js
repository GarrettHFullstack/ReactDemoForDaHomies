import React from "react"
import {Link,Outlet} from "react-router-dom"

const Homepage = () => {
    
    return (
        <div>This is the Homepage
        <nav>
            <Link to = "AboutMe">About Me</Link>
            <Link to = "Dddle">Dddle</Link>
            <Link to = "Register">Register Foo</Link>
        </nav>
        <Outlet />
        </div>
    )
}

export default Homepage