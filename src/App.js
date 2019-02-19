import React, { Component } from 'react';
import logo from './logo.png';
import NavMenu from './components/nav-menu.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h3 style={{margin: `0 auto`}}>Cormick Hnilicka</h3>
      <br/>
        <NavMenu/>
      </div>
    );
  }
}

export default App;
