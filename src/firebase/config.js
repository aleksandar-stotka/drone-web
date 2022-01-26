import firebase from "firebase/app";
import "firebase/auth";

import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBIp50Hc6Q3hAjqvhKkNJUmC7BEJ1X-8HM",
  authDomain: "success-company-5f87c.firebaseapp.com",
  projectId: "success-company-5f87c",
  storageBucket: "success-company-5f87c.appspot.com",
  messagingSenderId: "1079924722089",
  appId: "1:1079924722089:web:6b5a218f5698fbaff81cb8",
};

//init
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
