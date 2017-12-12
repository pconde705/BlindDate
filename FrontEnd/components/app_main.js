import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';

const AppMain = StackNavigator({
  Login: { screen: LoginContainer },
  Signup: { screen: SignupContainer }
});

export default AppMain;
