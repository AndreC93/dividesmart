import { combineReducers } from 'redux';
import users from './users_reducer';
import bills from './bills_reducer';

export default combineReducers({ users, bills });
