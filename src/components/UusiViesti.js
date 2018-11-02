import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

import RaisedButton from "material-ui/RaisedButton";
import { LisääViesti } from "../apiClient";

class UusiViesti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otsikko: "",
      viesti: ""
    };
  }
  handleViesti = (uusiViesti) => {
    let data = Object.assign({lanka_id: this.props.lankaId}, uusiViesti);
    console.dir(data);
    LisääViesti(data, response => {
      this.setState({
        otsikko: "",
        viesti: ""
      });
      this.props.paivita();
    });
  };
  render() {
    return (
      <div className="viesti">
        <TextField
          id="standard-name"
          label="Otsikko"
          value={this.state.otsikko}
          onChange={(event) => this.setState({ otsikko: event.target.value })}
          margin="normal"
          className="uusiViestiInput"
        />
        <TextField
          id="standard-multiline-static"
          label="Viesti"
          
          value={this.state.viesti}
          multiline
          rows={8}
          onChange={(event) => this.setState({ viesti: event.target.value })}
          margin="normal"
          
          className="uusiViestiInput"
        />
        <RaisedButton
          label="Lisää vastaus"
          primary={true}
          onClick={event => this.handleViesti(this.state)}
          className="uusiViestiButton"
        /><div className="clear" ></div>
      </div>
    );
  }
}

export default UusiViesti;
