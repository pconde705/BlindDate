import {
  RECEIVE_MATCHES,
  RECEIVE_MATCH
} from '../actions/match_actions';

const matchesReducer = (state = {}, action) => {
  Object.freeze(state);
  // console.log(action);
  switch (action.type) {
    case RECEIVE_MATCHES:
      let matches = action.payload;
      return Object.assign({}, matches);
    case RECEIVE_MATCH:
      return;
    default:
      return state;
  }
};

export default matchesReducer;
