import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAGqbQJGGoLOj5tvEHrdjO1V2u2RMWFkRI",
    authDomain: "expense-manager3.firebaseapp.com",
    databaseURL: "https://expense-manager3.firebaseio.com",
    projectId: "expense-manager3",
    storageBucket: "expense-manager3.appspot.com",
    messagingSenderId: "1084748578947"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };