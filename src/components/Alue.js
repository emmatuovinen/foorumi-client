import React, { Component } from "react";
import { HaeLangatAlueelta } from "../apiClient";
import {
  Link
} from "react-router-dom";
import UusiLanka from './UusiLanka';


class Alue extends Component {
  state = {langat:[], alue: {otsikko: "", alue_id: ""}}
  componentDidMount() {
    HaeLangatAlueelta(this.props.match.params.id, response => {
      var langat = response.langat;
      var alue = response.alue;
      this.setState({langat : langat, alue: alue});
    })
  }

  Paivita = () => { this.setState(this.state)};

  render() {
    var langat = this.state.langat.map(lanka => 
      <li key={lanka.lanka_id}>
      <Link to={"/keskustelu/lanka/" + lanka.lanka_id}>{lanka.otsikko}</Link>
      </li>)
    return (
      <div>
         {/* <p>{this.props.match.params.id}</p> */}
         <ul>
           {langat}
           <UusiLanka alueId = {this.state.alue.alue_id} paivita = {this.Paivita}/>
         </ul>
      </div>
      
    );
  }
}

export default Alue;
