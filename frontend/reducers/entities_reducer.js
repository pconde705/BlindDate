import { combineReducers } from 'redux';

import users from './users_reducer';
import messages from './messages_reducer';
import matches from './matches_reducer';
import potentials from './potentials_reducer';
import eligibles from './eligibles_reducer';
import rejects from './rejects_reducer';

export default combineReducers({
  users,
  messages,
  matches
});
