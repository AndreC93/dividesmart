import React from 'react';
import TopBar from './top_bar';
import { Route, Switch } from 'react-router-dom';
import SessionErrors from './session_errors';
import SignupForm from './signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/signup' component={ SignupForm } />
        <TopBar />
        <SessionErrors />
      </Switch>
    </div>
  );
};

// <Route path='/' component={ SessionErrors } />
export default App;
