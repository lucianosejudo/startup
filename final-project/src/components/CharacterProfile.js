import React from 'react';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { handleInput } from '../actionCreators';

const CharacterProfile = (props) => {
  return (
    <div>
      <Row className="show-grid">
        <Col xs={12}>
          <form inline>
            <FormGroup controlId="formInlineName">
              <ControlLabel>Realm Name</ControlLabel>{' '}
              <FormControl
                type="text"
                placeholder="Realm Name"
                onChange={(ev) => handleInput(ev.target.value)}
                value={props.value}
               />
            </FormGroup>{' '}
            <FormGroup controlId="formInlineEmail">
              <ControlLabel>Player Name</ControlLabel>{' '}
              <FormControl type="text" placeholder="Player Name " />
            </FormGroup>{' '}
            <Button type="submit">Send invitation</Button>
          </form>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    realms: state.realmStatus,
    value: state.inputValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInput(event) {
      dispatch(handleInput(event))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterProfile);
