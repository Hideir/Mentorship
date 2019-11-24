import React, { useState } from "react";
import S from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import BGImg from "./homepage_background.svg";

const LoginForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidFlag, setIsValidFlag] = useState(true);

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSignUp = event => {
    event.preventDefault();
    // Send our data({email, password}) to the /signup endpoint on our server, with the email and password in the body
    axios
      .post(
        `/login`,
        { email, password },
        {
          headers: {
            "content-type": "application/json" // Tell the server we are sending this over as JSON
          }
        }
      )
      .then(function (response) {
        console.log(response);
        // When our server responds that we made a good request we push our user to the home component.
        setIsValidFlag(true);
        props.history.push("/");
      })
      .catch(function (error) {
        console.log("here is the error" + error);
        if (error) {
          setIsValidFlag(false);
        }
      });
  };
  return (
    <FormContainer>
      <Form action="login" method="post" onSubmit={handleSignUp}>
        <Title>Login</Title>
        {isValidFlag === false ? (<ErrorMessage>That Friendlier account doesn't exist. Enter a different account or <StyledLink errorSignup="true" to="/signup">create a new account</StyledLink></ErrorMessage>) : (console.log("were good"))}
        <StyledLabel secondary="true">Email
        <StyledInput
          label="Email"
          type="email"
          onChange={handleEmail}
          value={email.value}
        />
        </StyledLabel>
        <StyledLabel secondary="true">Password
        <StyledInput
          label="Password"
          type="password"
          onChange={handlePassword}
          value={password.value}
        />
        </StyledLabel>
        <StyledButton secondary="true">Login</StyledButton>
        <StyledText> 
          New to Mentorship?
          <StyledSignup to="/signup" primary="true" >Sign Up Now</StyledSignup>
        </StyledText>
        <StyledLink to="/forgot-credentials">Can't Login?</StyledLink>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;

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
    color: ${props => props.errorSignup ? '#0077ff' : '#666'};
    transition: all ease-in-out 100ms;
    :hover {
        color: #000;
    }
  `;

const StyledInput = S.input`
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
  color: ${props => (props.secondary ? "#fff" : "#000")};
  padding: 1rem 2.4rem;
  border-radius: 20px;
  text-decoration: none;
  background-color: ${props => (props.secondary ? "#0077ff" : "transparent")}
  transition: all ease-in-out 120ms;
  height: 4rem;
  width: 200px;
  border: none;
  align-items: center;
  justify-content: center;
  :hover {
      background-color: ${props =>
    props.secondary ? "#003c80" : "rgba(194, 194, 194, 0.4)"}
  }
  :active {
      box-shadow: 0px 2px 5px 0px #464545;
      transform: scale(1.1);
  }
  `;

const StyledSignup = S(Link)`
    font-size: ${props => props.primary ? '2.2rem' : '1.8rem'};
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
  text-align: ${props => (props.secondary ? "left" : "center")}
  width: ${props => (props.secondary ? "80%" : "auto")}
  margin: 0 auto;
`;
const StyledLabel = S.label`
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  text-align: ${props => (props.secondary ? "left" : "center")}
  width: ${props => (props.secondary ? "80%" : "auto")}
  margin: 0 auto;
`;
const ErrorMessage = S.p`
    font-size: 18px;
    color: red;
`;