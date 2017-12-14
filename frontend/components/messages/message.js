import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button, FlatList } from 'react-native';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Messages</Text>

        <ScrollView>

          <View style={styles.matchesContainer}>
            <TouchableOpacity>
              <Text style={styles.matches}>Maria, 26</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.matchesContainer}>
            <TouchableOpacity>
              <Text style={styles.matches}>Tiffany, 30</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.matchesContainer}>
            <TouchableOpacity>
              <Text style={styles.matches}>Ariana, 21</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.matchesContainer}>
            <TouchableOpacity>
              <Text style={styles.matches}>Jenna, 33</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.matchesContainer}>
            <TouchableOpacity>
              <Text style={styles.matches}>Madalyn, 27</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.matchesContainer}>
            <TouchableOpacity>
              <Text style={styles.matches}>Gigi, 24</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.matchesContainer}>
            <TouchableOpacity>
              <Text style={styles.matches}>Natalia, 22</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.matchesContainer}>
            <TouchableOpacity>
              <Text style={styles.matches}>Bianca, 23</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10
  },
  header: {
    fontFamily: 'Futura',
    fontWeight: '100',
    color: '#C1B497',
    fontSize: 30,
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  matches: {
    color: 'white',
    fontFamily: 'Futura',
    fontSize: 25,
    padding: 20,
    textAlign: 'left'
  },
  matchesContainer: {
    borderTopColor: 'gray',
    borderTopWidth: 1
  }
});

export default Message;
