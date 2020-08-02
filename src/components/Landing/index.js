import React from 'react';

import './Landing.css';

import Menu from '../Menu';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <h1 className="site-title">KIDS OF HEROES</h1>
      </div>
    );
  }
}

export default Landing;
