import {
  RECEIVE_MATCHES,
  RECEIVE_MATCH
} from '../actions/match_actions';

const matchesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MATCHES:
      let matches = action.matches;
      return Object.assign({}, matches);
    case RECEIVE_MATCH:
      return;
    default:
      return state;
  }
};

export default matchesReducer;
