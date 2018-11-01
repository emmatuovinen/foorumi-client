import React, { Component } from "react";
import {HaeAlueet} from '../../apiClient';
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
    var alueet = this.state.alueet.map(alue => <li key={alue.alue_id}> {alue.otsikko} </li>);
    return( 
    <div>
        <ul>
        {alueet}
        </ul>
        <Aluelomake />
    </div>
    )}
}

export default Aluehallinta;
