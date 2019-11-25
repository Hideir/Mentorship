import React, { useState } from "react";
import axios from "axios";
import CredentialsForm from './CredentialsForm';


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
    <>
      <CredentialsForm 
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
