import React from 'react';

const FriendIndexItem = (props) => {
  return (
    <li>
      <i className='fas fa-user' ></i> {props.friend.username}
    </li>
  );
};

export default FriendIndexItem;
