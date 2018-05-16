import React from 'react';

class Characters extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      peeps: []
    }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/people/').then(response => {
      return response.json();
    }).then(characters => {
      this.setState({peeps:characters.results.map(char => {
        return char
      })})
      console.log(characters.results)
    })
  }
  render(){
    const {peeps} = this.state;
    return !peeps.length ? <h1>Loading...</h1> :
    (
      <div>
        <h1>Characters</h1>
        <ol>
        {peeps.map((peep,index) => {
          return <li key={index}>{peep.name}, gender: {peep.gender === 'n/a' ? 'robot' : peep.gender}</li>
        })}
      </ol>
      </div>
    )
  }
}

export default Characters;
