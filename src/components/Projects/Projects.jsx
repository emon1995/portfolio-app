import "./Projects.css";
import Img from "../../assets/p1.png";
import newImg from "../../assets/open_in_new.png";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="#about" className="projects">
      <div className="about-hints">
        <h1 className="about-title">Projects</h1>
        <hr className="about-hr" />
        <p className="about-subtitle">
          You can find some of the projects I made for both my own use and for <br /> clients here. You can check them out from here.
        </p>
      </div>
      <div className="project-all">
        <div className="project-item">
          <img src={Img} alt="img" />
          <h3>Toy Car</h3>
          <p>Toy Car MERN stack website offers an exciting collection of toy cars, bringing joy and adventure to kids of all ages.</p>
          <div className="view-project">
            <Link to={`/projects/1`}>View Project</Link>
            <img src={newImg} alt="img" />
          </div>
        </div>
        <div className="project-item item">
          <img src={Img} alt="img" />
          <h3>Chef Recipe</h3>
          <p>Our MERN stack website brings you a world of culinary delights, offering a vast collection of chef-inspired recipes.</p>
          <div className="view-project">
            <Link to={`/projects/2`}>View Project</Link>
            <img src={newImg} alt="img" />
          </div>
        </div>
        <div className="project-item">
          <img src={Img} alt="img" />
          <h3>Car Doctor</h3>
          <p>Our MERN stack website streamlines the car service experience, making it efficient and hassle-free for customers.</p>
          <div className="view-project">
            <Link to={`/projects/3`}>View Project</Link>
            <img src={newImg} alt="img" />
          </div>
        </div>
        <div className="project-item item">
          <img src={Img} alt="img" />
          <h3>Summer Camp School</h3>
          <p>Take a look at our Summer Camp brochure or visit our website to explore the exciting range of programs we offer.</p>
          <div className="view-project">
            <Link to={`/projects/4`}>View Project</Link>
            <img src={newImg} alt="img" />
          </div>
        </div>
      </div>
      <div className="arrow">
        <img src={arrow} alt="img" />
      </div>
    </div>
  );
};

export default Projects;
