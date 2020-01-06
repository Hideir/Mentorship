import React,{useEffect, useState, useContext} from 'react';
import HeroSection from './HeroSection';
import axios from 'axios';

import {store} from '../store';

const HomePage = (props) => {
  // const globalState = useContext(store);
  // const { isLoggedIn} = globalState.state;
  // const [user, setUser] = useState([]);

  // useEffect( () => {
  //   let authToken = localStorage.getItem('auth-token'); 
  //       const getUserInformation = () => {
  //           axios.get(`/loggedInUser`, {  
  //               headers: {
  //                 'content-type': 'application/json', // Tell the server we are sending this over as JSON
  //                 'authorization': authToken, // Send the token in the header from the client.
  //               },
  //             })
  //           .then( async response => {
  //             await setUser(response.data.loggedInUserData[0]);
  //           })
  //           .catch(error => console.log(error))
  //       }
  //   if(isLoggedIn) getUserInformation();
  // },[]); 
  
  return(
    <>
        <HeroSection/>
    </>
  );

}
export default HomePage;
