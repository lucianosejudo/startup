import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, PageHeader, Table} from 'react-bootstrap';


const RealmStatus = (props) => {

  return (
    <div>
      <Row className="show-grid">
        <Col xs={12}>
          <PageHeader>
            Pet List
          </PageHeader>
        </Col>
      </Row>

      <Row className="show-grid">
        <Col xs={12}>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Family</th>
                <th>Level</th>
                <th>Health</th>
                <th>Power</th>
                <th>Speed</th>
              </tr>
            </thead>
            <tbody>
              {props.petList.pets.map(pet =>
                <tr key={pet.creatureId}>
                  <td>
                    <img
                      alt=""
                      src={`https://wow.zamimg.com/images/wow/icons/large/${pet.icon}.jpg`}
                    />
                  </td>
                  <td>{pet.name}</td>
                  <td>{pet.family}</td>
                  <td>{pet.stats.level}</td>
                  <td>{pet.stats.health}</td>
                  <td>{pet.stats.power}</td>
                  <td>{pet.stats.speed}</td>
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
    petList: state.petList,
  };
};

export default connect(mapStateToProps)(RealmStatus);
