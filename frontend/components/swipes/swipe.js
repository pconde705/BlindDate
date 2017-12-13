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

        <ScrollView>
          <View style={styles.readProf}>
            <Text style={styles.profText}>
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.

              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
              This is just a ton of text that I would like to render on the page
              so that I know that the scroll view is rendering properly.
            </Text>
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
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center'
  },
  readProf: {
    backgroundColor: '#c4c4c4',
    flex: 1,
    height: 300,
    width: 600
  },
  profText: {
    width: 500
  }
});

export default Swipe;
