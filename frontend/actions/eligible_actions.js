import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_ELIGIBLE = 'RECEIVE_ELIGIBLE';
export const REMOVE_ELIGIBLE = 'REMOVE_ELIGIBLE';

const receiveEligible = user => ({
  type: RECEIVE_ELIGIBLE,
  user
});

const removeEligible = userId => ({
  type: REMOVE_ELIGIBLE,
  userId
});

export const createEligible = userId => dispatch => (
  axios.post(`${USERS_URL}/${userId}/eligibles`)
  .then(response => dispatch(receiveEligible(response.data)))
);

export const deleteEligible = inputUserId => dispatch => (
  axios.delete(`${USERS_URL}/${inputUserId}/eligible`)
  .then(response => dispatch(removeEligible(response.data)))
);
