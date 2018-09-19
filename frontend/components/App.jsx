import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupForm from './signup_form_container';
import { AuthRoute } from '../util/route_util';
import FriendInvitePage from './friend_invite_page';
import AppBody from './App_body';
// import AddBillForm from './add_bill_form';
// <AddBillForm />

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path='/signup' component={ SignupForm } />
        <Route exact path='/friend_invite' component={ FriendInvitePage } />
        <AppBody />
      </Switch>
    </div>
  );
};

export default App;
