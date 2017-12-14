import { connect } from 'react-redux';
import Message from './message';

import { fetchMessages } from '../../actions/message_actions';

const mapStateToProps = state => ({
  messages: state.entities.messages,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: (userId) => dispatch(fetchMessages(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
