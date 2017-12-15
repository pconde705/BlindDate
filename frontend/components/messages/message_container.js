import { connect } from 'react-redux';
import Message from './message';

import { fetchMessages } from '../../actions/message_actions';
import { fetchMatches } from '../../actions/match_actions';

const mapStateToProps = state => {
  // console.log(state);
  return {
  messages: state.entities.messages,
  currentUser: state.session.currentUser,
  matches: Object.values(state.entities.matches)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMessages: userId => dispatch(fetchMessages(userId)),
  fetchMatches: userId => dispatch(fetchMatches(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
