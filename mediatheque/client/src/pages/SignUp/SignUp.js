import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { auth } from "../../firebase-config";
import { Form, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Icon from './Icon'

const SignUp = () => {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      user(<Redirect to="/contact" />)
    } catch (error) {
      console.log(error.message);
    }

  };

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

  const CONTAINER = styled.div`
  background: black;
  label {
    color: #7ACBCD;
    font-size: 1.2em;
    font-weight: 400;
  }
  .form-group {
    margin-bottom: 2rem;
  }
  .error {
    border: 2px solid #FF6565;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;
  @media(min-width: 786px) {
    width: 50%;
  }
`;

  return (
    <div className="Body Center">
      <Container className="SignIn">
        <Container className="Center" style={{marginTop: '25px'}}>
            <Icon/>
        </Container>

        <div className="mx-auto Center">
        <lavel className="labelform"> Email </lavel>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <lavel className="labelform"> Password </lavel>
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <div className="Center">
        <Button className="Button-Ok" onClick={register} style={{marginTop: "25px"}} type="submit">
            Create User
        </Button>
        <Link to="/signin" className="Button-Count d-bot">Login</Link>
        </div>
        </div>

      </Container>
    </div>
  );
}
export default SignUp;