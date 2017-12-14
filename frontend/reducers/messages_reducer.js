import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE
} from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MESSAGES:
      let messages = action.messages;
      return Object.assign({}, messages);
    case RECEIVE_MESSAGE:
      return;
    default:
      return state;
  }
};

export default messagesReducer;
