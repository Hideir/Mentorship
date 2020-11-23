import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ProtectedRoute} from './ProtectedRoute';
import DesktopNavigation from './components/Menus/DesktopNavigation';
import HomePage from './components/HomePage';
import LoginForm from './components/Forms/LoginForm/LoginForm';
import SignupForm from './components/Forms/SignupForm/SignupForm';
import SearchPage from './components/SearchPage';
import InterestListPage from './components/OnboardingProcesses/InterestListPage';
import ProfileCreationPage from './components/OnboardingProcesses/ProfileCreationPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MobileMenu from './components/Menus/MobileMenu/MobileMenu';
import IsLoadingComponent from './components/StyledComponents/IsLoadingComponent';
import Messages from './components/ReusedComponents/Messages.jsx';
import InboxPage from './components/InboxPage/InboxPage';
import {setLoggedInUser} from './actions';
import S from 'styled-components';

// Socket.IO
import openSocket from 'socket.io-client';
const endpoint = 'http://https://hideir.netlify.app:8081';

function App() {
  const isLoggedIn = useSelector(state => state.root.isLoggedIn);
  const isLoading = useSelector(state => state.root.isLoading);
  const activeMessageSessions = useSelector(state => state.messageReducer.userRelations); // All the active user sessions
  const dispatch = useDispatch();

  
  const [socket,setSocket] = useState("");
  // this useEffect is to make sure we get the user information on Load. Probably store their loggedin email and password
  // then when the user clicks on the profilePage we use their email to get the profile information instead of
  // making a request every render.
  
  useEffect( () => {
    let authToken = localStorage.getItem('auth-token'); 
		const getUserInformation = () => {
			axios.get(`/loggedInUser`, {  
				headers: {
				  'content-type': 'application/json', // Tell the server we are sending this over as JSON
				  'authorization': authToken, // Send the token in the header from the client.
				},
			})
			.then( async response => {
        await dispatch(setLoggedInUser(response));
			})
			.catch(error => console.log(error))
    }
    if(isLoggedIn) getUserInformation();

  },[isLoggedIn, dispatch]); 


/// Socket.io UseEffect
  useEffect( () => {
    const initSocket = () => {
      const socket = openSocket(endpoint)
      console.log(socket)
      socket.on("hello", data => {
        setSocket(data);
        console.log(data);
      });
          // CLEAN UP THE EFFECT
      return () => socket.disconnect();
    }

      initSocket()
  },[])
  console.log(socket);
  return (
    <Router>
        <div className="App">
        {isLoading ? <IsLoadingComponent /> : null }
          <DesktopNavigation />
          <MobileMenu  />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/search" component={SearchPage} IsLoggedIn={isLoggedIn}/>
            <ProtectedRoute  path="/profile/:id" component={ProfilePage} IsLoggedIn={isLoggedIn}  />
            <ProtectedRoute  path="/inbox" component={InboxPage} IsLoggedIn={isLoggedIn}  />
            <Route exact path="/signin" component={LoginForm} />
            <Route exact path="/signup" render={props => <SignupForm {...props}/> } />
            <Route exact path="/signup/interests" component={InterestListPage} />
            <Route exact path="/signup/add-profile"  component={ProfileCreationPage} />
          </Switch>
          {activeMessageSessions.length > 0
          ? <MessageSessionsContainer> {activeMessageSessions.length > 0 ? activeMessageSessions.map( (users,index) => {
            return <Messages activeMessageSessions={users} key={index}/>
          }) : null}</MessageSessionsContainer> 
          : null}
        </div>
    </Router>

  );
}

export default App;

const MessageSessionsContainer = S.div`
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 8px;
  height: 0;
  overflow: visible;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-end;
`;