<<<<<<< HEAD
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
=======
// import { Outlet } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
>>>>>>> some code added
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
=======
      {/* <Navbar /> */}
>>>>>>> some code added
      <div className="home">
        <Home />
      </div>
      <div id="#about" className="about-main">
        <About />
      </div>
      <div className="projects-main">
        <Projects />
      </div>
      <div className="contact-main">
        <Contact />
      </div>
<<<<<<< HEAD
      <div className="footer-main">
        <Footer />
      </div>
=======
      {/* <Outlet /> */}
      {/* <div className="footer-main">
        <Footer />
      </div> */}
>>>>>>> some code added
    </>
  );
}

export default App;
