import React from 'react';
import './Header.css';
import LogoDev from '../../assets/images/logo_dev_junior_white.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="fade-in-top">
      <container>
        <img src={LogoDev} alt=""></img>
        <div>
          <Link id="Nav" to="/">Inicio</Link>
          <Link id="Nav" to="/trybe">Trybe</Link>
          <Link id="Nav" to="/projects">Projetos</Link>
        </div>
      </container>
    </header>
  );
}

export default Header;
