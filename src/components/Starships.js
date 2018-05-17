import React from 'react';

class Starships extends React.Component {
  constructor(){
    super()

    this.state = {
      ships: []
    }
  }

  async componentDidMount(){
    const data = await fetch('https://swapi.co/api/starships/');
    const response = await data.json();
    this.setState({
      ships: response.results.map(ship => {
        return ship;
      })
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
