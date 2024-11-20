import React from 'react';
import './Portfolio.css';
import { FaGithub } from "react-icons/fa";
import img from '../../assets/portimg/Capture.png';
import img1 from '../../assets/portimg/Capture1.png';
import img2 from '../../assets/portimg/Capture2.png';
import img3 from '../../assets/portimg/myproject.png';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('portfolio.bookSellingTitle'),
      description: t('portfolio.bookSellingDescription'),
      image: img3,
      githubLink: "/"
    }
   
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="center-text">
        <h2>{t('portfolio.heading')} <span>{t('portfolio.subheading')}</span></h2>
      </div>
      <div className="portfolio-flex">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={`${project.title} image`} />
            <div className="card-overlay">
              <h5>{project.title}</h5>
              <p>{project.description}</p>
              <a href={project.githubLink} target="blank">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
