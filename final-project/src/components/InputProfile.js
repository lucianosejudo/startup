import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { storeInputValue } from '../actionCreators';

class InputProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueRealm: '',
      valueName: '',
    };
    this.handleRealmChange = this.handleRealmChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRealmChange(event) {
    this.setState(
      {valueRealm: event.target.value}
    );
  }

  handleNameChange(event) {
    this.setState(
      {valueName: event.target.value}
    );
  }

  handleSubmit() {
    this.props.handleInputValue(this.state.valueRealm, this.state.valueName);
  }

  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col xs={12}>
            <Form inline>
              <FormGroup controlId="formInlineName">
                <ControlLabel>Realm Name</ControlLabel>{' '}
                <FormControl
                  type="text"
                  placeholder="Realm Name"
                  onChange={this.handleRealmChange}
                  value= {this.state.valueRealm}
                />
              </FormGroup>{' '}
              <FormGroup controlId="formInlineEmail">
                <ControlLabel>Player Name</ControlLabel>{' '}
                <FormControl
                  type="text"
                  placeholder="Player Name "
                  onChange={this.handleNameChange}
                  value={this.state.valueName}
                 />
              </FormGroup>{' '}
              <Button type="button" onClick={this.handleSubmit}>Search</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    realms: state.realmStatus,
    value: state.inputValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputValue: (valueRealm, valueName) => dispatch(storeInputValue(valueRealm, valueName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputProfile);
