import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Todo Application",
    github: "https://github.com/bhanu-21/Todo-Application",
    demo: "https://dribbble.com/shots/16673715-crypto-currency-dashboards-and-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Personal Portfolio",
    github: "https://github.com/bhanu-21/portfolio-website",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "Finance App",
    github: "https://github.com/bhanu-21/next16-finance-app",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} className="img_size" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
