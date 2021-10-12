import React from 'react';
import styled from 'styled-components';
import { Form, Button, Container } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from './Icon';
import { Link } from 'react-router-dom';

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
  background-color: black;

  @media(min-width: 786px) {
    width: 50%;
  }
`;

// Schema for yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
  .email("*Must be a valid email address")
  .max(100, "*Email must be less than 100 characters")
  .required("*Email is required"),
  password: Yup.string()
  .min(8, "*Password must be higher than 8 characters")
  .max(60, "*Password must be less than 100 characters")
  .required("*Password is required")
});

const SignIn = () => {
  return (
    <CONTAINER className="Body Center">
        <Container className='SignIn'>
            <Container className="Center" style={{marginTop: '25px'}}>
                <Icon/>
            </Container>
            <br/>
            <Formik
                initialValues={{ email:"", password:""}}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    // When button submits form and form is in the process of submitting, submit button is disabled
                    setSubmitting(true);

                    // Simulate submitting to database, shows us values submitted, resets form
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false);
                }, 500);
                }}
            >
                {/* Callback function containing Formik state and helpers that handle common form actions */}
            {( {values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                <MYFORM onSubmit={handleSubmit} className="mx-auto">
                {console.log(values)}
                <Form.Group controlId="formEmail">
                    <Form.Label>Email :</Form.Label>
                    <Form.Control
                    type="text"
                    name="email"
                    placeholder="example@test.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={touched.email && errors.email ? "error" : null}
                    />
                    {touched.email && errors.email ? (
                        <div className="Error">{errors.email}</div>
                    ): null}
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label style={{marginTop: '25px'}}>Password :</Form.Label>
                    <Form.Control
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={touched.password && errors.password ? "error" : null}
                    />
                    {touched.password && errors.password ? (
                        <div className="Error">{errors.password}</div>
                    ): null}
                </Form.Group>
                <Button className="Button-Ok" style={{marginTop: "25px"}} type="submit" disabled={isSubmitting}>
                    Log In
                </Button>
                <br/>
                <span className="Sign-UpLink Bt-ct">Vous n'avez une compte?</span>
                <Link to="/signup" className="Button-Count d-bot">Sign Up</Link>
                </MYFORM>
            )}
            </Formik>
      </Container>
    </CONTAINER>
  );
}


export default SignIn;