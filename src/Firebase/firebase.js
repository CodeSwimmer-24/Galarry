import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1C23CN9Oar2_fPf_lROVoGWk4cP5nqXI",
  authDomain: "post-card-81be1.firebaseapp.com",
  projectId: "post-card-81be1",
  storageBucket: "post-card-81be1.appspot.com",
  messagingSenderId: "492309172425",
  appId: "1:492309172425:web:1f456d009a086b883b7d18",
  measurementId: "G-FNET57SHXF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
