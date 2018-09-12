import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as SessionApiUtil from './util/session_api_util';

function checkCurrentUser () {
  if (window.currentUser) {
    return {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser,
        },
      },
      session: {
        currentUserId: window.currentUser.id,
      },
    };
  } else {
    return {};
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.api = SessionApiUtil;
  const preloadedState = checkCurrentUser();
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});
