import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header/index';
import AboutMe from '../components/AboutMe/index';
import Trybe from '../components/Trybe/index';
import Projects from '../components/Projects/index';
import './App.css';

function App() {
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/trybe" component={Trybe} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  )
}

export default App;
