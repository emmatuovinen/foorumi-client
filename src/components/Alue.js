import React, { Component } from "react";
import { HaeLangatAlueelta, AikaKuvaus } from "../apiClient";
import { Link } from "react-router-dom";
import UusiLanka from "./UusiLanka";

class Alue extends Component {
  state = { langat: [], alue: { otsikko: "", alue_id: "" } };
  componentDidMount() {
    HaeLangatAlueelta(this.props.match.params.alueid, response => {
      var langat = response.langat;
      var alue = response.alue;
      this.setState({ langat: langat, alue: alue });
    });
  }

  Paivita = () => {
    HaeLangatAlueelta(this.props.match.params.alueid, response => {
      var langat = response.langat;
      var alue = response.alue;
      this.setState({ langat: langat, alue: alue });
    });
    this.setState(this.state);
  };

  render() {
    var langat = this.state.langat.map(lanka => (
      <li className="list-group-item" key={lanka.lanka_id}>
        <Link
          to={"/keskustelu/" + this.state.alue.alue_id + "/" + lanka.lanka_id}
        >
        <div className="d-flex w-100 justify-content-between">
          {lanka.otsikko}
          <small>{AikaKuvaus(lanka.ViimeisimmastaViestistaMinuutteja)}</small>
</div>
        </Link>
      </li>
    ));
    return (
      <div>
        {/* <p>{this.props.match.params.id}</p> */}
        <ul className="list-group">
          {langat}
          {this.props.kayttaja && (
            <UusiLanka
              alueId={this.state.alue.alue_id}
              paivita={this.Paivita}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default Alue;
