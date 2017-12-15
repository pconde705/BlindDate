import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_ELIGIBLE = 'RECEIVE_ELIGIBLE';
export const REMOVE_ELIGIBLE = 'REMOVE_ELIGIBLE';

const receiveEligible = eligible => ({
  type: RECEIVE_ELIGIBLE,
  eligible
});

const removeEligible = userId => ({
  type: REMOVE_ELIGIBLE,
  userId
});

export const createEligible = (inputEligible, userId) => dispatch => (
  axios.post(`${USERS_URL}/${userId}/eligibles`, { inputEligible })
  .then(response => dispatch(receiveEligible(response.data)))
);

export const deleteEligible = inputUserId => dispatch => (
  axios.delete(`${USERS_URL}/${inputUserId}/eligible`)
  .then(response => dispatch(removeEligible(response.data)))
);
