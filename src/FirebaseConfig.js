import { initializeApp } from 'firebase/app';
import 'firebase/firestore'; // Import other Firebase services if needed
// import 'firebase/auth'; // if you're using Authentication
// require('dotenv').config();
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: process.env.STORAGE_BUCKET,
//   messagingSenderId: process.env.MESSAGE_SENDER_ID,
//   appId: process.env.APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyD3RZF9XQoKO0LYsm7fUJpoHx6rhpqDVqI",
  authDomain: "testproject-1b79d.firebaseapp.com",
  projectId: "testproject-1b79d",
  storageBucket: "testproject-1b79d.appspot.com",
  messagingSenderId: "16863821606",
  appId: "1:16863821606:web:6dded47aa97727f19d8be7"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);

export default app;