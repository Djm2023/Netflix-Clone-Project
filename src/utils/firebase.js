// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXBREmdGKcljhgqdFVd2MmZ35Yt9qDmJo",
  authDomain: "netflix-with-gpt-88698.firebaseapp.com",
  projectId: "netflix-with-gpt-88698",
  storageBucket: "netflix-with-gpt-88698.appspot.com",
  messagingSenderId: "1031136945099",
  appId: "1:1031136945099:web:c4a0487600c5efd1538c4e",
  measurementId: "G-1QYPES0L70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);