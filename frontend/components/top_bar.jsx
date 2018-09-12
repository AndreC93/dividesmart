import React from 'react';
import LoginForm from './login_form_container';
import SignupForm from './signup_form_container';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { logout } from '../actions/session_actions';

class TopBar extends React.Component {
  render () {
    let rightSideOfBar;
    if (this.props.currentUser) {
      rightSideOfBar = (
        <div>
          <img src={this.props.currentUser.imageUrl} />
          <ul>
            <li><Link to='/'>Your account</Link></li>
            <li><button onClick={ this.props.logout }>Log out</button></li>
          </ul>
        </div>
      );
    } else {
      rightSideOfBar = (
        <div>
          <span>
            <Route path='/' component={ LoginForm } />
          </span>
          <span>
            <Route path='/signup' component={ SignupForm } />
          </span>
        </div>
      );
    }
    return (
      <div>
        <h1>DIVIDESMART</h1>
        {rightSideOfBar}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
