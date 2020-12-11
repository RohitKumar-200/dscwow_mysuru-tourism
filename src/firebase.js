import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDON_TsaXEkV3uSVR7nD116xXNKejH4k1c",
  authDomain: "mysuru-tourism-732cf.firebaseapp.com",
  projectId: "mysuru-tourism-732cf",
  storageBucket: "mysuru-tourism-732cf.appspot.com",
  messagingSenderId: "1080036362545",
  appId: "1:1080036362545:web:595f259cf9d56fe6344810",
  measurementId: "G-0T2DD59KQ7",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
