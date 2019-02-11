import React, { Component } from 'react';
import logo from './logo.svg';
import NavMenu from './components/nav-menu.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu/>
      </div>
    );
  }
}

export default App;
