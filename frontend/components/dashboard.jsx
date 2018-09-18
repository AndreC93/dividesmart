import React from 'react';
import LeftSideBar from './left_side_bar';
import CenterBar from './center_bar';
import RightBar from './right_bar';

class Dashboard extends React.Component {

  render () {
    return (
      <div className='dashboard'>
        <LeftSideBar />
        <CenterBar />
        <RightBar />
      </div>
    );
  }
}


export default Dashboard;
