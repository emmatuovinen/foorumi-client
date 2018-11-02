import React, { Component } from "react";
import { HaeViestitLangalta } from "../apiClient";
import Viesti from "./Viesti";
import UusiViesti from "./UusiViesti";

export default class Lanka extends Component {
  lankaId = this.props.match.params.lankaid;
  state = { lanka: "{}", viestit: [] };
  componentDidMount() {
    HaeViestitLangalta(this.lankaId, response => {
      this.setState({ lanka: response.lanka, viestit: response.viestit });
    });
  }
  paivita = () => {
    HaeViestitLangalta(this.lankaId, response => {
        this.setState({ lanka: response.lanka, viestit: response.viestit });
      });
  }
  render() {
    var viestit = this.state.viestit.map(v => (
      <Viesti viesti={v} key={v.viesti_id} />
    ));
    return <div><h2>{this.state.lanka.otsikko}</h2>
    {viestit}
    {!this.state.lanka.lukittu && this.props.kayttaja &&<UusiViesti lankaId={this.lankaId} paivita={this.paivita}/> }
    </div>;
  }
}
