import "./About.css";

const About = () => {
    const skills = [
        {
            id: 0,
            title: 'HTML'
        },
        {
            id: 1,
            title: 'CSS'
        },
        {
            id: 2,
            title: 'JavaScript'
        },
        {
            id: 4,
            title: 'React'
        },
        {
            id: 5,
            title: 'SASS'
        },
        {
            id: 6,
            title: 'GIT'
        },
        {
            id: 7,
            title: 'Github'
        },
        {
            id: 8,
            title: 'Responsive Design'
        },
        {
            id: 9,
            title: 'Terminal'
        },
        {
            id: 10,
            title: 'Express js'
        },
        {
            id: 11,
            title: 'Node js'
        },
        {
            id: 12,
            title: 'MongoDB'
        },
    ]
  return (
    <div id="#about" className="about">
      <div className="about-hints">
        <h1 className="about-title">About Me</h1>
        <hr className="about-hr" />
        <p className="about-subtitle">
          You can learn more about me, what I do, and my current qualifications{" "}
          <br /> here, which are primarily in the areas of technology and
          programming.
        </p>
      </div>
      <div className="about-info">
        <div className="know-me">
            <h1 className="know">Get to know me!</h1>
          <p>
            I develop the front-end of websites and web applications as a 
            <b> frontend web developer</b>, which is what makes the final product
            successful. Browse through the <b>Projects</b> area to see some of my work.
          </p>
          <p>
            In order to benefit other members of the developer community, I also
            enjoy disseminating information about the things I have learned
            about <b>web development</b> over the years. Please feel free to connect
            with or follow me on my <a className="linkedin" href="">Linkedin</a> profile, where I share helpful Web
            Development and Programming-related stuff.
          </p>
          <p>
            I&apos;m <b>interested</b> in working for companies that will help me
            develop professionally. Please do not hesitate to  <b>get in touch</b> with
            me if you have a good opportunity that matches my qualifications and
            expertise.
          </p>
          <button className="btn" style={{marginBottom: "48px"}}>Contact</button>
        </div>
        <div className="my-skill">
            <h1 className="skills">My Skills</h1>
            <div className="my-skills">
            {
                skills.map(skill => <p className="skill" key={skill.id}>{skill.title}</p>)
            }
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
