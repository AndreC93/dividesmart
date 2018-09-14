import React from 'react';
import DropDownMenu from './drop_down_menu';
import { connect } from 'react-redux';

class DropDownMenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  }

  render() {
    return (
      <div className='drop-down-menu-button'>
        <button onClick={ this._onClick }>{this.props.currentUser.username}</button>
        <i className="fas fa-caret-down"></i>
        {this.state.showComponent ?
           <DropDownMenu /> :
           null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
});

export default connect(mapStateToProps)(DropDownMenuButton);
