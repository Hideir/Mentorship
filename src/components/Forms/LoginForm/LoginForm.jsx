import React, { useState } from "react";
import axios from "axios";
import CredentialsForm from '../CredentialsForm';
import { useFormInputControl } from "../../../hooks/useFormInputControl";




const LoginForm = props => {
  const [email, setEmail, handleEmail] = useFormInputControl(" ");
  const [password, setPassword, handlePassword] = useFormInputControl("");
  const [isValidFlag, setIsValidFlag] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


 
  const handleSignUp = event => {
    event.preventDefault();
    setIsLoading(true);
    // Send our data({email, password}) to the /signup endpoint on our server, with the email and password in the body
    axios.post(`/login`,{ email, password },
          {
            headers: {
              "content-type": "application/json" // Tell the server we are sending this over as JSON
          }
        }
      )
      .then(function (response) {
        // When our server responds that we made a good request we push our user to the home component.
        const {token} = response.data;
        // Set token to local storage
        localStorage.setItem('auth-token', token);
        props.signIn();
        setIsValidFlag(true);
        // Redirect them to the homepage on sucessfull login.
        props.history.push("/");
      })
      .catch(function (error) {
        console.log("here is the error" + error);
        if (error) {
          setIsValidFlag(false);
          setIsLoading(false);
        }
      });
  };
  return (
    <>
        <CredentialsForm
          isLoading={isLoading}
          isLoginPage={true}
          isValidFlag={isValidFlag} 
          email={email} 
          password={password} 
          handleEmail={handleEmail}
          handlePassword={handlePassword} 
          handleSignUp={handleSignUp}
        />
    </>
  );
};

export default LoginForm;
