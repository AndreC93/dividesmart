import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class DropDownMenu extends React.Component {
  render () {
    return (
      <ul className='drop-down-menu' >
        <li>Your account</li>
        <li onClick={ this.props.logout } >Log out</li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);
