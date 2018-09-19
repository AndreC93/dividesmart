import React from 'react';
import { withRouter } from 'react-router-dom';

class FriendsIndexItem extends React.Component {
  render () {
    let highlight = {};
    if (parseInt(this.props.match.params.id) === this.props.friend.id) highlight = {
      borderLeft: '6px solid #5bc5a7',
      color: '#5bc5a7',
    };
    return (
      <li style={ highlight } onClick={ () => (
          this.props.history.push(`/api/users/${this.props.friend.id}` )) }
      >
        <a>
          <i className='fas fa-user' ></i> { this.props.friend.username }
        </a>
      </li>
    );
  }
}

export default withRouter(FriendsIndexItem);
