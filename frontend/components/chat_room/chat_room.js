import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "", mess: [] };
  }

  componentDidMount() {
    let arr = Object.values(this.props.messages);
    let empty = [];
    arr.map(message => {
      if (this.props.navigation.state.params.user.match_first_name === message.recipient_first_name
      && message.sender_first_name === this.props.currentUser.first_name) {
        empty.push({_id: message.id, text: message.body, createdAt: message.created_at,
          user: { _id: this.props.currentUser.id,
            name: this.props.currentUser.first_name} });
      } else if (this.props.navigation.state.params.user.match_first_name === message.sender_first_name
      && message.recipient_first_name === this.props.currentUser.first_name) {
        empty.push({_id: message.id, text: message.body, createdAt: message.created_at,
          user: { _id: this.props.navigation.state.params.user.match_id,
            name: message.sender_first_name} });
      }
    });
    // console.log(empty);
    this.setState({mess: empty.reverse()});
  }


  onSend(messages = []) {
    this.setState((previousState) => {
      return {
      mess: GiftedChat.append(previousState.mess, messages),
    };
  });
    // console.log("Before", this.state);
    this.props.createMessage(this.props.navigation.state.params.user.match_id, messages[0].text, this.state.mess);
    // console.log("After the createMessage action", this.state);
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps.fetchMessages();
  }

  render () {
    // text={(body) => this.setState({body})}
    // onInputTextChanged={(body) => this.setState({body})}
    return (
      <GiftedChat
        messages={this.state.mess}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: this.props.currentUser.id, name: this.props.currentUser.name
        }}
      />
  );
  }
}

export default ChatRoom;
