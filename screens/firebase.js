// const { initializeApp } = require('firebase/app');
// const { getFirestore, collection, getDocs } = require('firebase/firestore');
//import * as firebase from 'firebase/app';
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDAhJXCyZcAFSyxkrtsTSuxRRPMBAndd3M",
  authDomain: "signalclone-3132d.firebaseapp.com",
  projectId: "signalclone-3132d",
  storageBucket: "signalclone-3132d.appspot.com",
  messagingSenderId: "846608671934",
  appId: "1:846608671934:web:1bcfd03ea80f45d33c2aef"
};

// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// // const db = getFirestore(app);

let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
}
else{
  app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth}