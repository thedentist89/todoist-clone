import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyD-5qJE6EB5NVqi17tZJjMkYkaYYujNWZE",
  authDomain: "todoist-clone-f51e3.firebaseapp.com",
  databaseURL: "https://todoist-clone-f51e3.firebaseio.com",
  projectId: "todoist-clone-f51e3",
  storageBucket: "todoist-clone-f51e3.appspot.com",
  messagingSenderId: "654352190405",
  appId: "1:654352190405:web:aa29ca5c72d4857eb819ac"
});

export { firebaseConfig as firebase };
