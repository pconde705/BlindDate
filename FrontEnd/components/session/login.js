// jshint esversion: 6
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity} from 'react-native';
// import { login } from '../../actions/session_actions';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
  }

  handleLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  render () {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text>
          BlindDate
        </Text>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.email} placeHolder='email'
            onChangeText={email => this.setState({email})}
            autoCapitalize='none' autoCorrect={false}
            keyboardType='email-address' style={styles.inputField}
           />
         </View>
         <View style={styles.inputContainer}>
          <TextInput value={this.state.password} placeHolder="password"
            onChangeText={ password => this.setState({password})}
            autoCapitalize='none' autoCorrect={false}
            secureTextEntry={true} style={styles.inputField}
          />
        </View>
        <TouchableOpacity onPress={(e) => this.handleLogin(e)}>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 64
  },
  inputField: {
    color: 'black',
           flex: 1,
           width: 60,
           height: 60,
           fontSize: 16,
           borderTopColor: 'blue'
  },
  inputContainer: {
    borderBottomColor: '#9E7CE3',
       borderBottomWidth: 1,
       flex: 1,
       flexDirection: 'row',
       marginBottom: 10
  }
});
export default LoginScreen;
