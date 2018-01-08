import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_REJECT = 'RECEIVE_REJECT';
export const RECEIVE_REJECT_ERRORS = "RECEIVE_REJECT_ERRORS";

const receiveReject = currentUser => ({
  type: RECEIVE_REJECT,
  currentUser
});

const receiveRejectErrors = errors => ({
  type: "RECEIVE_REJECT_ERRORS",
  errors
});

export const createReject = userId => dispatch => (
  axios.post(`${USERS_URL}/${userId}/rejects`)
  .then(response => dispatch(receiveReject(response.data)))
  .catch(error => dispatch(receiveRejectErrors(error.response.data)))
);
