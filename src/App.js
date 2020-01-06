import React,{useState, useEffect, useContext} from 'react';
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
import {store} from './store.js';

function App() {
  const globalState = useContext(store);
  const {dispatch} = globalState; // Pull out the dispatch
  const {isLoggedIn} = globalState.state; // Pulled out the logged in user state
  console.log({globalState});

  const [newSignedUpUser, setNewSignedUpUser] = useState({
    email: '',
    interests: [],
  });

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
        await dispatch({type: 'SET_LOGGEDIN_USER', payload: response.data.loggedInUserData[0]})
			})
			.catch(error => console.log(error))
    }
    if(isLoggedIn) getUserInformation();

  },[isLoggedIn]); 

  return (
    <Router>
        <div className="App">
          <DesktopNavigation dispatch={dispatch} />
          <MobileMenu dispatch={dispatch} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/search" component={SearchPage} IsLoggedIn={isLoggedIn}/>
            {/* <Route exact path="/about" component={AboutPage} /> */}
            <ProtectedRoute  path="/profile/:id" component={ProfilePage} IsLoggedIn={isLoggedIn}  />
            <Route exact path="/login" render={props => <LoginForm {...props}  dispatch={dispatch} /> } />
            <Route exact path="/signup" render={props => <SignupForm {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser} /> } />
            <Route exact path="/signup/interests" render={props => <InterestListPage {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser}/> } />
            <Route exact path="/signup/add-profile" render={props => <ProfileCreationPage {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser} /> } />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
