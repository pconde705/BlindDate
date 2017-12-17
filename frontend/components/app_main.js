import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ProfileContainer from './profile/profile_container';
import SwipeContainer from './swipes/swipe_container';
import MessageContainer from './messages/message_container';
import ChatRoomContainer from './chat_room/chat_room_container';

console.ignoredYellowBox = ['Remote debugger'];

const AppMain = StackNavigator({
  Login: {
    screen: LoginContainer,
    navigationOptions: {
      headerStyle: { backgroundColor: 'black' },
      headerLeft: null
    }
  },
  Signup: {
    screen: SignupContainer,
    navigationOptions: {
      headerStyle: { backgroundColor: 'black' },
      headerLeft: null
    }
  },
  Profile: {
    screen: ProfileContainer,
    navigationOptions: {
      title: 'BlindDate',
      headerLeft: null,
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: {
        fontFamily: 'Futura',
        fontSize: 20,
        fontWeight: '100',
        color: '#C1B497',
      }
    }
  },
  Swipes: {
    screen: SwipeContainer,
    navigationOptions: {
      title: 'BlindDate',
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: {
        fontFamily: 'Futura',
        fontSize: 20,
        fontWeight: '100',
        color: '#C1B497',
      }
    }
  },
  Messages: {
    screen: MessageContainer,
<<<<<<< HEAD
    navigationOptions: {
      title: 'BlindDate',
      headerLeft: null,
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: {
        fontFamily: 'Futura',
        fontSize: 20,
        fontWeight: '100',
        color: '#C1B497',
      }
    }
=======
    // navigationOptions: {
    //   title: 'BlindDate',
    //   headerStyle: { backgroundColor: 'black' },
    //   headerTitleStyle: {
    //     fontFamily: 'Futura',
    //     fontSize: 20,
    //     fontWeight: '100',
    //     color: '#C1B497',
    //   }
    // }
>>>>>>> 6a64bf237251d3bb4581c1dfa8a795f7c7c91a95
   },
  ChatRoom: {
    screen: ChatRoomContainer,
    navigationOptions: {
      title: 'Chat',
      headerLeft: null,
      headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: {
        fontFamily: 'Futura',
        fontSize: 20,
        fontWeight: '100',
        color: '#C1B497',
      }
    }
   }
});

export default AppMain;
