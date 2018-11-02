import React, { Component } from "react";
import { HaeAlueet } from "../../apiClient";
import Aluelomake from "./Aluelomake";

class Aluehallinta extends Component {
  state = { alueet: [] };

  componentDidMount() {
    HaeAlueet(data => {
      // console.dir(data);
      this.setState({ alueet: data });
    });
  }
  render() {
    var alueet = this.state.alueet.map(alue => (
      <li className="list-group-item" key={alue.alue_id}>
        {" "}
        {alue.otsikko}{" "}
      </li>
    ));
    return (
      <div>
        <h1>Hallinnoi alueita</h1>
        <div className="sisalto content">
        <ul className="list-group">{alueet}</ul></div>
        <Aluelomake />
      </div>
    );
  }
}

export default Aluehallinta;
