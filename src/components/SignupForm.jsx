import React,{useState, useEffect} from 'react';
import S from 'styled-components';
import {Link} from "react-router-dom";
import axios from 'axios';

// import {apiKey} from './config';

import BGImg from './homepage_background.svg';

  const SignupForm = () => {

    // create a user object.
    const [newUser, setNewUser] = useState({email: '', password: ''});
    
    const postSignupData = (newUserObject) => {
      axios.post((`http://localhost:8080`, newUserObject, {
        headers: {
          'content-type': 'application/json',
        },
      }))
    }
    const handleEmail = (event) => {
      const emailValue = event.target.value;
      // use a callback to have access to previous state so we don't lose the password key/value
      setNewUser(previousState => {
        // store our email value into the email key, while passing in the previous state to our new object.
        return {...previousState, email: emailValue}
      });
    }
    const handlePassword = (event) => {
      const passwordValue = event.target.value;
      // pass the previous user state object and create a new password value.
      setNewUser(previousState => {
        return {...previousState, password: passwordValue}
      });
    }

    const handleSignUp = (newUser, event) => {
      postSignupData(newUser);
      event.preventDefault();
    }

    console.log(newUser);
    useEffect( () => {
        axios.get(`http://localhost:8080/todo`)
        .then( response => {
          console.log(response);
        })
        .catch( error => {
          console.log(error);
        })
    }, []);


    return(
        <FormContainer>
            <Form action="/login" method="post">
                <Title>Sign Up</Title>
                <StyledText secondary="true" >Email Address</StyledText>
                <StyledInput label="Email" type="email" onChange={handleEmail} value={newUser.email} />
                <StyledText secondary="true" >Password</StyledText>
                <StyledInput label="Email" type="password" onChange={handlePassword} value={newUser.password}/>
                <StyledButton secondary="true" type="submit" onSubmit={handleSignUp}>Get Started</StyledButton>
            </Form>
        </FormContainer>
      );
  }

  export default SignupForm;

const FormContainer = S.div`
    height: 100vh;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-image: url(${BGImg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;
  const Form = S.form`
    width: 30%;
    min-width: 300px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    padding: 20px;
    box-shadow: 0px 10px 20px -3px #000;
    margin: 0 auto;
    height: 500px;
    display: flex;
    justify-content: space-around;
  `;
  const Title = S.h2`
    font-size: 40px;
    color: #000;
    text-transform: uppercase;
  `;
  const StyledLink = S(Link)`
    font-size: 18px;
    text-decoration: underline;
    color: #666;
    transition: all ease-in-out 100ms;
    :hover {
        color: #000;
    }
  `;

  const StyledInput = S.input`
    width: 80%;
    font-size: 2rem;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 50px;
  `;
  const StyledButton = S.button`
  display: flex;
  text-transform: uppercase;
  font-weight: 600;
  align-items: center;
  font-size: 2rem;
  color: ${props => props.secondary ? '#fff' : '#000'};
  padding: 1rem 2.4rem;
  border-radius: 20px;
  text-decoration: none;
  background-color: ${props => props.secondary ? '#0077ff' : 'transparent'}
  transition: all ease-in-out 120ms;
  height: 4rem;
  width: 200px;
  border: none;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  :hover {
      background-color: ${props => props.secondary ? '#003c80' : 'rgba(194, 194, 194, 0.4)'}
  }
  :active {
      box-shadow: 0px 2px 5px 0px #464545;
      transform: scale(1.1);
  }
  `;

  const StyledSignup = S(Link)`
    font-size: 2.2rem;
    color: #003c80;
    margin-left: 10px;
    display: flex;
    align-items: center;
    height: 2rem;
    transition: all ease-in-out 120ms;
    :hover {
      letter-spacing: 1px;
    }
  `;
const StyledText = S.span`
  font-size: 1.8rem;
  display: flex;
  text-align: ${props => props.secondary ? 'left' : 'center'}
  width: ${props => props.secondary ? '80%' : 'auto'}
  margin: 0 auto;
`;
