import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firebase-firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAlrNI5fk-MRfc7eIq0tiXcf3hKqdBH4RY",
  authDomain: "evernote-clone-1719e.firebaseapp.com",
  databaseURL: "https://evernote-clone-1719e.firebaseio.com",
  projectId: "evernote-clone-1719e",
  storageBucket: "evernote-clone-1719e.appspot.com",
  messagingSenderId: "673089812724",
  appId: "1:673089812724:web:624c4b26d9eb7c71c446a1",
  measurementId: "G-S8QBGJYG9G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
