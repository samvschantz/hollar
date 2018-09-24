import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

class Main extends React.Component {

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../assets/HerdLogo.png')} />
        <TouchableOpacity style={styles.buttonArea} onPress={this.onPress}>
          <Text style={styles.buttonText}>Join the HERD.</Text>
        </TouchableOpacity>
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
    justifyContent  : 'center',
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
  }
});

export default Main;