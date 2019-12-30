import React,{useState} from 'react';
import axios from 'axios';
import CredentialsForm from '../CredentialsForm';
import { useFormInputControl } from "../../../hooks/useFormInputControl";
// import {apiKey} from './config';

  const SignupForm = (props) => {
    // create a user object.
    const [email, setEmail, handleEmail] = useFormInputControl('');
    const [password, setPassword, handlePassword] = useFormInputControl('');
    const [isValidFlag, setIsValidFlag] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = (event) => {
      event.preventDefault();
      setIsLoading(true);
      // Send our data({email, password}) to the /signup endpoint on our server, with the email and password in the body
        axios.post(`https://hideir.herokuapp.com/signup`, {email, password}, {  
          headers: {
            'content-type': 'application/json',
            crossDomain: true, // Tell the server we are sending this over as JSON
            'Access-Control-Allow-Origin': '*'

          },
        })
        .then(function (response) {
          console.log(response);
          props.setNewSignedUpUser({...props.newSignedUpUser, email: email})
          // When our server responds that we made a good request we push our user to the home component.
          props.history.push("/signup/interests");
        })
        .catch(function (error) {
          setIsValidFlag(false);
          setIsLoading(false);
          console.log(error);
        });
    }

    // useEffect( () => {
    //     axios.get(`http://localhost:8080/todo`)
    //     .then( response => {
    //       console.log(response);
    //     })
    //     .catch( error => {
    //       console.log(error);
    //     })
    // }, []);


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

