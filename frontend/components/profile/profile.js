// jshint esversion: 6
import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button } from 'react-native';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {img_url: "", age_preference: 25, introduction: "", dream_job: "",
      cooking_preference: "", book_preference: "", movie_preference: "", pet_preference: "",
      favorite_youtuber: "", outdoor_activity_preference: "", indoor_activity_preference: "",
      inside_joke: "", intelligence_level: "", what_do_you_do: "", post_first_date: "" };
  }

  handleProfile(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.editUser(user);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Please complete as many fields as possible!
        </Text>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.img_url} placeHolder='img_url'
            onChangeText={img_url => this.setState({img_url})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.age_preference} placeHolder='age_preference'
            onChangeText={age_preference => this.setState({age_preference})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.introduction} placeHolder='introduction'
            onChangeText={introduction => this.setState({introduction})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.dream_job} placeHolder='dream_job'
            onChangeText={dream_job => this.setState({dream_job})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.cooking_preference} placeHolder='cooking_preference'
            onChangeText={cooking_preference => this.setState({cooking_preference})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.book_preference} placeHolder='book_preference'
            onChangeText={book_preference => this.setState({book_preference})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.movie_preference} placeHolder='movie_preference'
            onChangeText={movie_preference => this.setState({movie_preference})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.pet_preference} placeHolder='pet_preference'
            onChangeText={pet_preference => this.setState({pet_preference})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.favorite_youtuber} placeHolder='favorite_youtuber'
            onChangeText={favorite_youtuber => this.setState({favorite_youtuber})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.outdoor_activity_preference} placeHolder='outdoor_activity_preference'
            onChangeText={outdoor_activity_preference => this.setState({outdoor_activity_preference})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.indoor_activity_preference} placeHolder='indoor_activity_preference'
            onChangeText={indoor_activity_preference => this.setState({indoor_activity_preference})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.inside_joke} placeHolder='inside_joke'
            onChangeText={inside_joke => this.setState({inside_joke})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.intelligence_level} placeHolder='intelligence_level'
            onChangeText={intelligence_level => this.setState({intelligence_level})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.what_do_you_do} placeHolder='what_do_you_do'
            onChangeText={what_do_you_do => this.setState({what_do_you_do})}
            style={styles.inputField}
           />
         </View>
        <View style={styles.inputContainer}>
          <TextInput value={this.state.post_first_date} placeHolder='post_first_date'
            onChangeText={post_first_date => this.setState({post_first_date})}
            style={styles.inputField}
           />
         </View>
        <TouchableOpacity onPress={(e) => this.handleProfile(e)}>
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
});

export default ProfileScreen;
