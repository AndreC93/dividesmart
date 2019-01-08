import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

export default function (preloadedState = {}) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk),
  );
}
