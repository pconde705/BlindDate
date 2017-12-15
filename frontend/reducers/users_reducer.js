import {
  RECEIVE_ALL_USERS,
  RECEIVE_USER
} from '../actions/user_actions';

import {
  RECEIVE_ELIGIBLE,
  REMOVE_ELIGIBLE
} from '../actions/eligible_actions';

import {
  RECEIVE_POTENTIAL,
  REMOVE_POTENTIAL
} from '../actions/potential_actions';

import {
  RECEIVE_MATCHES,
  RECEIVE_MATCH
} from '../actions/match_actions';

import {
  RECEIVE_REJECT
} from '../actions/reject_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return Object.assign([], action.users);
    case RECEIVE_USER:
      return Object.assign({}, action.payload.user);
    default:
      return state;
  }
};

export default usersReducer;
