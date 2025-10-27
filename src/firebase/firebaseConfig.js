// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCSenOEe0Codq1Wb8XUh7_mMr8Pe41_2vY",

  authDomain: "appcongnghe2025.firebaseapp.com",

  databaseURL: "https://appcongnghe2025-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "appcongnghe2025",

  storageBucket: "appcongnghe2025.firebasestorage.app",

  messagingSenderId: "97239877110",

  appId: "1:97239877110:web:b91fa4673e8ea8d349b3d7",

  measurementId: "G-KRG4FBQVQJ"

};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Kết nối Firestore
export const db = getFirestore(app);
