import "./Footer.css";
import locationImg from "../../assets/location_on.png";
import PhoneImg from "../../assets/call.png";
import EmailImg from "../../assets/mail.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="emon-hossain">
          <h1 className="footer-title">Emon Hossain</h1>
          <p className="emon-subtitle">
            As a <b>frontend web developer</b>, my focus is on building visually
            appealing and <b>user-friendly</b> interfaces that contribute to the
            success of websites and web applications. I stay up to date with the
            latest <b>technologies</b>, collaborate closely with{" "}
            <b>stakeholders</b>, and prioritize <b>responsive design</b> and
            performance optimization. My goal is to create engaging{" "}
            <b>user experiences</b> and contribute to the overall success of the
            product.
          </p>
        </div>
        <div className="resource">
          <h1 className="footer-title">Resources</h1>
          <a className="resource-link" href="#home">
            Home
          </a>
          <a className="resource-link" href="#about">
            About
          </a>
          <a className="resource-link" href="#projects">
            Projects
          </a>
          <a className="resource-link" href="#Contact">
            Contact
          </a>
        </div>
        <div className="address">
          <h1 className="footer-title">Addres</h1>
          <div className="address-item">
            <img src={locationImg} alt="img" />
            <p className="">342/D, South Paikpara, Mirpur, Dhaka - 1212</p>
          </div>
          <div className="address-item">
            <img src={PhoneImg} alt="img" />
            <p className="">+880 182 456 8854</p>
          </div>
          <div className="address-item">
            <img src={EmailImg} alt="img" />
            <p className="">emonhossain995@gmail.com</p>
          </div>
        </div>
        <div className="follow">
          <h1 className="footer-title">Follow</h1>
          <div className="follow-icon">
            <div className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="icon"
              >
                <g className="icon" clipPath="url(#clip0_25_188)">
                  <path
                    d="M47.988 48L48 47.998V30.394C48 21.782 46.146 15.148 36.078 15.148C31.238 15.148 27.99 17.804 26.664 20.322H26.524V15.952H16.978V47.998H26.918V32.13C26.918 27.952 27.71 23.912 32.884 23.912C37.982 23.912 38.058 28.68 38.058 32.398V48H47.988Z"
                    fill="#fff"
                  />
                  <path
                    d="M0.791992 15.954H10.744V48H0.791992V15.954Z"
                    fill="#fff"
                  />
                  <path
                    d="M5.764 0C2.582 0 0 2.582 0 5.764C0 8.946 2.582 11.582 5.764 11.582C8.946 11.582 11.528 8.946 11.528 5.764C11.526 2.582 8.944 0 5.764 0Z"
                    fill="#fff"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_188">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M27.7173 48V26.1065H35.0631L36.1652 17.5718H27.7173V12.1235C27.7173 9.65328 28.4005 7.96983 31.9468 7.96983L36.4625 7.96798V0.334152C35.6816 0.232669 33.0009 0 29.8809 0C23.3659 0 18.9056 3.97672 18.9056 11.2782V17.5718H11.5375V26.1065H18.9056V48H27.7173Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <g clipPath="url(#clip0_25_193)">
                  <path
                    d="M48 9.117C46.215 9.9 44.313 10.419 42.33 10.671C44.37 9.453 45.927 7.539 46.659 5.232C44.757 6.366 42.657 7.167 40.419 7.614C38.613 5.691 36.039 4.5 33.231 4.5C27.783 4.5 23.397 8.922 23.397 14.343C23.397 15.123 23.463 15.873 23.625 16.587C15.444 16.188 8.205 12.267 3.342 6.294C2.493 7.767 1.995 9.453 1.995 11.268C1.995 14.676 3.75 17.697 6.366 19.446C4.785 19.416 3.234 18.957 1.92 18.234C1.92 18.264 1.92 18.303 1.92 18.342C1.92 23.124 5.331 27.096 9.804 28.011C9.003 28.23 8.13 28.335 7.224 28.335C6.594 28.335 5.958 28.299 5.361 28.167C6.636 32.064 10.254 34.929 14.556 35.022C11.208 37.641 6.957 39.219 2.355 39.219C1.548 39.219 0.774 39.183 0 39.084C4.359 41.895 9.525 43.5 15.096 43.5C33.204 43.5 43.104 28.5 43.104 15.498C43.104 15.063 43.089 14.643 43.068 14.226C45.021 12.84 46.662 11.109 48 9.117Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_25_193">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M16.7684 44.5263C18.2211 44.5263 18.6316 43.9579 18.6316 43.2316C18.6316 42.5053 18.6316 40.9263 18.6 38.6842C11.0526 40.2947 9.44212 35.0842 9.44212 35.0842C8.21054 32.021 6.41054 31.1684 6.41054 31.1684C3.94738 29.5263 6.60001 29.5579 6.60001 29.5579C9.3158 29.7474 10.7684 32.3053 10.7684 32.3053C13.2 36.4105 17.1158 35.2105 18.6632 34.5158C18.7895 33.1579 19.3895 31.8632 20.4 30.9158C14.3684 30.2526 8.02107 27.9474 8.02107 17.7158C7.98949 15.0632 9.00001 12.4737 10.8316 10.5474C10.5158 9.88421 9.60001 7.16842 11.0526 3.47368C11.0526 3.47368 13.3263 2.74737 18.5369 6.22105C22.9895 5.02105 27.6632 5.02105 32.1158 6.22105C37.2632 2.77895 39.5684 3.47368 39.5684 3.47368C41.0211 7.13684 40.1053 9.85263 39.8526 10.5474C41.6842 12.4737 42.6632 15.0632 42.6316 17.7158C42.6316 27.9789 36.2842 30.2211 30.2211 30.8842C31.1684 31.6737 32.0526 33.3158 32.0526 35.8105C32.0526 39.4105 32.0211 42.2526 32.0211 43.1053C32.0211 43.8 32.3369 44.3684 33.8842 44.3684L16.7684 44.5263Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M45.5493 12.7525C45.0308 10.8246 43.5108 9.30496 41.5833 8.78586C38.0619 7.82236 23.976 7.82236 23.976 7.82236C23.976 7.82236 9.89072 7.82236 6.36932 8.74933C4.47885 9.26788 2.92181 10.8249 2.40326 12.7525C1.47656 16.2736 1.47656 23.5759 1.47656 23.5759C1.47656 23.5759 1.47656 30.9151 2.40326 34.3994C2.92236 36.3269 4.44177 37.8466 6.3696 38.3657C9.9278 39.3295 23.9766 39.3295 23.9766 39.3295C23.9766 39.3295 38.0619 39.3295 41.5833 38.4025C43.5111 37.8837 45.0308 36.364 45.5499 34.4365C46.4763 30.9151 46.4763 23.613 46.4763 23.613C46.4763 23.613 46.5134 16.2736 45.5493 12.7525ZM19.4914 30.3221V16.8298L31.2045 23.5759L19.4914 30.3221Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="footer-copyright">
        <p>© Copyright 2023 | All Right Reserved By <b>Emon Hossain</b></p>
      </div>
    </div>
  );
};

export default Footer;
