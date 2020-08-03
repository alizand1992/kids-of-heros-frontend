import React from 'react';

import Button from 'react-bootstrap/Button';

export const DefaultButton = ({ children, style }) => {
  return (
    <Button className="default-button" style={style}>
      {children}
    </Button>
  )
};

export const SignIn = () => {
  const style = {
    backgroundColor: '#3C787E',
    fontSize: '1.5em',
    borderRadius: '10px',
  };

  return (
    <DefaultButton style={style}>Sign In</DefaultButton>
  )
};

export const SignUp = () => {
  const style = {
    backgroundColor: '#D56F3E',
    fontSize: '1.5em',
    borderRadius: '10px',
  };

  return (
    <DefaultButton style={style}>Sign Up</DefaultButton>
  )
};
