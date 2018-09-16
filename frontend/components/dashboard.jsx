import React from 'react';
import LeftSideBar from './left_side_bar';

class Dashboard extends React.Component {
  render () {
    return (
      <div className='dashboard'>
        <LeftSideBar />
      </div>
    );
  }
}

export default Dashboard;
