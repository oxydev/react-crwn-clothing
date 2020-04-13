import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_Nyvhmom1B7j6bNIWZckcOGN6ZN4f3-M",
  authDomain: "crwn-db-6b40a.firebaseapp.com",
  databaseURL: "https://crwn-db-6b40a.firebaseio.com",
  projectId: "crwn-db-6b40a",
  storageBucket: "crwn-db-6b40a.appspot.com",
  messagingSenderId: "177121342051",
  appId: "1:177121342051:web:65fb6dba549cc6dbf63e56",
  measurementId: "G-QVS1FMGW3M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
