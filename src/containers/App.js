import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Films from '../components/Films';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Characters from '../components/Characters';
import Planets from '../components/Planets';
import Species from '../components/Species';
import Starships from '../components/Starships';
import Vehicles from '../components/Vehicles';
import '../index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/characters" component={Characters} />
          <Route path="/planets" component={Planets} />
          <Route path="/species" component={Species} />
          <Route path="/starships" component={Starships} />
          <Route path="/vehicles" component={Vehicles} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
