import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import ProfileContainer from './profile/profile_container';

const AppMain = StackNavigator({
  Login: { screen: LoginContainer, navigationOptions: { headerTitle: 'Login'} },
  Signup: { screen: SignupContainer, navigationOptions: { headerTitle: 'Signup'} },
  Profile: { screen: ProfileContainer, navigationOptions: { headerTitle: 'Profile'} }
});

export default AppMain;
