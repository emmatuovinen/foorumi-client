import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Kirjaudu } from "../apiClient";

class Kirjautuminen extends Component {
  constructor(props) {
    super(props);
    this.state = { nimimerkki: "", salasana: "" };
  }

  handleClick = event => {
    Kirjaudu(this.state, response => {
      console.log(response);
      if (typeof response.kayttaja_id !== "undefined") {
          //Kirjautuminen onnistui
      } else {
          //kirjautuminen epäonnistui
      }
    });
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Kirjautuminen" />
            <TextField
              hintText="Syötä nimimerkki"
              floatingLabelText="Nimimerkki"
              onChange={(event, uusiArvo) =>
                this.setState({ nimimerkki: uusiArvo })
              }
            />
            <br />
            <TextField
              hintText="Syötä salasana"
              floatingLabelText="Salasana"
              onChange={(event, uusiArvo) =>
                this.setState({ salasana: uusiArvo })
              }
            />
            <br />
            <RaisedButton
              label="Kirjaudu"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
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

export default Kirjautuminen;
