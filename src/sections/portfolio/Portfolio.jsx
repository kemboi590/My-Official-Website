import React from "react";
import "./portfolio.css";
import data from './data'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <p>My Recent Work</p>
      <div className="container portfolio__container">

        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article className="portfolio__item" key={id}>
              
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <p>{ description }</p>
              <div className="portfolio__item-cta">
                <a href={github} className="btn primary">
                  Github
                </a>
                <a href={demo} className="btn primary" target="_blank" rel="noopener noreferrer">
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