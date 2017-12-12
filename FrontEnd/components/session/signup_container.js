import {connect} from 'react-redux';
import {signup, clearErrors} from '../../actions/session_actions';
import SignupScreen from './signup';

const mapStateToProps = state => ({
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen)