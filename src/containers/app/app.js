import React, { Component } from 'react';
import {Link} from 'react-router';

import logo from '../../logo.svg';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>City Bikes Around the World!</h2>
        </div>
        <p className="App-intro">
          <Link to="/cities">Cities</Link>
        </p>
      </div>
    );
  }
}

export default App;
