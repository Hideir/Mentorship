import React from "react";
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
  console.log(props);
  if(props.isLoginPage && props.isLoading === false){
       buttonValue = "Sign In"; 
  } else if(!props.isLoginPage && props.isLoading === false) {
       buttonValue = "Get Started";
  } else if( props.isLoading === true && !props.isLoginPage) {
       buttonValue = "Signing Up";
  } else if( props.isLoading === true && props.isLoginPage) {
    buttonValue = "Signing In...";
}

  return (
    <FormContainer>
      <Form action={props.isLoginPage ? 'signin' : 'signup'} method="post" onSubmit={props.handleSignUp}>
        <Title>{props.isLoginPage === true ? "Sign In" : "Sign Up"}</Title>
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
          Username
          <StyledInput
            label="Username"
            type="text"
            onChange={event => props.handleUsername(event.target.value)}
            value={props.username.value}
          />
          {!props.isLoginPage ? <p style={{fontSize: '14px', fontStyle: 'italic'}}>Username must have a minimum of 5 characters</p> : null}
        </StyledLabel>
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
         {props.isLoginPage ? <StyledSignup to="/signup" primary="true">Sign Up</StyledSignup> : <StyledSignup to="/signin" primary="true">Sign In</StyledSignup>}
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
