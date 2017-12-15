import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button, FlatList } from 'react-native';

class SwipeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    };
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
    let picked = this.props.currentUser.eligibles_by_id.splice(0,1)[0];
    this.setState({userId: picked});
    this.props.getUser(picked);
  }

  handleSwipe(e) {
    e.preventDefault();
  }

  render() {
    let user = this.props.user;
    return (
      <View style={styles.container}>
        <Text style={styles.userName}>
          {user.first_name}, {user.age}
        </Text>

        <ScrollView style={styles.readProfContainer}>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Introduction:
            </Text>
            <Text style={styles.profText}>
              {user.introduction}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Dream Job:
            </Text>
            <Text style={styles.profText}>
              {user.dream_job}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Cooking Preferences:
            </Text>
            <Text style={styles.profText}>
              {user.cooking_preference}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Book Preferences:
            </Text>
            <Text style={styles.profText}>
              {user.book_preference}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Movie Preferences:
            </Text>
            <Text style={styles.profText}>
              {user.movie_preference}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Pet Preferences:
            </Text>
            <Text style={styles.profText}>
              {user.pet_preference}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Favorite Youtuber:
            </Text>
            <Text style={styles.profText}>
              {user.favorite_youtuber}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Favorite Outdoor Activities:
            </Text>
            <Text style={styles.profText}>
              {user.outdoor_activity_preference}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Favorite Indoor Activities:
            </Text>
            <Text style={styles.profText}>
              {user.indoor_activity_preference}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Inside Joke:
            </Text>
            <Text style={styles.profText}>
              {user.inside_joke}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Am I Intelligent?:
            </Text>
            <Text style={styles.profText}>
              {user.intelligence_level}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              What Do I Do?:
            </Text>
            <Text style={styles.profText}>
               {user.what_do_you_do}
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Post First Date Activity:
            </Text>
            <Text style={styles.profText}>
              {user.post_first_date}
            </Text>
          </View>

        </ScrollView>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <View style={styles.noButton}>
                <Text style={styles.buttonText}>&times;</Text>
              </View>
            </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.yesButton}>
              <Text style={styles.buttonText}>&gt;</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  yesButton: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 100/2,
    borderWidth: 1,
    height: 100,
    justifyContent: 'center',
    width: 100
  },
  noButton: {
    alignItems: 'center',
    backgroundColor: '#DC143C',
    borderRadius: 100/2,
    borderWidth: 1,
    justifyContent: 'center',
    marginRight: 90,
    height: 100,
    width: 100
  },
  buttonText: {
    color: '#C1B497',
    fontFamily: 'Futura',
    fontSize: 30,
  },
  buttonsContainer: {
    alignItems: 'center',
    borderRadius: 68,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 30
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  readProfContainer: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    height: 600,
    width: 350
  },
  profHeaders: {
    color: '#C0C0C0',
    fontFamily: 'Futura',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 5
  },
  profText: {
    color: '#C0C0C0',
    fontFamily: 'Futura',
    fontSize: 16,
    paddingBottom: 5,
    paddingLeft: 10
  },
  profTextContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  userName: {
    color: 'white',
    fontFamily: 'Futura',
    fontSize: 30,
    letterSpacing: 10,
    marginBottom: 20
  }
});

export default SwipeScreen;
