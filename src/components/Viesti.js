import React, { Component } from 'react';
import TextField from "material-ui/core/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {LisääViesti} from '../apiClient';


class Viesti extends Component {
    constructor(props) {
        super(props);
        this.state = {
          otsikko: "",
          viesti: ""
        };
      }
      handleViesti = uusiViesti => {
        LisääViesti(uusiViesti, response => {
          console.log(response);
        });
      };
    render() {
        return (
        <form noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          onChange={(event, uusiArvo) =>
            this.setState({ otsikko: uusiArvo })}
          margin="normal"
          />
          <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows="8"
          defaultValue="Default Value"
          onChange={(event, uusiArvo) =>
            this.setState({ viesti: uusiArvo })}
          margin="normal"
        />
        <RaisedButton
              label="Kommentoi"
              primary={true}
              onClick={event => this.handleViesti(this.state)}
            />
          </form>
        );
    }
}

export default Viesti;