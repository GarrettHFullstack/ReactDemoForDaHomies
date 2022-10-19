import React from "react"
import ReactDOM from "react-dom"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Homepage from "./Homepage"
import Error from "./ErrorPage"
import AboutMe from "./AboutMe"
import Dddle from "./Dddle"
import Register from "./Register"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <Error />,
        children: [
            {
                path: "AboutMe",
                element: <AboutMe/>
            },
            {
                path: "Dddle",
                element: <Dddle/>
            },
            {
                path: "Register",
                element: <Register/>
            }
        ]
    }


])



ReactDOM.render(<RouterProvider router = {router}/>, document.getElementById("app"))