import React, { Component } from 'react';
import {LuoAlue, HaeKayttajatasot} from '../../apiClient';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";

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
          console.dir(data);
          this.setState({ tasot: data });
        });
      }
    
      handleRajoitettu = event => {
        this.setState({rajoitettu : event.target.checked})
      }

      handleClick = uusiAlue => {
        LuoAlue(uusiAlue, response => {
          console.log(response);
        });
      };
    render() {
      let tasot = this.state.rajoitettu ? <ul>{this.state.tasot.map(taso => (
        <li key={taso.kayttajataso_id}> {taso.nimi}</li> 
      ))}</ul> : "";

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