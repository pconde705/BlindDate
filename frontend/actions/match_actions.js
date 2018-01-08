import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';
export const RECEIVE_MATCH = 'RECEIVE_MATCH';
export const START_LOADING_MATCHES = 'START_LOADING_MATCHES';
export const RECEIVE_MATCH_ERRORS = 'RECEIVE_MATCH_ERRORS';

const receiveMatches = payload => ({
  type: RECEIVE_MATCHES,
  payload
});

const receiveMatch = payload => ({
  type: RECEIVE_MATCH,
  payload
});

const receiveMatchErrors = errors => ({
  type: RECEIVE_MATCH_ERRORS,
  errors
});

export const fetchMatches = userId => dispatch => (
  axios.get(`${USERS_URL}/${userId}/matches`, {})
  .then(response => dispatch(receiveMatches(response.data)))
  .catch(error => dispatch(receiveMatchErrors(error.response.data)))
);

export const createMatch = userId => dispatch => (
  axios.post(`${USERS_URL}/${userId}/messages`)
  .then(response => dispatch(receiveMatch(response.data)))
  .catch(error => dispatch(receiveMatchErrors(error.response.data)))
);
