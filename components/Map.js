import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput, // 1
  TouchableOpacity,
  View,
} from 'react-native';

class Map extends React.Component {

  render() {
    return (
      <View>
        <Text style={styles.title}>This is the map</Text>
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: {
    // 3
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText:{
    marginLeft:offset,
    fontSize: offset,
  },
});

export default Map;
