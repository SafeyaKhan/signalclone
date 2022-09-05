// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKfLW8gTehJVA_RIqHTjZrfKtE6-WHFsA",
    authDomain: "signalclone-e4b46.firebaseapp.com",
    projectId: "signalclone-e4b46",
    storageBucket: "signalclone-e4b46.appspot.com",
    messagingSenderId: "214720446783",
    appId: "1:214720446783:web:0627ddb428b5ae1129938a"
  };

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

//export const Time_stamp = firebase.firestore.Timestamp();
