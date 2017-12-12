import {RECEIVE_CURRENT_USER} from '../actions/session_actions';


const _nullUser = Object.freeze({
  id: null, email: null, first_name: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let currentUser;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      currentUser = action.currentUser;
      return Object.assign({}, { id: currentUser.id, email: currentUser.email, first_name: currentUser.first_name });
    default:
      return state;
  }
};

export default sessionReducer;
