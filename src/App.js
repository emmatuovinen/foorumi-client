import React, { Component } from "react";
import "./App.css";
import Keskustelu from "./components/Keskustelu";
import Kirjautuminen from "./components/Kirjautuminen";
import Rekisteröinti from "./components/Rekisteröinti";

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
      <div>
        <Keskustelu kirjautunut = {käyttäjä} />
        <Kirjautuminen />
        <Rekisteröinti />
      </div>
    );
  }
}

export default App;
