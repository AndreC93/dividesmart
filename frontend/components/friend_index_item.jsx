import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FriendIndexItem extends React.Component {
  render () {
    let highlight = {};
    if (parseInt(this.props.match.params.id) === this.props.friend.id) highlight = {
      borderLeft: '6px solid #5bc5a7',
      color: '#5bc5a7',
    };
    return (
      <li style={ highlight }>
        <Link to={ `/api/users/${this.props.friend.id}` } >
          <i className='fas fa-user' ></i> { this.props.friend.username }
        </Link>
      </li>
    );
  }
}

export default withRouter(FriendIndexItem);