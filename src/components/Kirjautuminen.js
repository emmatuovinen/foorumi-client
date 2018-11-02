import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Kirjaudu } from "../apiClient";


class Kirjautuminen extends Component {
  constructor(props) {
    super(props);
    this.state = { nimimerkki: "", salasana: "", kayttaja: false };
  }

  handleClick = (kayttaja, callbackFail) => {
    Kirjaudu(kayttaja, response => {
      if (typeof response.kayttaja_id !== "undefined") {
        //Kirjautuminen onnistui
        // this.setState({ kayttaja: response });
        this.props.loginOnnistui(response);
      } else {
        //kirjautuminen epäonnistui
        this.setState(this.state);
        callbackFail();
      }
    });
  };

  render() {
    var sisalto = !this.props.kayttaja ? (
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
        <div className="content sisalto"> 
          <b>Kirjaudu sisään:</b>
          <div>
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
            type="password"
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
          <RaisedButton
            disabled={this.state.nappiKäytössä ? false : true}
            label="Rekisteröidy"
            style={style}
            href="rekisteroi"
          /></div>
        </div>
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
