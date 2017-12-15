import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: "", messages: [] }
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  // componentWillMount() {
  //   this.props.fetchMessages();
  // }
  //
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // nextProps.fetchMessages();
  }

  render () {
    console.log(this.props.navigation.state.params.user);
    // text={(body) => this.setState({body})}
    // onInputTextChanged={(body) => this.setState({body})}
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default ChatRoom;
