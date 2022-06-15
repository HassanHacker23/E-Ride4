import firebase from "firebase";
require("@firebase/firestore");
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKvi7iz0jjXv6xGmlk9q9WtvBURdXNPo8",
  authDomain: "e-ride-a83a0.firebaseapp.com",
  projectId: "e-ride-a83a0",
  storageBucket: "e-ride-a83a0.appspot.com",
  messagingSenderId: "119387028689",
  appId: "1:119387028689:web:95ff49e494f04014bfd9f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
