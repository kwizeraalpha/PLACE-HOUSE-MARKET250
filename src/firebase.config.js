import {getFirestore} from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdA9Hw6-yDNSRHkXGLRMe9F9O-rbuifgI",
  authDomain: "house-market-app-7c5e7.firebaseapp.com",
  databaseURL: "https://house-market-app-7c5e7-default-rtdb.firebaseio.com",
  projectId: "house-market-app-7c5e7",
  storageBucket: "house-market-app-7c5e7.appspot.com",
  messagingSenderId: "145072045909",
  appId: "1:145072045909:web:dd909085b90f2f85a0f9dc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()