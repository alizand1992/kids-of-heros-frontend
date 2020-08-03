import React from 'react';

import '../User.css';

import Form from 'react-bootstrap/Form';

import { SignIn as SignInButton} from '../../Common/Buttons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormContainer from '../FormContainer';
import Header from '../Header';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <FormContainer>
        <Header>Sign In</Header>
        <br />
        <br />
        <Form>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Form.Group>
                <Form.Control value={email}
                              type="email"
                              className="user-fields"
                              placeholder="Email"
                              onChange={e => this.handleChange(e, 'email')} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Form.Group>
                <Form.Control value={password}
                              type="password"
                              className="user-fields"
                              placeholder="Password"
                              onChange={e => this.handleChange(e, 'password')} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }} className="text-left">
              Forgot your password?
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <SignInButton />
            </Col>
          </Row>
        </Form>
        <br />
        <br />
        <br />
        <Row>
          <Col>
            Don't have an account yet? Sign Up
          </Col>
        </Row>
      </FormContainer>
    );
  }
}

export default SignIn;
