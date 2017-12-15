import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_ELIGIBLE,
  REMOVE_ELIGIBLE
} from '../actions/eligible_actions';
import {
  RECEIVE_POTENTIAL,
  REMOVE_POTENTIAL
} from '../actions/potential_actions';
import {
  RECEIVE_MATCH,
  REMOVE_MATCH
} from '../actions/match_actions';
import {
  RECEIVE_REJECT
} from '../actions/reject_actions';
import { RECEIVE_ELIGIBLES } from '../actions/eligible_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  let currentUser;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    case RECEIVE_ELIGIBLE:
      currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    case REMOVE_ELIGIBLE:
      currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    case RECEIVE_POTENTIAL:
      currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    case REMOVE_POTENTIAL:
      currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    case RECEIVE_MATCH:
      currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    case REMOVE_MATCH:
      currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    case RECEIVE_REJECT:
      currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    case RECEIVE_ELIGIBLES:
      currentUser = action.payload.currentUser;
      return Object.assign({}, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
