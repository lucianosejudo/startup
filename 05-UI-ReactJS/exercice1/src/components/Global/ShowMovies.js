import React, { Component } from 'react';
import Movie from './Movie.js';
import '../css/MovieList.css';

class ShowMovies extends Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(event) {
    this.props.onHandleEdit(event);
  }

  handleDelete(event) {
    this.props.onHandleDelete(event);
  }

  render() {
    const movies = this.props.items;
    if (movies && movies.length === 0){
      return (
        <div></div>
      )
    }else {
      return (
        <table className = "MovieList">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Duration</th>
            </tr>

          </thead>
          <tbody>
            {
              movies.map((movie, key) => (
                <Movie name={movie.name} year={movie.year} duration={movie.duration} onEdit={this.handleEdit} onDelete={this.handleDelete} key={key} value={[key, movie.name, movie.year, movie.duration]}/>
              ))
            }
          </tbody>
        </table>
      );
    }
  }
}

export default ShowMovies;
