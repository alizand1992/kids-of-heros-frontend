import React from 'react';

import './Menu.css';

import { SignIn, SignUp } from '../Common/Buttons';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <div className="user-action-menu">
      <Link to={'/user/sign_in'}><SignIn /></Link>
      <SignUp />
    </div>
  );
};

export default Menu;
