import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ProfileContainer from './profile/profile_container';
import SwipeContainer from './swipes/swipe_container';
import MessageContainer from './messages/message_container';

console.ignoredYellowBox = ['Remote debugger'];

const AppMain = StackNavigator({
  Swipes: { screen: SwipeContainer },
  Messages: { screen: MessageContainer },
  Login: { screen: LoginContainer },
  Signup: { screen: SignupContainer },
  Profile: { screen: ProfileContainer }
});

export default AppMain;
