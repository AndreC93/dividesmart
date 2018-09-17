import React from 'react';

class AddFriendFormInputItem extends React.Component {

  render () {
    return (<figure className='add-friend-form-input-item' >{this.props.input}<button onClick={ () => this.props.deleteInput() }>x</button></figure>);
  }
}

export default AddFriendFormInputItem;
