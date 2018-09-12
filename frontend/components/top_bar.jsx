import React from 'react';
import LoginButton from './login_form_button';
// import SignupForm from './signup_form_container';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/session_actions';

class TopBar extends React.Component {
  render () {
    let rightSideOfBar;
    if (this.props.currentUser) {
      rightSideOfBar = (
        <div className='top-bar-right'>
          <img src={window.imageBootStrap} />
          <ul>
            <li><Link to='/'>Your account</Link></li>
            <li><button onClick={ this.props.logout }>Log out</button></li>
          </ul>
        </div>
      );
    } else {
      rightSideOfBar = (
        <div className='top-bar-right'>
          <LoginButton />
          <p>or</p>
          <Link to='/signup'>Sign up</Link>
        </div>
      );
    }
    return (
      <div className={"top-bar"}>
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
