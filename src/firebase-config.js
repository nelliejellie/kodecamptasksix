import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYnRUFwV9Ut0UJuPuy25IJNw3C7q1AFBA",
  authDomain: "todo-749d4.firebaseapp.com",
  databaseURL: "https://todo-749d4-default-rtdb.firebaseio.com",
  projectId: "todo-749d4",
  storageBucket: "todo-749d4.appspot.com",
  messagingSenderId: "388209268710",
  appId: "1:388209268710:web:922be6abb8745a3daca827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)