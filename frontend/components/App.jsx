import React from 'react';
import TopBar from './top_bar';
import { Route } from 'react-router-dom';
import Errors from './errors';
// import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <div>
      <TopBar className={'top-bar'}/>
      <Route path='/' component={ Errors } />
    </div>
  );
};

export default App;
