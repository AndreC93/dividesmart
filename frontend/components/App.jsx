import React from 'react';
import TopBar from './top_bar';
import { Route } from 'react-router-dom';
import Errors from './errors';
import SignupForm from './signup_form_container';
// import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <TopBar />
      <Route path='/' component={ Errors } />
      <Route exact path='/signup' component={ SignupForm } />
    </div>
  );
};

export default App;
