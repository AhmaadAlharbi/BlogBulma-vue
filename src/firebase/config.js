// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZQCdMlkusdAOYv40D7gpLWk9_pd1b9Jk",
  authDomain: "blogsbulma.firebaseapp.com",
  projectId: "blogsbulma",
  storageBucket: "blogsbulma.appspot.com",
  messagingSenderId: "197179588727",
  appId: "1:197179588727:web:957dbf47707ea56a944672",
};

// init firebase
firebase.initializeApp(firebaseConfig);
// init firestore service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp, projectAuth };
