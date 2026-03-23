import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        React Portfolio
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/bhanupriya" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/bhanupriya" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="mailto:sbhanupriya03@gmail.com">
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
