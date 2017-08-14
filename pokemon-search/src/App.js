import React, { Component } from 'react';
import logo from './logo.png';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokesearch</h2>
        </div>
        <p className="App-intro">
          Search using the name or ID of a pokemon.
        </p>
        <Search />
      </div>
    );
  }
}

export default App;
