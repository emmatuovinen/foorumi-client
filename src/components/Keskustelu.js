import React, { Component } from "react";
import "../Etusivu.css";
import { HaeAlueet } from "../apiClient";
import {
  Link
} from "react-router-dom";



class Keskustelu extends Component {
  state = { alueet: [] };
  componentDidMount() {
    HaeAlueet(data => {
      this.setState({ alueet: data });
    });
  }
  render() {
    let alueet = this.state.alueet.map(alue => (
      <li key={alue.alue_id}> 
      <Link to={"/keskustelu/alue/" + alue.alue_id}>{alue.otsikko}</Link>
      </li>
    ));
    return (
      <div>
        <h1 class="otsikko">Tervetuloa foorumin etusivulle</h1>
        <ul>{alueet}</ul>
      </div>
    );
  }
}

export default Keskustelu;
