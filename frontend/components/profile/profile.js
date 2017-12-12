// jshint esversion: 6
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button } from 'react-native';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Please complete as many fields as possible!
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

export default ProfileScreen;
