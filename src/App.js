import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ProtectedRoute} from './ProtectedRoute';
import DesktopNavigation from './components/Menus/DesktopNavigation';
import HomePage from './components/HomePage';
import LoginForm from './components/Forms/LoginForm/LoginForm';
import SignupForm from './components/Forms/SignupForm/SignupForm';
import SearchPage from './components/SearchPage';
import AboutPage from './components/About';
import InterestListPage from './components/OnboardingProcesses/InterestListPage';
import ProfileCreationPage from './components/OnboardingProcesses/ProfileCreationPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MobileMenu from './components/Menus/MobileMenu/MobileMenu';

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  const [IsLoggedIn, setIsLoggedIn] = useState( () => {
    if(localStorage.getItem('auth-token')) {
      return true;
    }
    else {
      return false;
    }
  });
  const [newSignedUpUser, setNewSignedUpUser] = useState({
    email: '',
    interests: [],
  });

  const signIn = () => {
    // Store token in state to let the app know the user is logged in
    let authToken = localStorage.getItem('auth-token');
    if(authToken) {
      setIsLoggedIn(true);
    }
  }
  const signOut = () => {
      // Delete token from local storage on sign out.
      let authToken = localStorage.getItem('auth-token'); 
      if(authToken) {
        setIsLoggedIn(false);
        localStorage.removeItem('auth-token');
      }
  }
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
        console.log(response.data);
        await setLoggedInUser(response.data.loggedInUserData[0]);
			})
			.catch(error => console.log(error))
    }
    if(IsLoggedIn) getUserInformation();

  },[IsLoggedIn]); 

  return (
    <Router>
        <div className="App">
          <DesktopNavigation signOut={signOut} IsLoggedIn={IsLoggedIn} loggedInUser={loggedInUser}/>
          <MobileMenu signOut={signOut} IsLoggedIn={IsLoggedIn} loggedInUser={loggedInUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} IsLoggedIn={IsLoggedIn} loggedInUser={loggedInUser} />
            <ProtectedRoute exact path="/search" component={SearchPage} IsLoggedIn={IsLoggedIn}/>
            <Route exact path="/about" component={AboutPage} />
            <ProtectedRoute  path="/profile/:id" component={ProfilePage} loggedInUser={loggedInUser} IsLoggedIn={IsLoggedIn}  newSignedUpUserEmail={newSignedUpUser.email} />
            <Route exact path="/login" render={props => <LoginForm {...props} signIn={signIn} /> } />
            <Route exact path="/signup" render={props => <SignupForm {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser} /> } />
            <Route exact path="/signup/interests" render={props => <InterestListPage {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser}/> } />
            <Route exact path="/signup/add-profile" render={props => <ProfileCreationPage {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser} /> } />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
