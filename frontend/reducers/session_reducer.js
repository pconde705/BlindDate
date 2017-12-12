import {RECEIVE_CURRENT_USER} from '../actions/session_actions';


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
    default:
      return state;
  }
};

export default sessionReducer;
