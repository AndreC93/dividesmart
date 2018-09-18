import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import UserShowPage from './user_show_page';
import DashboardCenterBar from './dashboard_center_bar';

class CenterBar extends React.Component {
  render () {
    return (
      <div className='center-bar' >
        <Switch>
          <Route exact path='/api/users/:id' component={ UserShowPage } />
          <Route exact path='/dashboard' component={ DashboardCenterBar } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(CenterBar);
