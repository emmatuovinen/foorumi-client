import React, { Component } from "react";
import "./App.css";
import Keskustelu from "./components/Keskustelu";
import Kirjautuminen from "./components/Kirjautuminen";
import Rekisterointi from "./components/Rekisterointi";
import Alue from "./components/Alue";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Aluehallinta from "./components/admin/Aluehallinta";
import Lanka from "./components/Lanka";
import { UudelleenKirjaudu, KirjauduUlos } from "./apiClient";

class App extends Component {
  state = {
    kayttaja: false
  };
  componentDidMount(){
    if(typeof localStorage.jwt !== 'undefined'){
      UudelleenKirjaudu(this.loginOnnistui);
    }
  }

  ulosKirjaus = () => {
    KirjauduUlos(response => {
      
      this.setState( {
        kayttaja: false
      });
    })
  }

  loginOnnistui = kayttaja => {
    this.setState({ kayttaja: kayttaja });
  };
  render() {
    return (
      <div>
        <Router>
          <MuiThemeProvider>
            <div className="content mainWrapper">
              <Navigation kayttaja={this.state.kayttaja} />
              <div className="content sisalto">
                <Route exact path="/" render={() => <Keskustelu kayttaja={this.state.kayttaja}/>} />
                <Route path="/kirjaudu" render={() => <Kirjautuminen kayttaja={this.state.kayttaja}  loginOnnistui={this.loginOnnistui}/>} />

                <Route path="/rekisteroi" component={Rekisterointi} />
                <Route path="/admin" render={() => <Aluehallinta kayttaja={this.state.kayttaja}/>} />
                <Route exact path="/keskustelu/:alueid" render={(props) => <Alue {...props} kayttaja={this.state.kayttaja}/>} />
                <Route path="/keskustelu/:alueid/:lankaid" render={(props) => <Lanka {...props}  kayttaja={this.state.kayttaja}/>} />
              </div>
            </div>
          </MuiThemeProvider>
        </Router>
        <div className="d-flex w-100 justify-content-between center">
          <button onClick={this.ulosKirjaus}>
            Kirjaudu ulos
          </button>
        </div>
      </div>
    );
  }
}

class Navigation extends Component {
  render() {
    return (
      <div className="content">
        <nav>
          <NavLink to="/" exact activeClassName="active">
            Keskustelu
          </NavLink>
          &ensp;
          {!this.props.kayttaja && (
            <React.Fragment>
              <NavLink to="/kirjaudu" activeClassName="active">
                Kirjaudu
              </NavLink>
              &ensp;
              <NavLink to="/rekisteroi" activeClassName="active">
                Rekisteröidy
              </NavLink>
              &ensp;
            </React.Fragment>
          )}
          {this.props.kayttaja && (
            <NavLink to="/profiili" activeClassName="active">
              Profiili
            </NavLink>
          )}
          &ensp;
          {this.props.kayttaja && this.props.kayttaja.Kayttajatasot.kayttajataso_id === 1 && (
            <NavLink to="/admin" activeClassName="active">
              Admin
            </NavLink>
          )}
        </nav>
      </div>
    );
  }
}

export default App;
