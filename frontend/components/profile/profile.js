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

  componentWillMount() {
    AppState.addEventListener('change', this.props.clearErrors());
  }

  handleProfile(e) {
    e.preventDefault();
    if (this.state.date_of_birth !== "" &&
        this.state.gender !== "",
        this.state.sexual_orientation !== "",
        this.state.age_preference !== "") {
      const user = Object.assign({}, this.state);
      this.props.editUser(user);
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
              value={this.state.date_of_birth}
              placeholder='When is your birthday?'
              onChangeText={date_of_birth => this.setState({date_of_birth})}
              style={styles.requiredInputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.gender}
              placeholder='What gender do you identify as?'
              onChangeText={gender => this.setState({gender})}
              style={styles.requiredInputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.sexual_orientation}
              placeholder='What is your sexual orientation?'
              onChangeText={sexual_orientation => this.setState({sexual_orientation})}
              style={styles.requiredInputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.age_preference}
              placeholder='Age Preference'
              onChangeText={age_preference => this.setState({age_preference})}
              style={styles.requiredInputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.img_url}
              placeholder='Upload an image of yourself...'
              onChangeText={img_url => this.setState({img_url})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.introduction}
              placeholder='Tell us a bit about yourself...'
              onChangeText={introduction => this.setState({introduction})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.dream_job}
              placeholder='What is your dream job?'
              onChangeText={dream_job => this.setState({dream_job})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.cooking_preference}
              placeholder='Do you like to cook?'
              onChangeText={cooking_preference =>
                this.setState({cooking_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.book_preference}
              placeholder='What are your favorite books?'
              onChangeText={book_preference =>
                this.setState({book_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.movie_preference}
              placeholder='What are your favorite movies?'
              onChangeText={movie_preference =>
                this.setState({movie_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.pet_preference}
              placeholder='Tell us about your pets.'
              onChangeText={pet_preference => this.setState({pet_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.favorite_youtuber}
              placeholder='Who is your favorite Youtuber?'
              onChangeText={favoriteYoutuber => this.setState({favoriteYoutuber})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.outdoor_activity_preference}
              placeholder='Favorite outdoor activities?'
              onChangeText={outdoor_activity_preference => this.setState({outdoor_activity_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.indoor_activity_preference}
              placeholder='Favorite indoor activities?'
              onChangeText={indoor_activity_preference => this.setState({indoor_activity_preference})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.inside_joke}
              placeholder='Tell us an inside joke...'
              onChangeText={inside_joke => this.setState({inside_joke})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.intelligence_level}
              placeholder='Are you intelligent?'
              onChangeText={intelligence_level => this.setState({intelligence_level})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.what_do_you_do}
              placeholder='What do you do?'
              onChangeText={what_do_you_do => this.setState({what_do_you_do})}
              style={styles.inputField}
              />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.post_first_date}
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
