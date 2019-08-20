 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAhEDK12Bv04pDLojV3ZMk4spcYWaSRM2E",
    authDomain: "chatroam-ccc98.firebaseapp.com",
    databaseURL: "https://chatroam-ccc98.firebaseio.com",
    projectId: "chatroam-ccc98",
    storageBucket: "chatroam-ccc98.appspot.com",
    messagingSenderId: "1018070992766",
    appId: "1:1018070992766:web:0f00fb2f6d69f2c0"
  };
  // Initialize Firebase
  const = firebaseApp = firebase.initializeApp(firebaseConfig);

  export defualt firebaseApp.firestore()