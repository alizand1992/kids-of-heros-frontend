import React, { Suspense } from 'react';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

const Landing = React.lazy(() => import(/* webpackChunkName: "Landing" */ './components/Landing'))
const SignIn = React.lazy(() => import(/* webpackChunkName: "SignIn" */ './components/Users/SignIn'));
const Menu = React.lazy(() => import(/* webpackChunkName: "Menu" */ './components/Menu'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">
          <Menu />
          <Switch>
            <Route path={'/user/sign_in'}>
              <SignIn />
            </Route>
            <Route path={['/', '/home']}>
              <Landing />
            </Route>
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
