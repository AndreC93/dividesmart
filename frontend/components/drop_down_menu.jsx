import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

class DropDownMenu extends React.Component {
  render () {
    return (
      <ul>
        <li><Link to='/'>Your account</Link></li>
        <li><button onClick={ this.props.logout }>Log out</button></li>
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
