import { connect } from 'react-redux';
import SwipeScreen from './swipe';
import { getUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  user: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  getUser: userId => dispatch(getUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwipeScreen);
