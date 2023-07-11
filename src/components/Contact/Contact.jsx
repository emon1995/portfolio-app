import "./Contact.css";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    if (name, email, message) {
      toast.success("Successfully send")
    } else {
      toast.error("Please enter a value")
    }
  }

  // const handleBtn = () => {
  //   toast("Successfully send", {
  //     duration: 4000,
  //     position: 'bottom-right',
  //   });
  // }
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
        <form onSubmit={handleSubmit} className="form-section">
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
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default Contact;
