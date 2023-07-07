import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="about-hints">
        <h1 className="about-title">Contact</h1>
        <hr className="about-hr" />
        <p className="about-subtitle">
        Please fill out the contact form below to get in touch with me, and I will <br /> do my best to respond to you as soon as I can.
        </p>
      </div>
      <div>
        <form className="form-section">
            <div className="input">
            <label htmlFor="name">Name</label> <br />
            <input placeholder="Enter Your Name" type="text" name="name" id="name" />
            </div>
            <div className="input">
            <label htmlFor="email">Email</label> <br />
            <input placeholder="Enter Your Email" type="email" name="email" id="email" />
            </div>
            <div className="input">
            <label htmlFor="message">Message</label> <br />
            <textarea placeholder="Enter Your Message" name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <button className="btn contact-btn">Contact</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
