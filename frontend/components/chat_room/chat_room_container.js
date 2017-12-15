import {connect} from 'react-redux';
import ChatRoom from './chat_room';
import {fetchMessages, createMessage} from '../../actions/message_actions'

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    messages: state.messages
};};

const mapDispatchToProps = dispatch => ({
  fetchMessages: () => dispatch(fetchMessages()),
  createMessage: (inputMessage) => dispatch(createMessage(inputMessage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoom);
