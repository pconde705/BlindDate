import React from 'react';
import {View, Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
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
    // nextProps.fetchMessages();
  }

  render () {
    console.log(this.props);
    // text={(body) => this.setState({body})}
    // onInputTextChanged={(body) => this.setState({body})}
    return (
      <View>
        <GiftedChat
         messages={this.state.messages}
         string={(body) => this.setState({body})}
         onSend={e => this.onSend(e)}
         user={{
           _id: this.props.currentUser.id, name: this.props.currentUser.first_name
         }}
       />
      </View>
    );
  }
}

export default ChatRoom;
