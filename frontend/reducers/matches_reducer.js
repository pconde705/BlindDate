import {
  RECEIVE_MATCHES,
  RECEIVE_MATCH
} from '../actions/match_actions';

const matchesReducer = (state = {}, action) => {
  Object.freeze(state);
  // console.log(action);
  switch (action.type) {
    case RECEIVE_MATCHES:
      let matches = action.matches;
      return Object.assign({}, matches);
    case RECEIVE_MATCH:
      return Object.assign({}, state, {[action.payload.match.id]: action.payload.match});
    default:
      return state;
  }
};

export default matchesReducer;
