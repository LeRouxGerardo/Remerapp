
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB55wYy6xdO3w1a122yQP2TGBZ-7Cb60iU",
  authDomain: "baseremerapp.firebaseapp.com",
  projectId: "baseremerapp",
  storageBucket: "baseremerapp.appspot.com",
  messagingSenderId: "750349567483",
  appId: "1:750349567483:web:79b473d3fb9352589df75e",
  measurementId: "G-VG1K0P573Q"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)