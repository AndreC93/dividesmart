import React from 'react';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_show_page';

class CenterBar extends React.Component {
  render () {
    return (
      <div className='center-bar' >
        <UserShowPage />
      </div>
    );
  }
}

export default withRouter(CenterBar);
