import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const START_LOADING_MESSAGES = 'START_LOADING_MESSAGES';
export const RECEIVE_MESSAGE_ERRORS = 'RECEIVE_MESSAGE_ERRORS';

const receiveMessages = messages => ({
  type: RECEIVE_MESSAGES,
  messages
});

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

const receiveMessageErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

export const fetchMessages = recipient_id => dispatch => (
  axios.get(`${USERS_URL}/${recipient_id}/messages`, {})
  .then(response => dispatch(receiveMessages(response.data)))
  .catch(error => dispatch(receiveMessageErrors(error.response.data)))
);

export const createMessage = (recipient_id, inputMessage, mess) => dispatch => (
  axios.post(`${USERS_URL}/${recipient_id}/messages`, { inputMessage, mess })
  .then(response => dispatch(receiveMessage(response.data)))
  .catch(error => dispatch(receiveMessageErrors(error.response.data)))
);
