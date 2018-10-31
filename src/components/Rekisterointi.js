import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import axios from "axios";
import { LisaaKayttaja } from "../apiClient";


class Rekisterointi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nimimerkki: "",
      email: "",
      kuvaus: "",
      salasana: ""
    };  
  }

  handleClick = luoKayttaja => {
    LisaaKayttaja(luoKayttaja, response => {
      console.log(response);
    })
  }
  
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Rekisteröityminen" />
            <TextField
              hintText="Syötä nimimerkki"
              floatingLabelText="Nimimerkki"
              onChange={(event, uusiArvo) =>
                this.setState({ nimimerkki: uusiArvo })
              }
            />
            <br />
            <TextField
              hintText="Syötä email"
              type="email"
              floatingLabelText="Email"
              onChange={(event, uusiArvo) =>
                this.setState({ email: uusiArvo })}
            />
            <br />
            <TextField
              hintText="Syötä kuvaus"
              floatingLabelText="Kuvaus"
              onChange={(event, uusiArvo) =>
                this.setState({ kuvaus: uusiArvo })
              }
            />
            <br />
            <TextField
              hintText="Syötä salasana"
              type="password"
              floatingLabelText="Salasana"
              onChange={(event, uusiArvo) =>
                this.setState({ salasana: uusiArvo })
              }
            />
            <br />
            <RaisedButton
              label="Rekisteröidy"
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

export default Rekisterointi;
