import { connect } from 'react-redux';
import SwipeScreen from './swipe';
import {getUsers} from '../../actions/user_actions';

const mapStateToProps = state => {

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
