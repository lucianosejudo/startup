import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <label>
        {this.props.labelName}
        <input name={this.props.name} type={this.props.type} value={this.props.value} onChange={this.props.change} required />
      </label>
    );
  }
}

export default Input;
