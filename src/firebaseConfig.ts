import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnv8p84TmycaXZbBTjvq9BPFdb8koEuKM",
  authDomain: "rider-review-app.firebaseapp.com",
  projectId: "rider-review-app",
  storageBucket: "rider-review-app.appspot.com",
  messagingSenderId: "862074732621",
  appId: "1:862074732621:web:17da52960edaff47471c04",
  measurementId: "G-KCJSR8HX0P",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
