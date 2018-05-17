import React from 'react';

class Vehicles extends React.Component {
  constructor(){
    super()

    this.state = {
      vehicles: []
    }
  }

  async componentDidMount(){
    let data = await fetch('https://swapi.co/api/vehicles/')
    let response = await data.json();
    let results = response.results;
    this.setState({
      vehicles: results.map(ship=>{
      return ship;
    })})
  }

  render(){
    const {vehicles} = this.state;
    console.log(vehicles);
    return !vehicles.length ? <h1>Loading...</h1> :
    (
      <div>
        <h1>Vehicles</h1>
        <ol>
          {vehicles.map((vehicle, index) => {
            return <li key={index}><span style={{color: 'red'}}>{vehicle.name}</span>, cost in credits: {vehicle.cost_in_credits}</li>
          })}
        </ol>
      </div>
    )
  }

}

export default Vehicles;
