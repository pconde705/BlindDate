import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: "", mess: [] }
  }
  static navigationOptions = {
    title: 'BlindDate',
    headerStyle: { backgroundColor: 'black' },
    headerTitleStyle: {
      fontFamily: 'Futura',
      fontSize: 20,
      fontWeight: '100',
      color: '#C1B497',
    }
  }
  componentDidMount() {
    let arr = Object.values(this.props.messages);
    let empty = [];
    arr.map(message => {
      if (this.props.navigation.state.params.user.match_first_name === message.recipient_first_name) {
        empty.push({_id: message.id, text: message.body,
          user: { _id: this.props.navigation.state.params.user.match_id,
            name: message.recipient_first_name} });
      } else if (this.props.navigation.state.params.user.match_first_name === message.sender_first_name) {
        empty.push({_id: message.id, text: message.body,
          user: { _id: this.props.navigation.state.params.user.match_id,
            name: message.sender_first_name} });
      }
    });
    this.setState({mess: empty});
  }


  onSend(messages = []) {
    this.setState({body: messages[0].text})
    const newMessage = Object.assign({}, this.state)
    this.props.createMessage(this.props.currentUser.id, this.props.navigation.state.params.user.match_id, newMessage);
    this.setState((previousState) => ({
      mess: GiftedChat.append(previousState.mess, messages),
    }));
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // nextProps.fetchMessages();
  }

  render () {
    // console.log(this.state.messages);
    // console.log(this.props.messages);
    // console.log(this.props.navigation.state.params.user);
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
    )
  }
}

export default ChatRoom;
