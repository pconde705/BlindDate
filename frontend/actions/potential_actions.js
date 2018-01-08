import { USERS_URL } from '../api/api';
import axios from 'axios';

export const RECEIVE_POTENTIAL = 'RECEIVE_POTENTIAL';
export const REMOVE_POTENTIAL = 'REMOVE_POTENTIAL';
export const RECEIVE_POTENTIAL_ERRORS = "RECEIVE_POTENTIAL_ERRORS";

const receivePotential = currentUser => ({
  type: RECEIVE_POTENTIAL,
  currentUser
});

const removePotential = currentUser => ({
  type: REMOVE_POTENTIAL,
  currentUser
});

const receivePotentialErrors = errors => ({
  type: RECEIVE_POTENTIAL_ERRORS,
  errors
});

export const createPotential = userId => dispatch => (
  axios.post(`${USERS_URL}/${userId}/potentials`)
  .then(response => dispatch(receivePotential(response.data)))
  .catch(error => dispatch(receivePotentialErrors(error.response.data)))
);

export const deletePotential = inputUserId => dispatch => (
  axios.delete(`${USERS_URL}/${inputUserId}/potential`)
  .then(response => dispatch(removePotential(response.data)))
  .catch(error => dispatch(receivePotentialErrors(error.response.data)))
);
