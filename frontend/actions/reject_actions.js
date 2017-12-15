import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_REJECT = 'RECEIVE_REJECT';

const receiveReject = currentUser => ({
  type: RECEIVE_REJECT,
  currentUser
});

export const createReject = userId => dispatch => (
  axios.post(`${USERS_URL}/${userId}/rejects`)
  .then(response => dispatch(receiveReject(response.data)))
);
