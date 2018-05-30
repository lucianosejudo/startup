import React from 'react';
import { Row, Col, PageHeader, Table} from 'react-bootstrap';
import { connect } from 'react-redux';

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
              {props.rank.map(player =>
                <tr key={player.ranking}>
                  <td>{player.ranking}</td>
                  <td>{player.name}</td>
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

export default connect(mapStateToProps)(Rank);
