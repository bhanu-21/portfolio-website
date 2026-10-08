import "./header.css";
import CTA from "./CTA";
import SELF from "../../assets/self.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Bhanu Priya Sahoo</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className="me-img" src={SELF} alt="Bhanu Priya Sahoo" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
