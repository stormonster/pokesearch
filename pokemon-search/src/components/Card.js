import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props);
        this.state={
          selectedType: "overview",
        }
    }
    
  setType=(event) => {
    this.setState({
      selectedType: event.target.value,
    })
  }
    
  render(){
    if(this.props.data !== null){
      if(this.state.selectedType === "overview"){
        var cardContent = (
          <div className="card-content">
            <div className="card-item">
              <b className="item">ID:</b> <p className="item">{this.props.data.id}</p>
            </div>
            <div className="card-item">
              <b className="item">Type:</b> <p className="item">{this.props.data.types[0].type.name}</p>
            </div>
          </div>
          );
        }else if(this.state.selectedType === "stats") {
          cardContent = (
            <div className="card-content">
              <div className="card-item">
                <b className="item">HP:</b> <p className="item">{this.props.data.stats[5].base_stat}</p>
              </div>
              <div className="card-item">
                <b className="item">Speed:</b> <p className="item">{this.props.data.stats[0].base_stat}</p>
              </div>
              <div className="card-item">
                <b className="item">Attack:</b> <p className="item">{this.props.data.stats[4].base_stat}</p>
              </div>
              <div className="card-item">
                <b className="item">Defense:</b> <p className="item">{this.props.data.stats[3].base_stat}</p>
              </div>
            </div>
          );
        }else if(this.state.selectedType === "traits") {
          cardContent = (
            <div className="card-content">
              <div className="card-item">
                <b className="item">Height:</b> <p className="item">{this.props.data.height}"</p>
              </div>
              <div className="card-item">
                <b className="item">Weight:</b> <p className="item">{this.props.data.weight}lbs</p>
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

    return(
          <div className="card-container">
            <div className="card-picture" style={{backgroundImage: 'url(' + this.props.data.sprites.front_default + ')'}}>
            </div>
            <div className="card">
              <h1>{this.props.data.name}</h1>
                {buttonContainer}
                {cardContent}
            </div>
          </div>
    );
  }
}

export default Card;
