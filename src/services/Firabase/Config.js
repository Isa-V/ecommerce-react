import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoDb5mbW_1qdhpRuKiaoZGrJXgRyNaKwc",
  authDomain: "lamaseria-ecommerce.firebaseapp.com",
  projectId: "lamaseria-ecommerce",
  storageBucket: "lamaseria-ecommerce.appspot.com",
  messagingSenderId: "824886287441",
  appId: "1:824886287441:web:b74666fdb80407afee6c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);