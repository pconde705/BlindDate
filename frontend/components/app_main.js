import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ProfileContainer from './profile/profile_container';
import SwipeContainer from './swipes/swipe_container';

const AppMain = StackNavigator({
  Login: { screen: LoginContainer },
  Signup: { screen: SignupContainer },
  Profile: { screen: ProfileContainer },
  Swipes: { screen: SwipeContainer }
});

export default AppMain;
