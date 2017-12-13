import { connect } from 'react-redux';
import {login, clearErrors} from '../../actions/session_actions';
import LoginScreen from './login';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
