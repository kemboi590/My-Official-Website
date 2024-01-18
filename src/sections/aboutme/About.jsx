import React from 'react';
import AboutImage from '../../images/about.jpg';
import Resume from '../../images/resume.docx';
import { HiDownload } from 'react-icons/hi'
import Cards from '../../components/Cards';
import data from './data';
import './about-me.css';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="Aboutpic" />
          </div>
        </div>
        <div className="about__right">
          <h2>About me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Cards key={item.id} className='about__card'>
                  <span className='about__card-icon'> {item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Cards>
              ))
              }
          </div>
          <p>
            I am a web developer with a focus on developing full stack web applications using ReactJS library, Node JS, express framwork and SQL lite.
            With over 3 years of experience, I have honed my skills in both front-end, backend and cloud technologies.
  
            Whether you're looking to build a new website or improve upon an existing one, I am dedicated to delivering high-quality,
            reliable solutions that meet your needs.
          </p>

          <a href={Resume} download className='btn primary'>Download Resume
            <HiDownload /> </a>   
        </div>

      </div>
   </section>
  )
}

export default About