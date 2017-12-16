import {connect} from 'react-redux';
import ChatRoom from './chat_room';
import {fetchMessages, createMessage} from '../../actions/message_actions';

const mapStateToProps = state => {
  // console.log(state);
  return {
    currentUser: state.session.currentUser,
    messages: state.entities.messages
};};

const mapDispatchToProps = dispatch => ({
  fetchMessages: userId => dispatch(fetchMessages(userId)),
  createMessage: (userId, inputMessage, mess) => dispatch(createMessage(userId, inputMessage, mess))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoom);
