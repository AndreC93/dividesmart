import React from 'react';
import DropDownMenu from './drop_down_menu';
import { connect } from 'react-redux';
import { showDropDownMenu, hideDropDownMenu } from '../actions/modal_actions';

class DropDownMenuButton extends React.Component {
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

  render() {
    return (
      <div className='drop-down-menu-button'>
        <button onClick={ this._onClick }>{this.props.currentUser.username}</button>
        <i className="fas fa-caret-down"></i>
        {this.props.modal ?
           <DropDownMenu /> :
           null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
  modal: state.modal.dropDownMenu,
});

const mapDispatchToProps = dispatch => ({
  showDropDownMenu: () => dispatch(showDropDownMenu()),
  hideDropDownMenu: () => dispatch(hideDropDownMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenuButton);
