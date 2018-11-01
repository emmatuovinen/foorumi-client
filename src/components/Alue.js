import React, { Component } from "react";
import { HaeLangatAlueelta } from "../apiClient";


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
      <li key={lanka.lanka_id}>{lanka.otsikko}</li>)
    return (
      <div>
         {/* <p>{this.props.match.params.id}</p> */}
         <ul>
           {langat}
         </ul>
      </div>
      
    );
  }
}

export default Alue;
