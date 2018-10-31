import React, { Component } from "react";
import "./App.css";
import Keskustelu from "./components/Keskustelu";
import Kirjautuminen from "./components/Kirjautuminen";
import Rekisterointi from "./components/Rekisterointi";
import Sisaankaynti from './components/Sisaankaynti';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";


var käyttäjä = {
  kayttaja_id: 0,
  kayttajataso: {
    kayttajataso_id: 0,
    nimi: "admin"
  },
  email: "pekka@asekauppias.fi",
  nimimerkki: "Pekka",
  kuvaus: "Olen Pekka. Intohimoinen aseharrastaja ja lasten ystävä.",
  aktiivisuus: Date.now()
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          
          <Keskustelu kirjautunut={käyttäjä} />
          <Route exact path="/" component={Sisaankaynti} />
          <Route path="/kirjaudu" component={Kirjautuminen} />
          <Route path="/rekisteroi" component={Rekisterointi} />
          
        </div>
      </Router>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact activeClassName="active">Sisäänkäynti</NavLink>&ensp;
        <NavLink to="/kirjaudu" activeClassName="active">Kirjautumissivu</NavLink>&ensp;
        <NavLink to="/rekisteroi" activeClassName="active">Rekisteröityminen</NavLink>
        
        
      </div>
    );
  }
}

export default App;
