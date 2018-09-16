import React from 'react';

class AddFriendFormInputItem extends React.Component {

  render () {
    return (<li className='add-friend-form-input-item' >{this.props.input}<button onClick={ () => this.props.deleteInput() }>x</button></li>);
  }
}

export default AddFriendFormInputItem;
