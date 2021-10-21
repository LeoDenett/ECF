import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtsg5_nLeqQJoa9bzDG-jDe819nR2Rhqk",
  authDomain: "ecf--ld.firebaseapp.com",
  projectId: "ecf--ld",
  storageBucket: "ecf--ld.appspot.com",
  messagingSenderId: "204338370057",
  appId: "1:204338370057:web:c657208c271046a7ad8ad8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
