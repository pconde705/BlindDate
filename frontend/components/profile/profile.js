// jshint esversion: 6
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button } from 'react-native';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date_of_birth: "", gender: "", sexual_orientation: "",
      img_url: "", age_preference: "", introduction: "", dream_job: "",
      cooking_preference: "", book_preference: "", movie_preference: "",
      pet_preference: "", favorite_youtuber: "",
      outdoor_activity_preference: "", indoor_activity_preference: "",
      inside_joke: "", intelligence_level: "", what_do_you_do: "",
      post_first_date: "" };
  }

  static navigationOptions = {
    title: 'BlindDate',
    headerStyle: { backgroundColor: 'black' },
    headerTitleStyle: {
      fontFamily: 'Futura',
      fontSize: 20,
      fontWeight: '100',
      color: '#C1B497',
    }
  }

  componentWillMount() {
    AppState.addEventListener('change', this.props.clearErrors());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.gender !== null && nextProps.currentUser.date_of_birth !== null &&
    nextProps.currentUser.sexual_orientation !== null && nextProps.currentUser.age_preference !== null) {
        const user = Object.assign({}, this.state);
        this.props.navigation.navigate('Swipes', {user: user});
    }
  }

  handleProfile(e) {
    e.preventDefault();
    if (this.state.date_of_birth !== "" &&
        this.state.gender !== "",
        this.state.sexual_orientation !== "",
        this.state.age_preference !== "") {
      const user = Object.assign({}, this.state);
      this.props.editUser(user);
      this.props.navigation.navigate('Swipes', {user: user});
    }
  }

  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
          <Text style={styles.welcome}>
            EDIT PROFILE
          </Text>

          <Text style={styles.requiredFields}>
            TEXT FIELDS IN RED ARE REQUIRED
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.date_of_birth}
              placeholder='When is your birthday? e.g. 1930-03-24'
              onChangeText={date_of_birth => this.setState({date_of_birth})}
              style={styles.requiredInputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.gender}
              placeholder='What gender do you identify as?'
              onChangeText={gender => this.setState({gender})}
              style={styles.requiredInputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.sexual_orientation}
              placeholder='What is your sexual orientation?'
              onChangeText={sexual_orientation => this.setState({sexual_orientation})}
              style={styles.requiredInputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.age_preference}
              placeholder='Age Preference'
              onChangeText={age_preference => this.setState({age_preference})}
              style={styles.requiredInputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.introduction}
              placeholder='Tell us a bit about yourself...'
              onChangeText={introduction => this.setState({introduction})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.dream_job}
              placeholder='What is your dream job?'
              onChangeText={dream_job => this.setState({dream_job})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.cooking_preference}
              placeholder='Do you like to cook?'
              onChangeText={cooking_preference =>
                this.setState({cooking_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.book_preference}
              placeholder='What are your favorite books?'
              onChangeText={book_preference =>
                this.setState({book_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.movie_preference}
              placeholder='What are your favorite movies?'
              onChangeText={movie_preference =>
                this.setState({movie_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.pet_preference}
              placeholder='Tell us about your pets.'
              onChangeText={pet_preference => this.setState({pet_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.favorite_youtuber}
              placeholder='Who is your favorite Youtuber?'
              onChangeText={favorite_youtuber => this.setState({favorite_youtuber})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.outdoor_activity_preference}
              placeholder='Favorite outdoor activities?'
              onChangeText={outdoor_activity_preference => this.setState({outdoor_activity_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.indoor_activity_preference}
              placeholder='Favorite indoor activities?'
              onChangeText={indoor_activity_preference => this.setState({indoor_activity_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.inside_joke}
              placeholder='Tell us an inside joke...'
              onChangeText={inside_joke => this.setState({inside_joke})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.intelligence_level}
              placeholder='Are you intelligent?'
              onChangeText={intelligence_level => this.setState({intelligence_level})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.what_do_you_do}
              placeholder='What do you do?'
              onChangeText={what_do_you_do => this.setState({what_do_you_do})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.props.currentUser.post_first_date}
              placeholder='We just had a great first date... now what?'
              onChangeText={post_first_date => this.setState({post_first_date})}
              style={styles.inputField}
              />
          </View>

          <TouchableOpacity onPress={(e) => this.handleProfile(e)}>
            <Text style={styles.save}>SAVE</Text>
          </TouchableOpacity>

      </View>

    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    padding: 20
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
  requiredInputField: {
    backgroundColor: '#c4c4c4',
    borderColor: 'red',
    borderRadius: 8,
    borderWidth: 2,
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
  requiredFields: {
    color: 'red',
    fontFamily: 'Futura',
    letterSpacing: 2
  },
  save: {
    color: '#C1B497',
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center'
  },
  welcome: {
    fontFamily: 'Futura',
    fontWeight: '100',
    color: '#C1B497',
    fontSize: 25,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  }
});

export default ProfileScreen;
