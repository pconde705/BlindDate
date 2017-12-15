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

export const fetchMessages = userId => dispatch => (
  axios.get(`${USERS_URL}/${userId}/messages`, {})
  .then(response => dispatch(receiveMessages(response.data)))
);

export const createMessage = (userId, receipientId, inputMessage) => dispatch => (
  axios.post(`${USERS_URL}/${userId}/messages`, { inputMessage })
  .then(response => dispatch(receiveMessage(response.data)))
);
