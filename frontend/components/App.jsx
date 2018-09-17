import React from 'react';
import TopBar from './top_bar';
import { Route, Switch } from 'react-router-dom';
import SignupForm from './signup_form_container';
import { AuthRoute, LoginRoute, ProtectedRoute } from '../util/route_util';
import LoginPage from './login_page_container';
import SplashPage from './splash_page';
import Dashboard from './dashboard';
import FriendInvitePage from './friend_invite_page';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/signup' component={ SignupForm } />
        <Route exact path='/friend_invite' component={ FriendInvitePage } />
        <TopBar />
      </Switch>

      <LoginRoute />
      <AuthRoute exact path='/login' component={ LoginPage } />
      <Switch>
        <AuthRoute exact path='/' component={ SplashPage } />
        <ProtectedRoute path='/' component={ Dashboard } />
      </Switch>

    </div>
  );
};

export default App;
