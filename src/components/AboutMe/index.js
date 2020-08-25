import React from 'react';
import './AboutMe.css';
import DevBroGiff from '../../assets/images/dev-bro.png';
import Perfil from '../../assets/images/perfil.jpg';
import RoomIcon from '@material-ui/icons/Room';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ReactTypingEffect from 'react-typing-effect';

const github = 'https://github.com/RobertoAsgon';
const linkedin = 'https://www.linkedin.com/in/roberto-assis-gon%C3%A7alves-286a641a1/';

function AboutMe() {
  return (
    <section className="aboutMe-section">
      <aside className="fade-in-left perfil-aside">
        <img src={Perfil} alt="Perfil"></img>
        <h1>Roberto Assis</h1>
        <div>
          <p><RoomIcon id="color" /> Brasil</p>
          <p><LoyaltyIcon id="color" /> 23 Anos</p>
          <a href={github} target="_blank"> <GitHubIcon id="color" /> Github</a><br />
          <a href={linkedin} target="_blank"> <LinkedInIcon id="color" /> Linkedin</a>
          <p><MailOutlineIcon id="color" /> robertoasgon@gmail.com</p>
        </div>
      </aside>
      <article className="fade-in-right aboutMe-article">
        <ReactTypingEffect
          eraseDelay="1000"
          speed="50"
          typingDelay="0"
          className="Typing"
          staticText="Desenvolvedor Full Stack JavaScript com"
          text={["NodeJS !", "ReactJS !", "MySQL !", "MongoDB !"]}
        />
        <img src={DevBroGiff} alt="ArticleImg"></img>
      </article>
    </section>
  );
}

export default AboutMe;
