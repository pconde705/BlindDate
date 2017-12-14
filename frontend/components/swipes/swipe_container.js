import { connect } from 'react-redux';
import SwipeScreen from './swipe';
import {getUsers} from '../../actions/user_actions';

const mapStateToProps = state => {
  console.log(Object.values(state.users));
  console.log(Object.keys(state.users));
  console.log((state.users["users"]));
  return {
  currentUser: state.session.currentUser,
  users: Object.values(state.users)
};};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeScreen);
