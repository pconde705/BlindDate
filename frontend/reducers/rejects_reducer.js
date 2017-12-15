import {
  RECEIVE_REJECT
} from '../actions/reject_actions';

const rejectReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REJECT:
      let reject = action.reject;
      return Object.assign({}, reject);
    default:
      return state;
  }
};

export default rejectReducer;
