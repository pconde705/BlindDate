import { combineReducers } from 'redux';

import users from './users_reducer';
import messages from './messages_reducer';
import matches from './matches_reducer';

export default combineReducers({
  users,
  messages,
  matches
});
