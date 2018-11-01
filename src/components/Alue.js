import React, { Component } from "react";
import { HaeLangatAlueelta } from "../apiClient";
import {
  Link
} from "react-router-dom";
import UusiLanka from './UusiLanka';


class Alue extends Component {
  state = {langat:[], alue: {otsikko: ""}}
  componentDidMount() {
    HaeLangatAlueelta(this.props.match.params.id, response => {
      var langat = response.langat;
      this.setState({langat : langat});
    })
  }

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
           <UusiLanka />
         </ul>
      </div>
      
    );
  }
}

export default Alue;
