import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import About from "../components/About/About";


const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // children: [
        //     {
        //         path: "/",
        //         element: <Home />
        //     },
        //     {
        //         path: "/about",
        //         element: <About />
        //     },
        // ]
        
    },
    {
        path: "/about",
        element: <About />
    },
])

export default route;