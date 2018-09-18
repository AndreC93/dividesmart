import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import friends from './friends_errors_reducer';

export default combineReducers({
  session,
  friends,
 });
