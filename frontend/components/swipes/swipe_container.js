import { connect } from 'react-redux';
import SwipeScreen from './swipe';
import { getUser } from '../../actions/user_actions';
import {
  deleteEligible
} from '../../actions/eligible_actions';
import {
  createPotential,
  deletePotential
} from '../../actions/potential_actions';
import { createReject } from '../../actions/reject_actions';
import { createMatch } from '../../actions/match_actions';
import { getEligibles } from '../../actions/eligible_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.entities.user
});

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(getUser(userId)),
  getEligibles: userId => dispatch(getEligibles(userId)),
  deleteEligible: userId => dispatch(deleteEligible(userId)),
  createPotential: userId => dispatch(createPotential(userId)),
  deletePotential: userId => dispatch(deletePotential(userId)),
  createReject: userId => dispatch(createReject(userId)),
  createMatch: userId => dispatch(createMatch(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeScreen);
