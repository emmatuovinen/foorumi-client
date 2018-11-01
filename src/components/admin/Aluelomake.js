import React, { Component } from 'react';
import {LuoAlue} from '../../apiClient';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class Aluelomake extends Component {
    constructor(props) {
        super(props);
        this.state = {
          otsikko: "",
          kuvaus: ""
        };
      }
    
      handleClick = uusiAlue => {
        LuoAlue(uusiAlue, response => {
          console.log(response);
        });
      };
    render() {
        return (
            <div>
                <MuiThemeProvider>
          <div>
            <AppBar title="Alueen luominen" />
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