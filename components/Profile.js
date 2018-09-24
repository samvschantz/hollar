import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput, // 1
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

class Profile extends React.Component {

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/HerdLogo.png')} />
        <Text style={styles.label} >Name</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label} >Age</Text>
        <TextInput style={styles.input} />
        <Text style={styles.label} >Blood Type</Text>
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const offset = 24;
const styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#3ccde2',
    alignItems      : 'center',
  },
  label: {
    color:'white',
    justifyContent: 'flex-start',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: 200,
    height: 50,
    padding: 3,
    color: 'white',
    borderRadius: 5,
    fontSize: 20,
    marginBottom: 20,
  },
  buttonArea: {
    marginTop: 200,
  },
  title: {
    marginTop  : offset,
    marginLeft : offset,
    fontSize   : offset,
  },
  buttonText: {
    marginLeft : offset,
    fontSize   : offset,
    color      : 'white',
  },
  logo: {
    height :200,
    width  :200,
    marginBottom: 50,
  }
});

export default Profile;
