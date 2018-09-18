import React from 'react';
import DropDownMenu from './drop_down_menu';

class DropDownMenuButton extends React.Component {

  render() {
    return (
      <div className='drop-down-menu-button'>
        <button>{this.props.currentUser.username}</button>
        <i className="fas fa-caret-down"></i>
        {this.props.modal ?
           <DropDownMenu /> :
           null
        }
      </div>
    );
  }
}

export default DropDownMenuButton;
