import React from 'react';
import FriendsIndex from './friends_index';
import { Switch, Route } from 'react-router-dom';
import LeftSideBarHeader from './left_side_bar_header';

class LeftSideBar extends React.Component {
  render () {
    return (
      <div className='left-side-bar' >
        <LeftSideBarHeader />
        <Switch>
          <Route exact path='/api/users/:id' component={ FriendsIndex } />
          <FriendsIndex />
        </Switch>
      </div>
    );
  }
}

export default LeftSideBar;
