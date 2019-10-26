import React,{useState} from 'react';
import S from 'styled-components';
import {Link} from "react-router-dom";


  const LoginForm = () => {
    return(
        <div>
        <h1>I Rendered!!!</h1>
            <Form>
                <Title>Login</Title>
                <StyledInput label="Email" type="email" />
                <StyledInput label="Password" type="password"/>
                <StyledButton>Login</StyledButton>
                <StyledButton>Sign up</StyledButton>
                <StyledLink to="/forgot-credentials">Can't Login?</StyledLink>
            </Form>
        </div>
      );
  }

  export default LoginForm;

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
  `;
  const Title = S.h2`
    font-size: 40px;
    color: #000;
    text-transform: uppercase;
  `;
  const StyledLink = S.a`
    font-size: 18px;
    text-decoration: underline;
    color: #666;
    transition: all ease-in-out 100ms;
    :hover {
        color: #000;
    }
  `;

  const StyledInput = S.input`
    width: 800px;
  `;
  const StyledButton = S.button`
  font-size: 2.4rem;
  color: #fff;
  background-color: #0077ff;
  border: none;
  border-radius: 50px;
  padding: 1rem;
  width: 200px; 
  `;