// jshint esversion: 6
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button } from 'react-native';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
  }

  static navigationOptions = {
    headerStyle: { backgroundColor: 'black' }
  }

  handleLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loggedIn !== nextProps.loggedIn) {
      if (nextProps.loggedIn === true) {
        const user = Object.assign({}, this.state);
        this.props.navigation.navigate('Swipes', {user: user});
      }
    }
  }

  componentWillMount() {
    AppState.addEventListener('change', this.props.clearErrors());
  }

  renderErrors() {
    if (this.props.errors.length === 0) {
      return (
        <Text style={styles.errors}></Text>
      );
    } else {
      return (
        <Text style={styles.errors}>
          {this.props.errors.map((error) => (
            `${error}`
          ))}
        </Text>
      );
    }
  }

  render () {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>
            BlindDate
          </Text>

          <Text style={styles.blurb}>
            IT'S WHAT'S INSIDE THAT COUNTS
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput value={this.state.email}
            placeholder='email'
            onChangeText={email => this.setState({email})}
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            style={styles.inputField}
           />
         </View>
         <View style={styles.inputContainer}>
          <TextInput
            value={this.state.password}
            placeholder="password"
            onChangeText={ password => this.setState({password})}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.inputField}
          />
        </View>
        <TouchableOpacity onPress={(e) => this.handleLogin(e)}>
          <Text style={styles.login}>LOG IN</Text>
        </TouchableOpacity>
        {this.renderErrors()}
        <Text style={styles.signupPrompt}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.signupButton}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  blurb: {
    color: '#fff',
    fontFamily: 'Futura',
    fontSize: 14,
    letterSpacing: 2
  },
  container: {
    alignItems: 'center',
    // backgroundColor: '#25211e',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  errors: {
    alignItems: 'center',
    color: 'red',
    height: 20,
    justifyContent: 'center',
    marginBottom: 20
  },
  header: {
    alignItems: 'center',
    marginBottom: 30
  },
  inputField: {
    backgroundColor: '#c4c4c4',
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    color: 'black',
    flex: 1,
    fontFamily: 'Futura',
    fontSize: 16,
    height: 60,
    marginBottom: 3,
    marginTop: 10,
    paddingHorizontal: 10,
    width: 60
  },
  inputContainer: {
    flexDirection: 'row',
  },
  login: {
    color: '#C1B497',
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  signupButton: {
    color: 'red',
    fontFamily: 'Futura',
    fontWeight: '500',
    marginTop: 20
  },
  signupPrompt: {
    color: '#fff',
    fontFamily: 'Futura',
    fontSize: 14
  },
  title: {
    fontFamily: 'Futura',
    fontWeight: '100',
    color: '#C1B497',
    fontSize: 50
  }
});
export default LoginScreen;
