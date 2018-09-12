import React from 'react';
import TopBar from './top_bar';
import { Route, Switch } from 'react-router-dom';
import Errors from './errors';
import SignupForm from './signup_form_container';
// import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/signup' component={ SignupForm } />
        <TopBar />
      </Switch>
      <Route path='/' component={ Errors } />
    </div>
  );
};

export default App;
