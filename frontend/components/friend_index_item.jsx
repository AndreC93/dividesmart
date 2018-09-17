import React from 'react';
import { Link } from 'react-router-dom';

const FriendIndexItem = (props) => {
  return (
    <li>
      <Link to={ `/api/users/${props.friend.id}` } >
        <i className='fas fa-user' ></i> {props.friend.username}
      </Link>
    </li>
  );
};

export default FriendIndexItem;
