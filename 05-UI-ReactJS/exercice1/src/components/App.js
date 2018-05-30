import React, { Component } from 'react';
import './css/App.css';
import CreateMovie from './Global/CreateMovie';
import ShowMovies from './Global/ShowMovies';
import ShowFavoriteMovies from './Global/ShowFavoriteMovies';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieName: '',
      movieYear: '',
      movieDuration: '',
      movieEditName: '',
      movieEditYear: '',
      movieEditDuration: '',
      movieEditKey: '',
      movies: [],
      editMovies: []
    };

    this.movieStateChange = this.movieStateChange.bind(this);
    this.storeState = this.storeState.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.storeStateEdit = this.storeStateEdit.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
}

movieStateChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({[name]: value});
}


storeState(event) {
  const movie = {
    name: this.state.movieName,
    year: this.state.movieYear,
    duration: this.state.movieDuration
  };

  let aux = this.state.movies;
  aux.push(movie);
  this.setState({movies: aux, movieName: '', movieYear: '', movieDuration: ''});
  alert('Movie created successfully!');
}

handleEditButton(event) {
  event.preventDefault();
  let aux = event.target.value.split(',');
  const movie = [{
    key: aux[0],
    name: aux[1],
    year: aux[2],
    duration: aux[3]
  }];

  this.setState({editMovies: movie , movieEditName: movie[0].name, movieEditYear: movie[0].year, movieEditDuration: movie[0].duration, movieEditKey: movie[0].key });
}

handleDeleteButton(event) {
  event.preventDefault();
  let aux = event.target.value.split(',');
  let aux1 = this.state.movies;
  aux1.splice(aux[0], 1);
  this.setState({movies: aux1});
  alert("Movie deleted successfully!");
}

storeStateEdit(event) {
  const movie = {
    name: this.state.movieEditName,
    year: this.state.movieEditYear,
    duration: this.state.movieEditDuration
  };

  let aux = this.state.movies;
  aux[this.state.movieEditKey] = movie;
  this.setState({movies: aux, movieEditName: '', movieEditYear: '', movieEditDuration: '', editMovies: [], movieEditKey: ''});
  alert('Movie edited successfully!');
}

  render() {
    const name = this.state.movieName;
    const year = this.state.movieYear;
    const duration = this.state.movieDuration;

    return (
      <div>
        <CreateMovie onInputChange={this.movieStateChange} onInputSubmit={this.storeState} onInputSubmitEdit={this.storeStateEdit} name={name} year={year} duration={duration} movieToEdit= {this.state.editMovies} nameEdit={this.state.movieEditName} yearEdit={this.state.movieEditYear} durationEdit={this.state.movieEditDuration}/>
        <ShowMovies items={this.state.movies} onHandleEdit={this.handleEditButton} onHandleDelete={this.handleDeleteButton} title="Movies:"/>
        <ShowFavoriteMovies />
      </div>
    );
  }
}

export default App;
