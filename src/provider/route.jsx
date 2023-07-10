import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import SingleProject from "../components/SingleProject/SingleProject";
import MainLayout from "../components/Layout/MainLayout";


const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/projects/:id",
                element: <SingleProject />
            },
        ]

    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/projects",
        element: <Projects />
    },
    // {
    //     path: "/projects/:id",
    //     element: <SingleProject />
    // },
    {
        path: "/contact",
        element: <Contact />
    },
])

export default route;