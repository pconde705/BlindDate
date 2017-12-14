import { connect } from 'react-redux';
import SwipeScreen from './swipe';
import {getUsers} from '../../actions/session_actions';

const mapStateToProps = state => {
  console.log(state);
  return {
  currentUser: state.session.currentUser
};};

const mapDispatchToProps = dispatch => ({
  getUsers: users => dispatch(getUsers(users))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeScreen);
