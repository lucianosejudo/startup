import React, { Component } from 'react';
import Title from './Title';
import '../css/CreateMovie.css';
import Input from './Input';


class CreateMovie extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event);
  }

  handleSubmit(event) {
    this.props.onInputSubmit(event);
    event.preventDefault();
  }

  handleSubmitEdit(event) {
    this.props.onInputSubmitEdit(event);
    event.preventDefault();
  }

  render() {
    if (this.props.movieToEdit && this.props.movieToEdit.length === 1) {
      return(
        <div className="createMovie">
          <Title title="Edit Movie" />
          <form onSubmit={this.handleSubmitEdit}>
            <Input labelName="Name:" name="movieEditName" type="text" value={this.props.nameEdit} change={this.handleChange} />
            <Input labelName="Year:" name="movieEditYear" type="text" value={this.props.yearEdit} change={this.handleChange} />
            <Input labelName="Duration:" name="movieEditDuration" type="text" value={this.props.durationEdit} change={this.handleChange} />
            <Input type="submit" value="Edit Movie" />
          </form>
        </div>
    )
  }else{

    return (

      <div className="createMovie">
        <Title title="Create Movie" />
        <form onSubmit={this.handleSubmit}>
          <Input labelName="Name:" name="movieName" type="text" value={this.props.name} change={this.handleChange} />
          <Input labelName="Year:" name="movieYear" type="text" value={this.props.year} change={this.handleChange} />
          <Input labelName="Duration:" name="movieDuration" type="text" value={this.props.duration} change={this.handleChange} />
          <Input type="submit" value="Create Movie" />
        </form>
      </div>
    );
  }
  }
}

export default CreateMovie;
