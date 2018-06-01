import React from 'react';
import { Row, Col, PageHeader} from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Row className="show-grid">
        <Col xs={12}>
          <PageHeader>
            Welcome! For the Horde!
          </PageHeader>
        </Col>
      </Row>


    </div>
  )
}

export default Home;
