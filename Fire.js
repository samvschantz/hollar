import firebase from 'firebase'; // 4.8.1

class Fire {
  constructor() {
    if (!firebase.apps.length) {
      this.init();
    }
    this.observeAuth();
  }

  init = () =>
   firebase.initializeApp({
      apiKey: "AIzaSyDS_dzivnTxcaNCDOUWDMYsyCpLIz-xAy0",
      authDomain: "hollar-a339f.firebaseapp.com",
      databaseURL: "https://hollar-a339f.firebaseio.com",
      projectId: "hollar-a339f",
      storageBucket: "hollar-a339f.appspot.com",
      messagingSenderId: "495826160636"
    });

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref('messages');
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    console.log(message);
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

Fire.shared = new Fire();
export default Fire;