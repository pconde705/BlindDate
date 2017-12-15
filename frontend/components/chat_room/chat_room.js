import React from 'react';
import {View, Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = { body: "" }
  }

  onSend(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    this.props.createMessage(message);
  }

  componentWillMount() {
    this.props.fetchMessages();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    nextProps.fetchMessages();
  }

  render () {
    // text={(body) => this.setState({body})}
    return (
      <View>
        <GiftedChat
         messages={this.state.messages}
         onInputTextChanged={(body) => this.setState({body})}
         onSend={e => this.onSend(e)}
         user={{
           _id: currentUser.id, name: currentUser.first_name
         }}
       />
      </View>
    )
  }
}

export default ChatRoom;
