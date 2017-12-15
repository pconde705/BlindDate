import {
  RECEIVE_ELIGIBLE,
  REMOVE_ELIGIBLE
} from '../actions/eligible_actions';

const eligibleReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ELIGIBLE:
      let eligible = action.eligible;
      return Object.assign({}, eligible);
    case REMOVE_ELIGIBLE:
      let newState = Object.assign({}, state);
      delete newState[action.userId];
      return newState;
    default:
      return state;
  }
};

export default eligibleReducer;
