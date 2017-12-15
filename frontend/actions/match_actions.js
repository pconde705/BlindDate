import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';
export const RECEIVE_MATCH = 'RECEIVE_MATCH';
export const START_LOADING_MATCHES = 'START_LOADING_MATCHES';

const receiveMatches = matches => ({
  type: RECEIVE_MATCHES,
  matches
});

const receiveMatch = match => ({
  type: RECEIVE_MATCH,
  match
});

export const fetchMatches = userId => dispatch => (
  axios.get(`${USERS_URL}/${userId}/matches`, {})
  .then(response => dispatch(receiveMatches(response.data)))
);

export const createMatch = (inputMatch, userId) => dispatch => (
  axios.post(`${USERS_URL}/${userId}/messages`, { inputMatch })
  .then(response => dispatch(receiveMatch(response.data)))
);
