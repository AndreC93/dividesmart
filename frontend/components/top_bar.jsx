import React from 'react';
import LoginButton from './login_form_button';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import DropDownMenuButton from './drop_down_menu_button';

class TopBar extends React.Component {

  render () {
    let rightSideOfBar;
    if (this.props.currentUser) {
      rightSideOfBar = (
        <div className='top-bar-right top-bar-right-logged-in'>
          <img src={window.defaultAvatar} />
          <DropDownMenuButton />
        </div>
      );
    } else {
      rightSideOfBar = (
        <div className='top-bar-right top-bar-right-default'>
          <LoginButton />
          <p>or</p>
          <Link to='/signup' className='signup-button'>Sign up</Link>
        </div>
      );
    }
    return (
      <div className={"top-bar"}>
        <Link to='/'>DIVIDESMART</Link>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));
