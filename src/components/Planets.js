import React from 'react';

class Planets extends React.Component {
  constructor(){
    super()

    this.state = {
      planets: []
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/planets/').then(response => {
      return response.json();
    }).then(worlds => {
      this.setState({planets:worlds.results.map(world => {
        return world
      })})
      // console.log(worlds.results.map(world => {
      //   return world.name
      // }))
    })
  }

  render(){
    const {planets} = this.state;
    console.log(planets)
    return !planets.length ? <h1>Loading...</h1> :
    (
        <div>
          <h1>Planets</h1>
          <ol>
            {planets.map((planet,index) => {
              return <li key={index}><span style={{fontWeight: 'bolder'}}>{planet.name}</span>, climate: <span style={{color: 'red'}}>{planet.climate}</span>, featured in {planet.films.length} film(s)</li>
            })}
          </ol>
        </div>
    )
  }

}

export default Planets;
