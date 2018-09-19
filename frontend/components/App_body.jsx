import React from 'react';
import TopBar from './top_bar';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginPage from './login_page_container';
import SplashPage from './splash_page';
import Dashboard from './dashboard';

const AppBody = () => {
  return (
    <div>
      <TopBar />
      <Switch>
        <AuthRoute exact path='/login' component={ LoginPage } />
        <AuthRoute exact path='/' component={ SplashPage } />
        <ProtectedRoute path='/' component={ Dashboard } />
      </Switch>
    </div>
  );
};

export default AppBody;
