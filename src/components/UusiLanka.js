import React, { Component } from "react";
import TextField from "material-ui/TextField";
import { LisääLanka } from "../apiClient";
import RaisedButton from "material-ui/RaisedButton";

class UusiLanka extends Component {
  state = { otsikko: "" };

  handleLanka = uusiLanka => {
    LisääLanka(uusiLanka, this.props.alueId, this.props.paivita);
  };
  //   componentDidMount() {
  //     HaeViestitLangalta(this.props.match.params.id, response => {
  //       var viestit = response.viestit;
  //       this.setState({ viestit: viestit });
  //     });
  //   }
  render() {
    return (
      <div>
            <TextField
              hintText="Syötä langan otsikko"
              floatingLabelText="Otsikko"
              onChange={(event, uusiArvo) =>
                this.setState({ otsikko: uusiArvo })
              }
            />

            <RaisedButton
              label="Lisää"
              primary={true}
              onClick={event => this.handleLanka(this.state)}
            />
      </div>
    );
  }
}

export default UusiLanka;
