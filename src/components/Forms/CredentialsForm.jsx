import React from "react";
import IsLoadingComponent from '../StyledComponents/IsLoadingComponent.jsx';
import S from 'styled-components';
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
} from "../StyledComponents/FormStyledComponents";

let buttonValue = '';

const CredentialsForm = props => {
  if(props.isLoginPage && props.isLoading === false){
       buttonValue = "Log In"; 
  } else if(!props.isLoginPage && props.isLoading === false) {
       buttonValue = "Get Started";
  } else if( props.isLoading === true && !props.isLoginPage) {
       buttonValue = "Signing Up";
  } else if( props.isLoading === true && props.isLoginPage) {
    buttonValue = "Logging In";
}

  return (
    <FormContainer>
    {props.isLoading ? <IsLoadingComponent /> : null}
      <Form action={props.isLoginPage ? 'login' : 'signup'} method="post" onSubmit={props.handleSignUp}>
        <Title>{props.isLoginPage === true ? "Log In" : "Sign Up"}</Title>
        {props.isValidFlag === false && props.isLoginPage ? (
          <ErrorMessage>
            That Friendlier account doesn't exist. Enter a different account or{" "}
            <StyledLink errorsignup="true" to="/signup">
              create a new account
            </StyledLink>
          </ErrorMessage>
        ) : !props.isLoginPage && props.isValidFlag === false ? (
          <ErrorMessage>
            Your email and/or password have not met the minimum requirements{" "}
            <StyledLink errorsignup="true" to="/">
              need help?
            </StyledLink>
          </ErrorMessage>
        ) : null}
        <StyledLabel secondary="true">
          Email
          <StyledInput
            label="Email"
            type="email"
            onChange={(event) => props.handleEmail(event.target.value)}
            value={props.email.value}
          />
          {!props.isLoginPage ? <p style={{fontSize: '14px', fontStyle: 'italic'}}>Email must have a minimum of 12 characters</p> : null}
        </StyledLabel>
        <StyledLabel secondary="true">
          Password
          <StyledInput
            label="Password"
            type="password"
            onChange={(event) => props.handlePassword(event.target.value)}
            value={props.password.value}
          />
          {!props.isLoginPage ? <p style={{fontSize: '14px', fontStyle: 'italic'}}>Password must have a minimum of 8 characters</p> : null}
        </StyledLabel>
        <ButtonContainer>
          <StyledButton secondary="true">
            {buttonValue}
          </StyledButton>
        </ButtonContainer>
        <StyledText>
         {props.isLoginPage ? 'New to Friendlier?' : 'Already have an account?'}
         {props.isLoginPage ? <StyledSignup to="/signup" primary="true">Sign Up</StyledSignup> : <StyledSignup to="/login" primary="true">Log In</StyledSignup>}
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

const ButtonContainer = S.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
