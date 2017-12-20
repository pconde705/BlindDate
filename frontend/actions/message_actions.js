import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const START_LOADING_MESSAGES = 'START_LOADING_MESSAGES';

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

export const fetchMessages = recipient_id => dispatch => (
  axios.get(`${USERS_URL}/${recipient_id}/messages`, {})
  .then(response => dispatch(receiveMessages(response.data)))
);

export const createMessage = (recipient_id, inputMessage, mess) => dispatch => (
  axios.post(`${USERS_URL}/${recipient_id}/messages`, { inputMessage, mess })
  .then(response => dispatch(receiveMessage(response.data)))
);
