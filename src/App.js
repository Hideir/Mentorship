import React,{useState, useEffect} from 'react';
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

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  const [newSignedUpUser, setNewSignedUpUser] = useState({
    email: '',
    interests: [],
  });

  // this useEffect is to make sure we get the user information on Load. PRobably store their loggedin email in password
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
        await dispatch({type: 'SET_LOGGEDIN_USER', payload: response.data.loggedInUserData[0]})
			})
			.catch(error => console.log(error))
    }
    if(isLoggedIn) getUserInformation();

  },[isLoggedIn, dispatch]); 

  return (
    <Router>
        <div className="App">
          <DesktopNavigation />
          <MobileMenu  />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/search" component={SearchPage} IsLoggedIn={isLoggedIn}/>
            <ProtectedRoute  path="/profile/:id" component={ProfilePage} IsLoggedIn={isLoggedIn}  />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" render={props => <SignupForm {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser} /> } />
            <Route exact path="/signup/interests" component={InterestListPage} />
            <Route exact path="/signup/add-profile"  component={ProfileCreationPage} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
