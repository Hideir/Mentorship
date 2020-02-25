import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import CredentialsForm from '../CredentialsForm';
import { useFormInputControl } from "../../../hooks/useFormInputControl";
import {toggleIsLoggedIn} from '../../../actions';

  const SignupForm = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector( state => state.root.isLoading);
    // create a user object.
    const [email, setEmail, handleEmail] = useFormInputControl('');
    const [password, setPassword, handlePassword] = useFormInputControl('');
    const [isValidFlag, setIsValidFlag] = useState(true);
    // const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = (event) => {
      event.preventDefault();
      // setIsLoading(true);
      dispatch(toggleIsLoggedIn(true));
      // Send our data({email, password}) to the /signup endpoint on our server, with the email and password in the body
        axios.post(`${process.env. REACT_APP_API_LOCAL}/signup`, {email, password}, {  
          headers: {
            'content-type': 'application/json'  // Tell the server we are sending this over as JSON
          },
        })
        .then(function (response) {
          dispatch({type: 'SET_NEW_USER_EMAIL', payload: email})
          dispatch(toggleIsLoggedIn(false))
          // When our server responds that we made a good request we push our user to the home component.
          props.history.push("/signup/interests");
        })
        .catch(function (error) {
          setIsValidFlag(false);
          // setIsLoading(false);
          dispatch(toggleIsLoggedIn(false));
          console.log(error);
        });
    }


    return(
      <>
        <CredentialsForm
          isLoading={isLoading}
          isLoginPage={false}
          isValidFlag={isValidFlag} 
          email={email} 
          password={password} 
          handleEmail={handleEmail}
          handlePassword={handlePassword} 
          handleSignUp={handleSignUp}
        />
      </>
      );
  }

  export default SignupForm;

