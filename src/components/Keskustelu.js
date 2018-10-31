import React, { Component } from "react";
import { HaeAlueet } from "../apiClient";


function Alue(props) {
  let alue = props.alue;
  return <li>Tekstiä</li>;
}

class Keskustelu extends Component {
  state = { alueet: [] };
  componentDidMount() {
    HaeAlueet(data => {
      this.setState({ alueet: data });
    });
  }
  render() {
    let alueet = this.state.alueet.map(alue => <Alue alue={alue} key={alue.alue_id} />);
    return (
      <div>
        <ul>{alueet}</ul>
       
      </div>
    );
  }
}

export default Keskustelu;
