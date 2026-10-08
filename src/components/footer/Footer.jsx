import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Bhanu Priya's Portfolio
      </a>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/bhanupriya-sahoo" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/_.bhanupriya_/" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="mailto:bhanupriyas617@gmail.com">
          <SiGmail />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; React Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
