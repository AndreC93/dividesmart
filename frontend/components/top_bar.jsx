import React from 'react';
import LoginButton from './login_form_button';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout, clearErrors } from '../actions/session_actions';
import DropDownMenuButton from './drop_down_menu_button';
import { showDropDownMenu, hideDropDownMenu } from '../actions/modal_actions';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    if (this.props.modal) {
      this.props.hideDropDownMenu();
    } else {
      this.props.showDropDownMenu();
    }
  }

  render () {
    let rightSideOfBar;
    let topBarStyles = { maxHeight: 'inherit', paddingLeft: '5%' };
    if (this.props.currentUser) {
      topBarStyles = { maxHeight: 35, paddingLeft: '8%' };
      rightSideOfBar = (
        <div className='top-bar-right top-bar-right-logged-in' onClick={ this._onClick } onBlur={ this.props.hideDropDownMenu } tabIndex='0' >
          <img src={window.defaultAvatar} />
          <DropDownMenuButton currentUser={ this.props.currentUser } modal={ this.props.modal }/>
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
      <div className={ 'top-bar' } style={ topBarStyles }>
        <Link to='/' onClick={ () => this.props.clearErrors() } >DIVIDESMART</Link>
        {rightSideOfBar}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
  modal: state.modal.dropDownMenu,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors()),
  showDropDownMenu: () => dispatch(showDropDownMenu()),
  hideDropDownMenu: () => dispatch(hideDropDownMenu()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));
