import "./Projects.css";
import Img from "../../assets/p1.png";
import newImg from "../../assets/open_in_new.png";
import arrow from "../../assets/arrow.png";

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
            <h3>Project Name</h3>
            <p>Lorem ipsum dolor sit amet. Sit magnam dicta eum dolorem galisum rem ullam perspiciatis.33 molestias eveniet sed</p>
            <div className="view-project">
            <a  href="#">View Project</a>
            <img src={newImg} alt="img" />
            </div>
        </div>
        <div className="project-item item">
            <img src={Img} alt="img" />
            <h3>Project Name</h3>
            <p>Lorem ipsum dolor sit amet. Sit magnam dicta eum dolorem galisum rem ullam perspiciatis.33 molestias eveniet sed</p>
            <div className="view-project">
            <a  href="#">View Project</a>
            <img src={newImg} alt="img" />
            </div>
        </div>
        <div className="project-item">
            <img src={Img} alt="img" />
            <h3>Project Name</h3>
            <p>Lorem ipsum dolor sit amet. Sit magnam dicta eum dolorem galisum rem ullam perspiciatis.33 molestias eveniet sed</p>
            <div className="view-project">
            <a  href="#">View Project</a>
            <img src={newImg} alt="img" />
            </div>
        </div>
        <div className="project-item item">
            <img src={Img} alt="img" />
            <h3>Project Name</h3>
            <p>Lorem ipsum dolor sit amet. Sit magnam dicta eum dolorem galisum rem ullam perspiciatis.33 molestias eveniet sed</p>
            <div className="view-project">
            <a  href="#">View Project</a>
            <img src={newImg} alt="img" />
            </div>
        </div>
      </div>
      <div  className="arrow">
        <img src={arrow} alt="img" />
      </div>
    </div>
  );
};

export default Projects;
