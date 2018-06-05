import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeInputValue } from '../actionCreators';
import InputProfile from './InputProfile';
import { Row, Col, Image, Table, PageHeader} from 'react-bootstrap';
import '../css/avatar.css';

class CharacterProfile extends Component {
  render() {
      return (
        <div>
          <Row className="show-grid">
            <Col xs={12}>
              <PageHeader>
                Character Profile
              </PageHeader>
            </Col>
          </Row>

          <InputProfile />
        
          {this.props.characterProfile.length > 0 &&
          <Row className="show-grid avatar-row">
            <Col xs={12} sm={12} md={4} >
              <Image
                src={`https://render-us.worldofwarcraft.com/character/${this.props.characterProfile[0].playerProfile.thumbnail}`}
                responsive
                circle
                className="center"
              />
            </Col>
            <Col xs={12} sm={12} md={8} >


                <Table responsive>

                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{this.props.characterProfile[0].playerProfile.name}</td>
                    </tr>
                    <tr>
                      <td>Realm</td>
                      <td>{this.props.characterProfile[0].playerProfile.realm}</td>
                    </tr>
                    <tr>
                      <td>Faction</td>
                      <td>{this.props.characterProfile[0].playerProfile.faction === 1 ? 'Horde' : 'Alliance'}</td>
                    </tr>
                    <tr>
                      <td>BatleGroup</td>
                      <td>{this.props.characterProfile[0].playerProfile.battlegroup}</td>
                    </tr>
                    <tr>
                      <td>Power Type</td>
                      <td>{this.props.characterProfile[0].playerProfile.stats.powerType}</td>
                    </tr>
                    <tr>
                      <td>Health</td>
                      <td>{this.props.characterProfile[0].playerProfile.stats.health}</td>
                    </tr>
                    <tr>
                      <td>Power</td>
                      <td>{this.props.characterProfile[0].playerProfile.stats.power}</td>
                    </tr>
                    <tr>
                      <td>Level</td>
                      <td>{this.props.characterProfile[0].playerProfile.level}</td>
                    </tr>
                    <tr>
                      <td>Achievement Points</td>
                      <td>{this.props.characterProfile[0].playerProfile.achievementPoints}</td>
                    </tr>
                    <tr>
                      <td>Total Honorable Kills</td>
                      <td>{this.props.characterProfile[0].playerProfile.totalHonorableKills}</td>
                    </tr>


                  </tbody>
                </Table>
            </Col>
          </Row>}

          {this.props.characterProfile.length > 0 &&
          <Row className="show-grid avatar-row">
            <Col xs={12} sm={12} md={12} >
              <h2>Items</h2>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Name</th>
                      <th>Item level</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Head</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.head.name}</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.head.itemLevel}</td>
                      <td>
                        <img
                          alt=""
                          src={`https://wow.zamimg.com/images/wow/icons/large/${this.props.characterProfile[0].playerProfile.items.head.icon}.jpg`}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Shoulder</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.shoulder.name}</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.shoulder.itemLevel}</td>
                      <td>
                        <img
                          alt=""
                          src={`https://wow.zamimg.com/images/wow/icons/large/${this.props.characterProfile[0].playerProfile.items.shoulder.icon}.jpg`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Chest</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.chest.name}</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.chest.itemLevel}</td>
                      <td>
                        <img
                          alt=""
                          src={`https://wow.zamimg.com/images/wow/icons/large/${this.props.characterProfile[0].playerProfile.items.chest.icon}.jpg`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Hands</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.hands.name}</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.hands.itemLevel}</td>
                      <td>
                        <img
                          alt=""
                          src={`https://wow.zamimg.com/images/wow/icons/large/${this.props.characterProfile[0].playerProfile.items.hands.icon}.jpg`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Legs</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.legs.name}</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.legs.itemLevel}</td>
                      <td>
                        <img
                          alt=""
                          src={`https://wow.zamimg.com/images/wow/icons/large/${this.props.characterProfile[0].playerProfile.items.legs.icon}.jpg`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Feet</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.feet.name}</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.feet.itemLevel}</td>
                      <td>
                        <img
                          alt=""
                          src={`https://wow.zamimg.com/images/wow/icons/large/${this.props.characterProfile[0].playerProfile.items.feet.icon}.jpg`}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Main Hand</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.mainHand.name}</td>
                      <td>{this.props.characterProfile[0].playerProfile.items.mainHand.itemLevel}</td>
                      <td>
                        <img
                          alt=""
                          src={`https://wow.zamimg.com/images/wow/icons/large/${this.props.characterProfile[0].playerProfile.items.mainHand.icon}.jpg`}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
            </Col>
          </Row>}

        </div>
      );
    }
}

const mapStateToProps = state => {
  return {
    characterProfile: state.playerProfile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputValue: (valueRealm, valueName) => dispatch(storeInputValue(valueRealm, valueName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterProfile);
