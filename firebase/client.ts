
import { initializeApp ,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDK2_W15myVPGvfBbPiXqp5hkRx9vwN_k0",
  authDomain: "prepwise-9a69d.firebaseapp.com",
  projectId: "prepwise-9a69d",
  storageBucket: "prepwise-9a69d.firebasestorage.app",
  messagingSenderId: "892288750766",
  appId: "1:892288750766:web:7d3e203eb81fd6565e493f",
  measurementId: "G-7TQQVK15M7"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);