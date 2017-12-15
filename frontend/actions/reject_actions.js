import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_REJECT = 'RECEIVE_REJECT';
export const REMOVE_REJECT = 'REMOVE_REJECT';

const receiveReject = reject => ({
  type: RECEIVE_REJECT,
  reject
});

const removeReject = userId => ({
  type: REMOVE_REJECT,
  userId
});

export const createReject = (inputReject, userId) => dispatch => (
  axios.post(`${USERS_URL}/${userId}/rejects`, { inputReject })
  .then(response => dispatch(receiveReject(response.data)))
);

export const deleteReject = inputUserId => dispatch => (
  axios.delete(`${USERS_URL}/${inputUserId}/reject`)
  .then(response => dispatch(removeReject(response.data)))
);
