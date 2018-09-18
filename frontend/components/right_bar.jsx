import React from 'react';
import RightBarUserShow from './right_bar_user_show';
import { Switch, Route, withRouter } from 'react-router-dom';

class RightBar extends React.Component {
  render () {
    return (
      <div className='right-bar' >
        <Switch>
          <Route exact path={`/api/users/:id`} component={ RightBarUserShow } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(RightBar);
