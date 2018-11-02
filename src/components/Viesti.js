import React, { Component } from "react";
import { AikaKuvaus } from "../apiClient";

export default class Viesti extends Component {
  render() {
    let viesti = this.props.viesti;
    return (
      <div className="viesti">
        <div className="otsikko">
          <strong>{viesti.Kirjoittaja.nimimerkki}</strong>: {viesti.otsikko}
          <span>{AikaKuvaus(viesti.MinuuttiaSitten)}</span>
        </div>
        <p>{viesti.viesti}</p>
      </div>
    );
  }
}
