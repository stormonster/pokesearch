import React, { Component } from 'react';
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
      selectedType: "overview",
    }
  }

  // componentWillMount=() => {
  //     <img src="/static/media/logo.c8b36e88.png" class="App-logo" alt="logo" />
  //   }

  search=() => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.state.searchString}`).then((response) => {
      response.json().then((parsedData) => {
        this.setState({
          data: parsedData,
          lastPokemon: parsedData.name,
          selectedType: "overview",
        })
      })
    })
  }

  strength=() => {
    fetch(`http://pokeapi.co/api/v2/type/${this.state.data.types[0].type.name}`).then((response) => {
      response.json().then((parsedData) => {
        this.setState({
          typeData: parsedData,
          selectedType: "strength",
        })
      })
    })
  }

  onChange=(event) => {
    this.setState({
      searchString: event.target.value.toLowerCase(),
    })
  }

  setType=(event) => {
    this.setState({
      selectedType: event.target.value,
    })
    this.forceUpdate()
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

    if(this.state.data !== null){
      if (this.state.selectedType === "overview"){
        var cardContent = (
          <div className="card-content">
            <div className="card-item">
              <b className="item">ID:</b> <p className="item">{this.state.data.id}</p>
            </div>
            <div className="card-item">
              <b className="item">Type:</b> <p className="item">{this.state.data.types[0].type.name}</p>
            </div>
          </div>
          );
        } else if(this.state.selectedType === "stats") {
          var cardContent = (
            <div className="card-content">
              <div className="card-item">
                <b className="item">HP:</b> <p className="item">{this.state.data.stats[5].base_stat}</p>
              </div>
              <div className="card-item">
                <b className="item">Speed:</b> <p className="item">{this.state.data.stats[0].base_stat}</p>
              </div>
              <div className="card-item">
                <b className="item">Attack:</b> <p className="item">{this.state.data.stats[4].base_stat}</p>
              </div>
              <div className="card-item">
                <b className="item">Defense:</b> <p className="item">{this.state.data.stats[3].base_stat}</p>
              </div>
            </div>
          );
        } else if(this.state.selectedType === "traits") {
          var cardContent = (
            <div className="card-content">
              <div className="card-item">
                <b className="item">Height:</b> <p className="item">{this.state.data.height}"</p>
              </div>
              <div className="card-item">
                <b className="item">Weight:</b> <p className="item">{this.state.data.weight}lbs</p>
              </div>
            </div>
          );
        }
    }

    var buttonContainer = (
      <div className="button-container">
        <button id="overview" value="overview" onClick={this.setType}>Overview</button>
        <button id="stats" value="stats" onClick={this.setType}>Stats</button>
        <button id="traits" value="traits" onClick={this.setType}>Traits</button>
      </div>
    );

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
          <div className="card-container">
            <div className="card-picture" style={{backgroundImage: 'url(' + this.state.data.sprites.front_default + ')'}}>
            </div>
            <div className="card">
              <h1>{this.state.data.name}</h1>
                {buttonContainer}
                {cardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
