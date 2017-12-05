import React, { Component } from 'react';
// import { render, ReactDOM } from 'react-dom';
// import {
// BrowserRouter as Router,
// Route,
// Link
// } from 'react-router-dom';
// import Search from './components/Search';
// import About from './components/About';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div id="super-mega-main-container">
        </div>
      </div>
    );
  }
}

export default App;
