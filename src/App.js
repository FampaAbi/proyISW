import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './componentes/menu/Menu';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componentes/home/Home';
import Sala3 from './componentes/home/sala3';
import Sala2 from './componentes/home/sala2';
import Sala1 from './componentes/home/sala1';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4
//import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4
import {Component} from 'react';
//import ReactNotifications from 'react-notifications-component';

class App extends Component{

  constructor(){
    super();
    this.state = {};
  }
  render() {
      return (
          <Router>
              <Switch>
                  <Route path='/' exact={true} component={Home} />
                  <Route path='/sala1' exact={true} component={Sala1}/>
                  <Route path='/sala2' exact={true} component={Sala2}/>
                  <Route path='/sala3' exact={true} component={Sala3}/>
              </Switch>
          </Router>
      );

  }
}


export default App;
