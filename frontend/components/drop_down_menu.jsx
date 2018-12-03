import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { withRouter } from 'react-router-dom';

class DropDownMenu extends React.Component {
  render () {
    return (
      <ul className='drop-down-menu' >
        <li onClick={ () => this.props.logout().then( () => this.props.history.push('/')) } >Log out</li>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DropDownMenu));
