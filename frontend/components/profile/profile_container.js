import { connect } from 'react-redux';
import { editUser } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session_actions';
import ProfileScreen from './profile';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // console.log(ownProps);
  return {
    currentUser: state.session.currentUser
};};

const mapDispatchToProps = dispatch => ({
  editUser: (user) => dispatch(editUser(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
