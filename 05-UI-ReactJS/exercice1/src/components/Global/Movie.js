import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.year}</td>
        <td>{this.props.duration}</td>
        <td>
          <button onClick={this.props.onEdit} value={this.props.value}>Edit</button>
          <button onClick={this.props.onDelete} value={this.props.value}>Delete</button>
        </td>
      </tr>
    )
  }
}

export default Movie;
