import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import CredentialsForm from '../CredentialsForm';
import { useFormInputControl } from "../../../hooks/useFormInputControl";
import {toggleIsLoggedIn} from '../../../actions';



const LoginForm = props => {
  // const [email, setEmail, handleEmail] = useFormInputControl(" ");
  const [password, setPassword, handlePassword] = useFormInputControl("");
  const [username, setUsername, handleUsername] = useFormInputControl('');
  const [isValidFlag, setIsValidFlag] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = useSelector(state => state.root.isLoading);
  const dispatch = useDispatch();

  const signIn = () => {
    // Store token in state to let the app know the user is logged in
    let authToken = localStorage.getItem('auth-token');
    if(authToken) {
      dispatch({type: 'IS_LOGGED_IN', payload: true});
    }
  }
  const handleSignUp = event => {
    event.preventDefault();
    
    // setIsLoading(true);
    dispatch(toggleIsLoggedIn(true));
    // Send our data({email, password}) to the /signup endpoint on our server, with the email and password in the body
    axios.post(`${process.env.REACT_APP_API_LOCAL  || process.env.REACT_APP_API_URL}/signin`,{ username, password },
          {
            headers: {
              "content-type": "application/json" // Tell the server we are sending this over as JSON
          }
        }
      )
      .then(async function (response) {
        // When our server responds that we made a good request we push our user to the home component.
        const {token} = response.data;
        // Set token to local storage
        localStorage.setItem('auth-token', token);
        await signIn();
        setIsValidFlag(true);
        await  dispatch(toggleIsLoggedIn(false));
        // Redirect them to the homepage on sucessfull Sign In.
        props.history.push("/");
      })
      .catch(function (error) {
        console.log("here is the error" + error);
        if (error) {
          setIsValidFlag(false);
          // setIsLoading(false);
          dispatch(toggleIsLoggedIn(false));
        }
      });
  };
  return (
    <>
        <CredentialsForm
          isLoading={isLoading}
          isLoginPage={true}
          isValidFlag={isValidFlag} 
          username={username}
          // email={email} 
          password={password}
          handleUsername={handleUsername}
          // handleEmail={handleEmail}
          handlePassword={handlePassword} 
          handleSignUp={handleSignUp}
        />
    </>
  );
};

export default LoginForm;
