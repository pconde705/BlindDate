// jshint esversion: 6

import {SESSION_URL, USERS_URL, API_URL} from '../api/api';
import axios from 'axios';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = user => dispatch => (
  axios.post(SESSION_URL, {user})
  .then(response => dispatch(receiveCurrentUser(response.data)))
  .catch(error => {
    console.log(error.response);
    dispatch(receiveSessionErrors(error.response.data));
  })
);

export const signup = user => dispatch => (
  axios.post(USERS_URL, {user})
    .then(response => dispatch(receiveCurrentUser(response.data)))
    .catch(error => dispatch(receiveSessionErrors(error.response.data)))
  );

export const logout = () => dispatch => (
  axios.delete(SESSION_URL, { params: {} })
);
