import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/bhanupriya-sahoo" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/bhanupriya" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:sbhanupriya03@gmail.com">
        <SiGmail />
      </a>
    </div>
  );
};

export default HeaderSocials;
