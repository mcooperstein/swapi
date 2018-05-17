import React from 'react';

class Species extends React.Component {
  constructor(){
    super()

    this.state = {
      species: []
    }
  }

  async componentDidMount(){
    const data = await fetch('https://swapi.co/api/species/');
    const response = await data.json();
    const results = response.results;
    this.setState({
      species: results.map(spec => {
        return spec;
      })
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
