import React from 'react';

import { withRouter } from 'react-router';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class FormContainer extends React.Component {
  render() {
    const { children, history } = this.props;

    return (
      <Row>
        <Col lg={{ span: 4, offset: 4 }}
             md={{ span: 6, offset: 3 }}
             sm={{ span: 8, offset: 2 }}
             xs={{ span: 8, offset: 2 }}
             className="form-container">
          <Row>
            <Col className="text-right close-button-container">
              <i className="material-icons"
                 style={{ cursor: 'pointer' }}
                 onClick={history.goBack}>
                close
              </i>
            </Col>
          </Row>
          <br/>
          {children}
        </Col>
      </Row>
    );
  }
};

export default withRouter(FormContainer);
