import React, { Component } from "react";
import { HaeAlueet } from "../apiClient";

class Keskustelu extends Component {
  state = { alueet: [] };
  componentDidMount() {
    HaeAlueet(data => {
      this.setState({ alueet: data });
    });
  }
  render() {
    let alueet = this.state.alueet.map(alue => (
      <li key={alue.alue_id}> {alue.otsikko}</li>
    ));
    return (
      <div>
        <h1>Tervetuloa Foorumin etusivulle</h1>
        <ul>{alueet}</ul>
      </div>
    );
  }
}

export default Keskustelu;
