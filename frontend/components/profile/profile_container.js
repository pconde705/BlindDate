import {connect} from 'react-redux';
import {editUser} from '../../actions/session_actions';
import ProfileScreen from './profile';

const mapStateToProps = state => {

  return {

};};

const mapDispatchToProps = dispatch => ({
  editUser: (user) => dispatch(editUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen)
