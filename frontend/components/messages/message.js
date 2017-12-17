import React from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity,
        AppState, Button, FlatList } from 'react-native';
import { List, ListItem } from "react-native-elements";
import {Actions} from 'react-native-router-flux';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
=======
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

>>>>>>> 6a64bf237251d3bb4581c1dfa8a795f7c7c91a95
  componentWillMount() {
    this.props.fetchMessages(this.props.currentUser.id);
    this.props.fetchMatches(this.props.currentUser.id);
  }

  render() {

    if (this.props === undefined) {
      return (
        <Text></Text>
      );
    } else if (this.props.matches === {}) {
      return (
        <Text></Text>
      );
    } else {
      // console.log(this.props.matches);
      // <View style={styles.matchesContainer}>
      //   <TouchableOpacity onPress={() => this.props.navigation.navigate('ChatRoom')}>
      //     <Text style={styles.matches}>Adele, 22</Text>
      //   </TouchableOpacity>
      // </View>
      return (
        <View style={styles.container}>

          <Text style={styles.header}>Matches</Text>

          <ScrollView>
            <List>
              <FlatList
                style={styles.matches}
                data={this.props.matches}
                renderItem={({ item }) => (
                <View style={styles.matchItem}>
                  <ListItem
                    title={item.match_first_name}
                    onPress={() => this.props.navigation.navigate('ChatRoom', {user: item})}
                    />
                </View>
                )}
                keyExtractor={item => item.id}
                />
            </List>

          </ScrollView>
        </View>
      );
    }
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
    color: 'white',
    fontSize: 30,
    letterSpacing: 10,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  matchItem: {
    paddingVertical: 10
  },
  matches: {
    backgroundColor: 'black',
    borderTopColor: 'gray',
    borderTopWidth: 1
  }
});

export default Message;
