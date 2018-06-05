import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Main from './components/Main';
import './css/index.css';

//background-image: url("//wow.zamimg.com/images/wow/icons/large/inv_shoulder_mail_raidshamanmythic_s_01.jpg");

const App = () => (

  <Grid>
    <Row className="show-grid">
      <Col xs={12}>
        <Header />
      </Col>
    </Row>

    <Row className="show-grid">
      <Col xs={12}>
        <Main />
      </Col>
    </Row>
  </Grid>

)

export default App;
