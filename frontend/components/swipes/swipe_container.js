import { connect } from 'react-redux';
import SwipeScreen from './swipe';
import {getUsers} from '../../actions/session_actions';

const mapStateToProps = state => {
  // console.log(state);
  return {
  currentUser: state.session.currentUser,
  users: state.users
};};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeScreen);
