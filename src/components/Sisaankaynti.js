import React, { Component } from "react";
import Alue from "./Alue";
import { HaeAlueet } from "../apiClient";

class Sisaankaynti extends Component {
  state = { alueet: [] };

  componentDidMount() {
    HaeAlueet(data => {
      console.dir(data);
      this.setState({ alueet: data });
    });
  }
  render() {
    var alueet = this.state.alueet.map(alue => <Alue alue={alue} key={alue.alue_id} />);

    return (
      <div>
        <h1>Tervetuloa Foorumin etusivulle</h1>
        <ul>{alueet}</ul>
      </div>
    );
  }
}

export default Sisaankaynti;
