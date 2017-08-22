import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Search from './components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <h2>Pokesearch</h2>
          // Insert react router navigation here !!!
          // Remove the app-intro BS below and put it in the Search component or something instead
        </div> */}
        <p className="App-intro">
          Search using the name or ID of a pokemon.
        </p>
        <Search />
      </div>
    );
  }
}

export default App;
