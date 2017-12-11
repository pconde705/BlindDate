import { connect } from 'react-redux';
import {login} from '../../actions/session_actions';
import LoginScreen from './login';

const mapStateToProps = state => ({
  // loggedIn: Boolean(state.session.currentUser),

});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
