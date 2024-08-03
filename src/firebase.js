// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//import * as firebase from "firebase/app";
import firebase from 'firebase/app'

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


  //databaseURL: "https://rgukt-ola.firebaseio.com",
const firebaseConfig = {
    apiKey: "AIzaSyCG-FTcY-j3KfeklLzc4av3e2FGLstaYUU",
    authDomain: "azad-hind-fauz-a5b94.firebaseapp.com",
    projectId: "azad-hind-fauz-a5b94",
    storageBucket: "azad-hind-fauz-a5b94.appspot.com",
    messagingSenderId: "594389568689",
    appId: "1:594389568689:web:76f31d81b75f784ec32690",
    measurementId: "G-858248VCXW"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export const firebaseAuth=firebase.auth();

//export const firestore=firebase.firestore();

//export const storageRef=firebase.storage().ref();

export default firebase;