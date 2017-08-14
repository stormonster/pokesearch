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



  search=() => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.state.searchString}`).then((response) => {
      response.json().then((parsedData) => {
        this.setState({
          data: parsedData,
          lastPokemon: parsedData.name,
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
      searchType: event.target.value,
    })
  }

  render(){
    const searchField = (
      <div className="search-container">
        <div>
          <input type="text" onChange={this.onChange} value={this.state.searchString} />
          <button onClick={this.search}>Search</button>
        </div>
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

    if(this.state.selectedType == "strength"){
      return (
        <div>
          {searchField}
          <div className="main-container">
            <div className="card-container">
              <div className="card-picture" style={{backgroundImage: 'url(' + this.state.data.sprites.front_default + ')'}}>
              </div>
              <div className="card">
                <h1>{this.state.data.name}</h1>
                <div className="button-container">
                  <button id="overview" value="overview" onClick={this.overview}>Overview</button>
                  <button id="strength" value="strength" onClick={this.strength}>Strengths</button>
                  <button id="weakness" value="ability" onClick={this.ability}>Abilities</button>
                </div>
                <div className="card-content">
                  <div className="card-item">
                    <b className="item">ID:</b> <p className="item">{this.state.typeData.id}</p>
                  </div>
                  <div className="card-item">
                    <b className="item">Type:</b> <p className="item">{this.state.typeData.name}</p>
                  </div>
                  <div className="card-item">
                    <b className="item">Strong defense:</b> <p className="item">{this.state.typeData.damage_relations.half_damage_from[0].name}</p>
                  </div>
                  <div className="card-item">
                    <b className="item">Weak defense:</b> <p className="item">{this.state.typeData.damage_relations.double_damage_from[0].name}</p>
                  </div>
                  <div className="card-item">
                    <b className="item">Double damage:</b> <p className="item">{this.state.typeData.damage_relations.double_damage_to[0].name}</p>
                  </div>
                  <div className="card-item">
                    <b className="item">Half damage:</b> <p className="item">{this.state.typeData.damage_relations.half_damage_to[0].name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if(this.state.selectedType == "overview"){
      return (
        <div>
          {searchField}
          <div className="main-container">
            <div className="card-container">
              <div className="card-picture" style={{backgroundImage: 'url(' + this.state.data.sprites.front_default + ')'}}>
              </div>
              <div className="card">
                <h1>{this.state.data.name}</h1>
                <div className="button-container">
                  <button id="overview" value="overview" onClick={this.overview}>Overview</button>
                  <button id="strength" value="strength" onClick={this.strength}>Strengths</button>
                  <button id="weakness" value="ability" onClick={this.ability}>Abilities</button>
                </div>
                <div className="card-content">
                  <div className="card-item">
                    <b className="item">ID:</b> <p className="item">{this.state.data.id}</p>
                  </div>
                  <div className="card-item">
                    <b className="item">Type:</b> <p className="item">{this.state.data.types[0].type.name}</p>
                  </div>
                  <div className="card-item">
                    <b className="item">Height:</b> <p className="item">{this.state.data.height}"</p>
                  </div>
                  <div className="card-item">
                    <b className="item">Weight:</b> <p className="item">{this.state.data.weight}lbs</p>
                  </div>
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
                  {/* <pre>
                    {JSON.stringify(this.state.typeData)}
                  </pre> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Search;
