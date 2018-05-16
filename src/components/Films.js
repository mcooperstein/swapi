import React from 'react';

class Films extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      films: []
    }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/films/').then(response => {
      return response.json();
    }).then(movies => {
      this.setState({films:movies.results.map(movie => {
        return movie
      })})
      // console.log(movies.results.map(movie => {
      //   return movie.title
      // }));
      console.log(this.state.films)
    })
  }
  render(){
    const {films} = this.state;
    return !films.length ? <h1>Loading...</h1> :
    (
      <div>
        <h1>Films</h1>
        <ol>
        {films.sort((a,b)=>a.episode_id - b.episode_id).map((film,index) => {
          return <li key={index}>{film.title} ({film.release_date.slice(0,4)})</li>
        })}
      </ol>
      </div>
    )
  }
}

export default Films;
