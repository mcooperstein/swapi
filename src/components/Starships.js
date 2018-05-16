import React from 'react';

class Starships extends React.Component {
  constructor(){
    super()

    this.state = {
      ships: []
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/starships/').then(response => {
      return response.json();
    }).then(ships => {
      this.setState({ships: ships.results.map(ship=>{
        return ship;
      })})
    })
  }

  render(){
    const {ships} = this.state;
    console.log(ships);
    return !ships.length ? <h1>Loading...</h1> :
    (
      <div>
        <h1>Starships</h1>
        <ol>
          {ships.map((ship, index) => {
            return <li key={index}><span style={{fontWeight: 'bolder'}}>{ship.name}</span>, amount of crew: {ship.crew}</li>
          })}
        </ol>
      </div>
    )
  }

}

export default Starships;
