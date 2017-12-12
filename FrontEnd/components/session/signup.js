import React from 'react';
import {Text, View} from 'react-native';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props)

  }

  componentWillMount(){
    AppState.addEventListener('change', this.props.clearErrors);
  }

  render () {
    return (
      <View>
        <Text>Hello!</Text>
      </View>
    )
  }
}

export default SignupScreen;
