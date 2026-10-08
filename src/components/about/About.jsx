import "./about.css";
import ME1 from "../../assets/me1.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME1} alt="AboutImage" className="img-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5 Clients and 1 internal client</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>7 client projects</small>
            </article>
          </div>

          <p>
            My name is Bhanu Priya Sahoo. I completed my B.Com in Accounting from Ravenshaw University in 2018.
            After graduation, I was preparing for banking and government exams for some time. During that period, I developed a strong interest in the IT field, especially web development, so I decided to move into software development and started building my skills in this area.<br />
            I have around two years of professional experience in web and software development. I have worked with technologies like HTML, CSS, JavaScript, React.js, WordPress and Wix. In my previous roles, I worked on website development, responsive design, performance optimization, API-related tasks, bug fixing, and deployment.<br />
            After my previous job, I took a career break due to maternity. During this break, I continued learning and recently expanded my technical skills. I have been practicing Next.js and Supabase, and I have also started learning AWS and cloud concepts. I have been working on these technologies through hands-on practice and projects.<br />
            Now, I am looking to restart my career in a development role where I can use my previous experience, apply my recent skills, and continue growing as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
