import React, { Component } from 'react';

class ShowFavoriteMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteMovies : [{name: 'Ready Player One', year: '2018', duration: '2h 19m'},{name: 'Interstellar', year: '2014', duration: '2h 49m'},{name: 'The Simpson', year: '2007', duration: '1h 27m'},{name: 'Doctor Strange', year: '2016', duration: '1h 55m'}]
    }
  }
  render() {

    const movies = this.state.favoriteMovies;
    return (
      <div>
        <h3>Luciano's favorite Movies:</h3>
        <ul>
          {movies.map((item, key) => <li key={key}><strong>Name:</strong> {item.name}, <strong>Year:</strong> {item.year}, <strong>Duration:</strong> {item.duration}</li>)}
        </ul>
      </div>
    );
  }
}

export default ShowFavoriteMovies;
