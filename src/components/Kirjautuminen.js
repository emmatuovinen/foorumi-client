import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import { Kirjaudu } from "../apiClient";

class Kirjautuminen extends Component {
  constructor(props) {
    super(props);
    this.state = { nimimerkki: "", salasana: "" , kayttaja: false };
  }

  handleClick = kayttaja => {
    Kirjaudu(kayttaja, response => {
      console.log(response);
      if (typeof response.kayttaja_id !== "undefined") {
          //Kirjautuminen onnistui
          this.setState({kayttaja: response })
      } else {
          //kirjautuminen epäonnistui
      }
    });
  };

  
  render() {
    var sisalto = !this.state.kayttaja? <Kirjautumislomake handleClick= {this.handleClick} /> : <Sisalla />;
    return (
      <div>
        {sisalto}
      </div>
    );
  }
}
const style = {
  margin: 15
};

class Kirjautumislomake extends Component {
    state = {nimimerkki: '', salasana: ''}
    render(){
    return(
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
            onClick={event => this.props.handleClick(this.state)}
          />
        </div>
      </MuiThemeProvider>);
      }
}

function Sisalla() {
    return(
        <div>
            Moi
        </div>
    )
}

export default Kirjautuminen;
