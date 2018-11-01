import React, { Component } from "react";
import { LuoAlue, HaeKayttajatasot } from "../../apiClient";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import "../../AppBar.css";

class Aluelomake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otsikko: "",
      kuvaus: "",
      rajoitettu: false,
      tasot: []
    };
  }
  componentDidMount() {
    HaeKayttajatasot(data => {
      // console.dir(data);
      var tasot = [];
      for (var i in data) {
        let taso = data[i];
        tasot[taso.kayttajataso_id] = {
          kayttajataso_id: taso.kayttajataso_id,
          nimi: taso.nimi,
          valittu: taso.kayttajataso_id === 1 ? true : false
        };
      }
      this.setState({ tasot: tasot });
    });
  }

  handleRajoitettu = event => {
    this.setState({ rajoitettu: event.target.checked });
  };

  handleRajoitettuValinnat = event => {
    let kayttajataso_id = event.target.value;
    let valinta = event.target.checked;
    let tasot = this.state.tasot;
    tasot[kayttajataso_id]["valittu"] = valinta;
    this.setState({ tasot: tasot });
  };

  handleClick = uusiAlue => {
    LuoAlue(uusiAlue, response => {
      console.log(response);
    });
  };
  render() {
    let tasot = this.state.rajoitettu ? (
      <ul>
        {this.state.tasot.map(taso => (
          <li key={taso.kayttajataso_id}>
            {" "}
            <Checkbox
              checked = {taso.valittu}
              disabled = {taso.kayttajataso_id === 1 ? true : false}
              value={taso.kayttajataso_id}
              label={taso.nimi}
              onClick={this.handleRajoitettuValinnat}
            />
          </li>
        ))}
      </ul>
    ) : (
      ""
    );

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Alueen luominen" className="tausta" />
            <TextField
              hintText="Syötä alueen otsikko"
              floatingLabelText="Otsikko"
              onChange={(event, uusiArvo) =>
                this.setState({ otsikko: uusiArvo })
              }
            />
            <br />
            <TextField
              hintText="Syötä kuvaus"
              floatingLabelText="Kuvaus"
              onChange={(event, uusiArvo) =>
                this.setState({ kuvaus: uusiArvo })
              }
            />
            <Checkbox
              rajoitettu={this.state.valittu}
              onClick={this.handleRajoitettu}
              label="Rajoitettu"
            />
            {tasot}
            <br />
            <RaisedButton
              label="Lisää"
              primary={true}
              style={style}
              onClick={event => this.handleClick(this.state)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Aluelomake;
