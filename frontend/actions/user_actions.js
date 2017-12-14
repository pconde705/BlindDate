import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const getUser = user => dispatch => (
  axios.get(`${USERS_URL}/${user.id}`, {user})
  .then(response => dispatch(receiveUser(response.data)))
  .catch(error => dispatch(receiveUserErrors(error.response.data)))
);

export const getUsers = users => dispatch => (
  axios.get(USERS_URL, {users})
  .then(response => dispatch(receiveUsers(response.data)))
  .catch(error => dispatch(receiveUserErrors(error.response.data)))
);

export const editUser = user => dispatch => (
  axios.patch(`${USERS_URL}/${user.id}`, {user})
  .then(response => dispatch(receiveUser(response.data)))
  .catch(error => dispatch(receiveUserErrors(error.response.data)))
);
