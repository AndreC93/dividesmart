import React from 'react';
import LeftSideBar from './left_side_bar';
import CenterBar from './center_bar';

class Dashboard extends React.Component {

  render () {
    return (
      <div className='dashboard'>
        <LeftSideBar />
        <CenterBar />
      </div>
    );
  }
}


export default Dashboard;
