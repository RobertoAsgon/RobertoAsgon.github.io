import React from 'react';
import './Trybe.css';
import TrybeLogo from '../../assets/images/trybe.png';
import Launch from '../../assets/images/launch_player.png'
import { Link } from 'react-router-dom';

function Trybe() {
  return (
    <section className="trybe-section fade-in-bottom">
      <article className="trybe-article">
        <div id="right">
          <img src={TrybeLogo} alt="trybe"></img>
          <h1>Acelere sua carreira também !</h1>
          <p>A Trybe é a escola que se compromete com o seu sucesso e acelera sua carreira em aproximadamente 12 meses.. E mais! Você só paga quando conseguir um trabalho que remunere, no mínimo, R$ 3.500,00 !</p>
          <Link id="animated-word">Conheça a Trybe</Link>
        </div> 
        <div id="left">
          <img  id="element" src={Launch} alt="launch" freepik="https://stories.freepik.com/?_ga=2.128526796.1541234574.1599194576-1495242072.1598773429" ></img>
        </div>
      </article>
    </section>
  );
}

export default Trybe;
