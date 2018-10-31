import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Kirjaudu } from "../apiClient";

class Kirjautuminen extends Component {
  constructor(props) {
    super(props);
    this.state = { nimimerkki: "", salasana: "", kayttaja: false };
  }

  handleClick = (kayttaja, callback) => {
    Kirjaudu(kayttaja, response => {
      console.log(response);
      if (typeof response.kayttaja_id !== "undefined") {
        //Kirjautuminen onnistui
        this.setState({ kayttaja: response });
      } else {
        //kirjautuminen epäonnistui

        this.setState(this.state);
        callback();
      }
    });
  };

  render() {
    var sisalto = !this.state.kayttaja ? (
      <Kirjautumislomake handleClick={this.handleClick} />
    ) : (
      <Sisalla kayttaja={this.state.kayttaja} />
    );
    return <div>{sisalto}</div>;
  }
}
const style = {
  margin: 15
};

class Kirjautumislomake extends Component {
  state = { nimimerkki: "", salasana: "", nappiKäytössä: true, onVirhe: false };
  handleClick = event => {
    this.setState({ nappiKäytössä: false, onVirhe:false });
    this.props.handleClick(
      this.state,
      function() {
        this.setState({ nappiKäytössä: true, salasana: "", onVirhe: true });
      }.bind(this)
    );
  };

  render() {
    var virheilmoitus = this.state.onVirhe ? (
      <div className="virheilmoitus">
        <strong>Virhe!</strong> Kirjautuminen epäonnistui
      </div>
    ) : (
      ""
    );
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Kirjautuminen" />
          {virheilmoitus}
          <TextField
            value={this.state.nimimerkki}
            hintText="Syötä nimimerkki"
            floatingLabelText="Nimimerkki"
            onChange={(event, uusiArvo) =>
              this.setState({ nimimerkki: uusiArvo })
            }
          />
          <br />
          <TextField
            value={this.state.salasana}
            hintText="Syötä salasana"
            floatingLabelText="Salasana"
            onChange={(event, uusiArvo) =>
              this.setState({ salasana: uusiArvo })
            }
          />
          <br />
          <RaisedButton
            disabled={this.state.nappiKäytössä ? false : true}
            label="Kirjaudu"
            primary={true}
            style={style}
            onClick={this.handleClick}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

function Sisalla(props) {
  var kayttaja = props.kayttaja;
  return (
    <div>
      Moi <b>{kayttaja.nimimerkki}</b>
    </div>
  );
}

export default Kirjautuminen;
