import React, { Component } from "react";
import Sisaankaynti from "./Sisaankaynti";


class Alue extends Component {
  

  render() {
    return (
      <div>
         <p>{this.props.alue.otsikko}</p>
      </div>
      
    );
  }
}

export default Alue;
