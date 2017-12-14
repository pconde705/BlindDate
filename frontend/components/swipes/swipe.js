import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button, FlatList } from 'react-native';

class SwipeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSwipe(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          BlindDate
        </Text>

        <ScrollView>
          <View style={styles.readProfContainer}>

          <View>
            <Text style={styles.profHeaders}>
              Introduction
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Dream Job
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Cooking Preferences
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Book Preferences
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Movie Preferences
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Pet Preferences
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Favorite Youtuber
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Favorite Outdoor Activities
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Favorite Indoor Activities
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Inside Joke
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Am I Intelligent?
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              What Do I Do?
            </Text>
          </View>

          <View>
            <Text style={styles.profHeaders}>
              Post First Date Activity
            </Text>
          </View>

        </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.button}>YES</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.button}>NO</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderColor: '#C1B497',
    borderRadius: 300,
    borderWidth: 2,
    color: '#C1B497',
    fontFamily: 'Futura',
    fontSize: 30,
    paddingHorizontal: 60,
    paddingVertical: 60
  },
  buttonContainer: {
    flexDirection: 'row'
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
    height: 300,
    width: 600
  },
  profHeaders: {
    fontFamily: 'Futura',
    fontWeight: '600',
  },
  profText: {
    fontSize: 18,
    paddingVertical: 5,
    width: 500
  }
});

export default SwipeScreen;
