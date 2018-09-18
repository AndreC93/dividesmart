import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LeftSideBarHeader extends React.Component {
  render () {
    return (
      <div className='left-side-bar-header' >
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/activity' >Recent Activity</Link>
        </li>
        <li>
          <Link to='/all'>All expenses</Link>
        </li>
      </div>
    );
  }
}

export default withRouter(LeftSideBarHeader);
