import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button } from 'react-native';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {email: "", password: ""};

  }

  componentWillMount() {
    AppState.addEventListener('change', this.props.clearErrors());
  }

  handleSignup(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
    this.props.navigation.navigate('Profile', {user: user})
  }

  renderErrors() {
    // console.log(this.props.errors);
    if (this.props.errors.length === 0) {
      return (
        <Text></Text>
      )
    } else {
      // console.log(this.props);
      return (
        <Text>
          {this.props.errors.map((error) => (
            `${error}`
          ))}
        </Text>
      )
    }
  }


  render () {
    return (
      <View style={styles.container}>
      <Button title="Login" onPress={() => this.props.navigation.navigate('Login')} />
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
      <TouchableOpacity onPress={(e) => this.handleSignup(e)}>
        <Text>Sign up</Text>
      </TouchableOpacity>
      {this.renderErrors()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  inputField: {
    color: 'black',
    flex: 1,
    width: 60,
    height: 60,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'blue'
  },
  inputContainer: {
    borderBottomColor: '#9E7CE3',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  }
})

export default SignupScreen;
