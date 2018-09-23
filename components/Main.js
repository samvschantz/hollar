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
  static navigationOptions = {
    title: 'Chatter',
  };

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
    paddingTop: 200,
  },
  title: {
    marginTop  : offset,
    marginLeft : offset,
    fontSize   : offset,
  },
  nameInput: {
    height            : offset * 2,
    margin            : offset,
    paddingHorizontal : offset,
    borderColor       : '#111111',
    borderWidth       : 1,
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


// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image
// } from 'react-native';

// onPress = () => {
//   this.props.navigation.navigate('Map');
// }

// class Main extends React.Component {

//   render() {
//     return (
//       <View style={styles.container}>
//         <Image style={{width: 200, height: 200}}
//           source={require('../assets/HerdLogo.png')}
//         />
//         <TouchableOpacity style={styles.button} onPress={this.onPress}>
//           <Text style={styles.smallText}>Join the HERD.</Text>
//         </TouchableOpacity>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#3ccde2',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   baseText: {
//     color: 'white',
//     fontSize: 40,
//     fontWeight: 'bold',
//   },
//   smallText: {
//     color: 'white',
//     fontSize: 40,
//   },
//   button: {
//     marginTop: 200,
//     borderColor: 'white',
//   }
// });

// export default Main;