import React from 'react';

class Species extends React.Component {
  constructor(){
    super()

    this.state = {
      species: []
    }
  }

  componentDidMount(){
    fetch('https://swapi.co/api/species/').then(response => {
      return response.json();
    }).then(creatures => {
      this.setState({species: creatures.results.map(creature => {
        return creature;
      })})
    })
  }

  render(){
    const {species} = this.state;
    console.log(species)
    return !species.length ? <h1>Loading...</h1> :
    (
      <div>
        <h1>Different Species</h1>
        <ol>
          {species.map((specie, i) => {
            return <li key={i}><span style={{fontWeight: 'bolder'}}>{specie.name}</span>, <span style={{color: 'red'}}>classification:</span> {specie.classification}, <span style={{color: 'blue'}}>average height:</span> {specie.average_height}, <span style={{color: 'orange'}}>language:</span> {specie.language}</li>
          })}
        </ol>
      </div>
    )
  }
}

export default Species;
