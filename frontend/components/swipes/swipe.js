import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button, FlatList } from 'react-native';

class Swipe extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSwipe(e) {
    e.preventDefault();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          BlindDate
        </Text>

        <ScrollView style={styles.readProfContainer}>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Introduction
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Dream Job
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Cooking Preferences
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Book Preferences
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Movie Preferences
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Pet Preferences
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Favorite Youtuber
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Favorite Outdoor Activities
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Favorite Indoor Activities
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Inside Joke
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Am I Intelligent?
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              What Do I Do?
            </Text>
          </View>

          <View style={styles.profTextContainer}>
            <Text style={styles.profHeaders}>
              Post First Date Activity
            </Text>
          </View>

        </ScrollView>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.yesButton}>
            <Text style={styles.buttonText}>YES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.noButton}>
            <Text style={styles.buttonText}>NO</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  noButton: {
    // backgroundColor: '#B20000',
    borderRadius: 68
  },
  yesButton: {
    // backgroundColor: 'green',
    marginRight: 50,
    borderRadius: 68
  },
  buttonText: {
    borderRadius: 68,
    color: '#C1B497',
    fontFamily: 'Futura',
    fontSize: 30,
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  buttonsContainer: {
    alignItems: 'center',
    borderRadius: 68,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  header: {
    fontFamily: 'Futura',
    fontWeight: '100',
    color: '#C1B497',
    fontSize: 40,
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  readProfContainer: {
    backgroundColor: '#c4c4c4',
    flex: 1,
    flexDirection: 'column',
    height: 320,
    width: 350
  },
  profHeaders: {
    fontFamily: 'Futura',
    fontSize: 20,
    fontWeight: '600',
    paddingLeft: 10,
    paddingVertical: 10
  },
  profTextContainer: {
  }
});

export default Swipe;
