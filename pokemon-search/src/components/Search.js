import React, { Component } from 'react';
import Card from './Card';
import logo from '../logo.png';
import '../App.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      data: null,
      lastPokemon: null,
      searchString: null,
      searchType: null,
      typeData: null,
      isLoaded: false,
      error: null,
    }
  }

  search=() => {
    this.setState({
      isLoaded: true,
    })
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.state.searchString}`).then((response) => {
      response.json().then((parsedData) => {
        this.setState({
          data: parsedData,
          lastPokemon: parsedData.name,
          selectedType: "overview",
          isLoaded: false,
          error: parsedData.detail,
        })
      })
    })
  }

  onChange=(event) => {
    this.setState({
      searchString: event.target.value.toLowerCase(),
    })
  }

  render(){
    const searchField = (
      <div className="search-container">
        <div>
          <input type="text" className="search-field" onChange={this.onChange} value={this.state.searchString} />
          <button className="search-button" onClick={this.search}>Search</button>
        </div>
      </div>
    );

    if(this.state.isLoaded){
      return(
        <div>
          {searchField}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      );
    }

    if(this.state.error){
      return(
        <div>
          {searchField}
          {this.state.error}
        </div>
      )
    }

    if(!this.state.data){
      return (
        <div>
          {searchField}
           <div>Nothing has been loaded.</div> 
        </div>
      );
    }

    return (
      <div>
        {searchField}
        <div className="main-container">
          <Card data={this.state.data}/>
        </div>
      </div>
    );
  }
}

export default Search;
