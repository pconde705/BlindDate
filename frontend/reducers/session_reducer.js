import {RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  // console.log(action);
  let currentUser;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      return Object.assign({}, { currentUser });
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};

export default sessionReducer;
