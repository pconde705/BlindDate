import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_ELIGIBLE = 'RECEIVE_ELIGIBLE';
export const RECEIVE_ELIGIBLES = 'RECEIVE_ELIGIBLES';
export const REMOVE_ELIGIBLE = 'REMOVE_ELIGIBLE';

const receiveEligible = currentUser => ({
  type: RECEIVE_ELIGIBLE,
  currentUser
});

const receiveEligibles = payload => ({
  type: RECEIVE_ELIGIBLES,
  payload
});

const removeEligible = currentUser => ({
  type: REMOVE_ELIGIBLE,
  currentUser
});

export const getEligibles = userId => dispatch => (
  axios.get(`${USERS_URL}/${userId}/eligibles`)
  .then(response => dispatch(receiveEligibles(response.data)))
);

export const createEligible = userId => dispatch => (
  axios.post(`${USERS_URL}/${userId}/eligibles`)
  .then(response => dispatch(receiveEligible(response.data)))
);

export const deleteEligible = inputUserId => dispatch => (
  axios.delete(`${USERS_URL}/${inputUserId}/eligible`)
  .then(response => dispatch(removeEligible(response.data)))
);
