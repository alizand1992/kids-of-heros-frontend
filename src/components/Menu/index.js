import React from 'react';

import './Menu.css';

import { SignIn, SignUp } from '../Common/Buttons';

const Menu = () => {
  return (
    <div className="user-action-menu">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Menu;
