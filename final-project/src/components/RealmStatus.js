import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, PageHeader, Table, Glyphicon} from 'react-bootstrap';

const RealmStatus = (props) => {

  return (
    <div>
      <Row className="show-grid">
        <Col xs={12}>
          <PageHeader>
            Realm Status
          </PageHeader>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col xs={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Population</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {props.realmStatus.realms.map(realm =>
                <tr>
                  <td>{realm.name}</td>
                  <td>{realm.type}</td>
                  <td>{realm.population}</td>
                  <td>{
                     <Glyphicon glyph={realm.status ? 'ok' : 'remove'} />
                   }
                  </td>
                </tr>
            )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    realmStatus: state.realmStatus,
  };
};

export default connect(mapStateToProps)(RealmStatus);
