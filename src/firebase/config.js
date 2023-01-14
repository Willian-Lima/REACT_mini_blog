// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJzJ1_9k6livzHCy9GzM74tXQh4kMkQxs",
  authDomain: "miniblog-7f784.firebaseapp.com",
  projectId: "miniblog-7f784",
  storageBucket: "miniblog-7f784.appspot.com",
  messagingSenderId: "789591852580",
  appId: "1:789591852580:web:e7072bbed0df7b3d4ffab1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };