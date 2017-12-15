import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_POTENTIAL = 'RECEIVE_POTENTIAL';
export const REMOVE_POTENTIAL = 'REMOVE_POTENTIAL';

const receivePotential = currentUser => ({
  type: RECEIVE_POTENTIAL,
  currentUser
});

const removePotential = currentUser => ({
  type: REMOVE_POTENTIAL,
  currentUser
});

export const createPotential = userId => dispatch => (
  axios.post(`${USERS_URL}/${userId}/potentials`)
  .then(response => dispatch(receivePotential(response.data)))
);

export const deletePotential = inputUserId => dispatch => (
  axios.delete(`${USERS_URL}/${inputUserId}/potential`)
  .then(response => dispatch(removePotential(response.data)))
);
