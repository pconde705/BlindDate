import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button } from 'react-native';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {first_name: "", last_name: "", email: "", password: ""};
  }

  componentWillMount() {
    AppState.addEventListener('change', this.props.clearErrors());
  }

  handleSignup(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (this.state.first_name !== "" &&
        this.state.last_name !== "" &&
        this.state.email !== "" &&
        this.state.password !== "") {
          this.props.signup(user);
          this.props.navigation.navigate('Profile', {user: user});
        }
  }

  renderErrors() {
    // console.log(this.props.errors);
    if (this.props.errors.length === 0) {
      return (
        <Text style={styles.errors}></Text>
      );
    } else {
      // console.log(this.props);
      return (
        <Text style={styles.errors}>
          {
            this.props.errors.map((error) => (
            `${error}`
            ))
          }
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
        <TextInput
          value={this.state.first_name}
          placeholder='first name'
          onChangeText={first_name => this.setState({first_name})}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='default'
          style={styles.inputField}
         />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.last_name}
          placeholder='last name'
          onChangeText={last_name => this.setState({last_name})}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='default'
          style={styles.inputField}
         />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.email}
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

      <TouchableOpacity onPress={(e) => this.handleSignup(e)}>
        <Text style={styles.signup}>SIGN UP</Text>
      </TouchableOpacity>

      {this.renderErrors()}
      <Text style={styles.signinPrompt}>
        Already have an account?
      </Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
        <Text style={styles.signinButton}>SIGN IN</Text>
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
    paddingHorizontal: 10
  },
  inputContainer: {
    flexDirection: 'row',
  },
  signinButton: {
    color: 'red',
    fontFamily: 'Futura',
    fontWeight: '500',
    marginTop: 20
  },
  signinPrompt: {
    color: '#fff',
    fontFamily: 'Futura',
    fontSize: 14
  },
  signup: {
    color: '#C1B497',
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  title: {
    fontFamily: 'Futura',
    fontWeight: '100',
    color: '#C1B497',
    fontSize: 50
  }
});

export default SignupScreen;
