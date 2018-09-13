import React from 'react';
import TopBar from './top_bar';
import { Route, Switch } from 'react-router-dom';
// import SessionErrors from './session_errors';
import SignupForm from './signup_form_container';
import { AuthRoute, LoginRoute } from '../util/route_util';
import LoginPage from './login_page_container';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/signup' component={ SignupForm } />
        <TopBar />
      </Switch>
      
      <LoginRoute />
      <AuthRoute exact path='/login' component={ LoginPage } />

    </div>
  );
};

// <Route path='/' component={ SessionErrors } />
export default App;
