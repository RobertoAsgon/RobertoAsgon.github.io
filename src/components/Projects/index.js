import React from 'react';
import './Projects.css';
import ImgResponsive from '../../assets/images/projects.png';

function Projects() {
  return (
    <section className="projects-section slide-in-fwd-bottom">
      <h1>Projetos ReactJS & NodeJS</h1>
      <span>Clean Arquiteture, Solid, DDD, TDD</span>
      <img src={ImgResponsive} alt="img responsive" freepik="https://stories.freepik.com/?_ga=2.128526796.1541234574.1599194576-1495242072.1598773429" ></img>
      <div>
        <a className="btn btn3">Front-end</a>
        <a className="btn btn3">Full-stack</a>
      </div>
    </section>
  );
}

export default Projects;
