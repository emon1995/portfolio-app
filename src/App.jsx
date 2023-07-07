import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="home">
        <Home />
      </div>
      <div id="#about" className="about-main">
        <About />
      </div>
    </>
  );
}

export default App;
