import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Header = ({ children }) => {
  return (
    <Row>
      <Col>
        <h2 className="header">{children}</h2>
      </Col>
    </Row>
  );
};

export default Header;
