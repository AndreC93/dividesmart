import React from 'react';
import FriendsIndex from './friends_index';

class LeftSideBar extends React.Component {
  render () {
    return (
      <div className='left-side-bar' >
        <FriendsIndex />
      </div>
    );
  }
}

export default LeftSideBar;
