import React, { useState } from 'react';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link } from 'react-router-dom';

const SignIn = ({ loginUser }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="Body">
      <label>Email</label>
      <input onChange={(event) => setLoginEmail(event.currentTarget.value)} />
      <label>
        Password:
      </label>
      <input type="password" onChange={(event) => setLoginPassword(event.currentTarget.value)} />
      <button type="submit" onClick={login}>Connexion</button>

      <h4 style={{color: 'red'}}> User Logged In: {user?.email}</h4>

     <Link to="/signup">Sign up</Link>

     <button onClick={logout}>Log out</button>
    </div>
  )
}

export default SignIn;