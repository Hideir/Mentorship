import React,{useEffect} from 'react';
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
import {setLoggedInUser} from './actions';


function App() {
  const isLoggedIn = useSelector(state => state.root.isLoggedIn);
  const isLoading = useSelector(state => state.root.isLoading);

  const dispatch = useDispatch();

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
        await dispatch(setLoggedInUser(response));
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
          {isLoading ? <IsLoadingComponent /> : null }
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/search" component={SearchPage} IsLoggedIn={isLoggedIn}/>
            <ProtectedRoute  path="/profile/:id" component={ProfilePage} IsLoggedIn={isLoggedIn}  />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" render={props => <SignupForm {...props}/> } />
            <Route exact path="/signup/interests" component={InterestListPage} />
            <Route exact path="/signup/add-profile"  component={ProfileCreationPage} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
