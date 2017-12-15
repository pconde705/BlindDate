import {
  RECEIVE_POTENTIAL,
  REMOVE_POTENTIAL
} from '../actions/potential_actions';

const potentialReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POTENTIAL:
      let potential = action.potential;
      return Object.assign({}, potential);
    case REMOVE_POTENTIAL:
      let newState = Object.assign({}, state);
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default potentialReducer;
