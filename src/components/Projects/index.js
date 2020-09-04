import React from 'react';
import './Projects.css';
import ImgResponsive from '../../assets/images/projects.png';

function Projects() {
  return (
    <section className="projects-section slide-in-fwd-bottom">
      <h1>Projetos Full-Stack JavaScript</h1>
      <img src={ImgResponsive} alt="img responsive"></img>
      <div>
        <a className="btn btn3">Front-end</a>
        <a className="btn btn3">Full-stack</a>
      </div>
    </section>
  );
}

export default Projects;
