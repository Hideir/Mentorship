import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import HeroSection from './HeroSection';
import axios from 'axios';


const HomePage = () => {
  const isLoggedIn = useSelector(state => state.root.isLoggedIn);
  const dispatch = useDispatch();

  useEffect( () => {
    let authToken = localStorage.getItem('auth-token'); 
		const getUserInformation = () => {
			axios.get(` ${process.env.REACT_APP_API_URL}/loggedInUser`, {  
				headers: {
				  'content-type': 'application/json', // Tell the server we are sending this over as JSON
				  'authorization': authToken, // Send the token in the header from the client.
				},
			})
			.then( async response => {
        await dispatch({type: 'SET_LOGGEDIN_USER', payload: response.data.loggedInUserData[0]})
			})
			.catch(error => console.log(error))
    }
    if(isLoggedIn) getUserInformation();

  },[dispatch,isLoggedIn]);
  
  return(
    <>
        <HeroSection/>
    </>
  );

}
export default HomePage;
