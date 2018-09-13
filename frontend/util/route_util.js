import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
    if (!loggedIn)  {
      return (<Component {...props} />);
    } else {
      return (<Redirect to="/" />);
    }
  } } />
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUserId)};
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
