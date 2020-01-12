import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA_4GHgpVwx7y8zYPjt3b4CLS9o05PiGT0",
    authDomain: "just-clock-it-d455f.firebaseapp.com",
    databaseURL: "https://just-clock-it-d455f.firebaseio.com",
    projectId: "just-clock-it-d455f",
    storageBucket: "just-clock-it-d455f.appspot.com",
    messagingSenderId: "586683265996",
    appId: "1:586683265996:web:a56c229ca20f67a406e369",
    measurementId: "G-6PCQPZF6K5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase