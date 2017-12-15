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
  Login: { screen: LoginContainer },
  Signup: { screen: SignupContainer },
  Profile: { screen: ProfileContainer },
  Swipes: { screen: SwipeContainer },
  Messages: { screen: MessageContainer },
  ChatRoom: { screen: ChatRoomContainer }
});

export default AppMain;
