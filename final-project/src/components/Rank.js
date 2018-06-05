import React from 'react';
import { Row, Col, PageHeader, Table} from 'react-bootstrap';
import { connect } from 'react-redux';
import { storeInputValue } from '../actionCreators';
import { Link } from 'react-router-dom';

const Rank = (props) => {
  return (
    <div>
      <Row className="show-grid">
        <Col xs={12}>
          <PageHeader>
            Top 20 PvP
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
                <th>Realm</th>
                <th>Faction</th>
                <th>Season Wins</th>
                <th>Season Losses</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {props.rank.players.map(player =>
                <tr key={player.ranking}>
                  <td>{player.ranking}</td>
                  <td>
                    <Link to="/Character"  onClick={() => props.handleInputValue(player.realmName, player.name)}>
                      {player.name}
                    </Link>
                  </td>
                  <td>{player.realmName}</td>
                  <td>{player.factionId}</td>
                  <td>{player.seasonWins}</td>
                  <td>{player.seasonLosses}</td>
                  <td>{player.rating}</td>
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
    rank: state.pvpRank
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputValue: (valueRealm, valueName) => dispatch(storeInputValue(valueRealm, valueName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rank);
