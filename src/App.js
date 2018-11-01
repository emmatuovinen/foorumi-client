import React, { Component } from "react";
import "./App.css";
import Keskustelu from "./components/Keskustelu";
import Kirjautuminen from "./components/Kirjautuminen";
import Rekisterointi from "./components/Rekisterointi";
import Alue from './components/Alue';

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import Aluehallinta from "./components/admin/Aluehallinta";


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
          
          <Route exact path="/" component={Keskustelu} />
          <Route path="/kirjaudu" component={Kirjautuminen} />
          <Route path="/rekisteroi" component={Rekisterointi} />
          <Route path="/admin" component={Aluehallinta} />
          <Route path="/keskustelu/alue/:id" component={Alue} />


        </div>
      </Router>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav class="navtyyli">
        <NavLink to="/" exact activeClassName="active">Keskustelu</NavLink>&ensp;
        <NavLink to="/kirjaudu" activeClassName="active">Kirjautumissivu</NavLink>&ensp;
        <NavLink to="/rekisteroi" activeClassName="active">Rekisteröityminen</NavLink>&ensp;
        <NavLink to="/admin" activeClassName="active">Aluehallinta</NavLink>
        </nav>

        
        
      </div>
    );
  }
}

export default App;
