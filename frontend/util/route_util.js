import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => {
    if (!loggedIn)  {
      return (<Component {...props} />);
    } else {
      return (<Redirect to='/' />);
    }
  } } />
);

const LoginErrors = ({component: Component, errors}) => (
  <Route render={(props) => {
    if (errors && props.location.pathname != '/login')  {
      return (<Redirect to='/login' />);
    } else {
      return null;
    }
  } } />
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUserId)};
};

const mapStateToPropsErrors = state => {
  return {errors: state.errors.session.includes('Invalid credentials')};
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const LoginRoute = withRouter(connect(mapStateToPropsErrors)(LoginErrors));
