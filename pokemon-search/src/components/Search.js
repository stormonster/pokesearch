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
      searchString: "",
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
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.searchString}`).then((response) => {
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
          <input type="text" className="search-field" onChange={this.onChange} placeholder="Enter Pokemon..." value={this.state.searchString} />
          <button type="submit" id="search-button" className="search-button" onClick={this.search} value="Search">Search</button>
        </div>
      </div>
    );

    if(this.state.isLoaded){
      return(
        <div className="search-container-super-awesome">
          {searchField}
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
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
