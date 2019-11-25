import React, { useState } from "react";
// import axios from "axios";
import {
  FormContainer,
  Form,
  Title,
  ErrorMessage,
  StyledLink,
  StyledInput,
  StyledLabel,
  StyledSignup,
  StyledButton,
  StyledText
} from "./StyledComponents/FormStyledComponents";

const CredentialsForm = props => {
  return (
    <FormContainer>
      <Form action={props.isLoginPage ? 'login' : 'signup'} method="post" onSubmit={props.handleSignUp}>
        <Title>{props.isLoginPage === true ? "Log In" : "Sign Up"}</Title>
        {props.isValidFlag === false ? (
          <ErrorMessage>
            That Friendlier account doesn't exist. Enter a different account or{" "}
            <StyledLink errorsignup="true" to="/signup">
              create a new account
            </StyledLink>
          </ErrorMessage>
        ) : (
          null
        )}
        <StyledLabel secondary="true">
          Email
          <StyledInput
            label="Email"
            type="email"
            onChange={props.handleEmail}
            value={props.email.value}
          />
        </StyledLabel>
        <StyledLabel secondary="true">
          Password
          <StyledInput
            label="Password"
            type="password"
            onChange={props.handlePassword}
            value={props.password.value}
          />
        </StyledLabel>
        <StyledButton secondary="true">
          {props.isLoginPage ? "Log In" : "Get Started"}
        </StyledButton>
        <StyledText>
          New to Friendlier?
          <StyledSignup to="/signup" primary="true">
            {props.isLoginPage ? "sign up now" : "log in"}
          </StyledSignup>
        </StyledText>
        {!props.isLoginPage ? null : (
          <StyledLink to="/forgot-credentials">
            Forgot my username or password
          </StyledLink>
        )}
      </Form>
    </FormContainer>
  );
};
export default CredentialsForm;
