import React from 'react';

class Planets extends React.Component {
  constructor(){
    super()

    this.state = {
      planets: []
    }
  }

  async componentDidMount(){
    const data = await fetch('https://swapi.co/api/planets/')
    const response = await data.json();
    const results = response.results;

    this.setState({
      planets: results.map(planet => planet)
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
