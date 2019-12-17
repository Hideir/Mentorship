import React,{useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import DesktopNavigation from './components/Menus/DesktopNavigation';
import HomePage from './components/HomePage';
import LoginForm from './components/Forms/LoginForm/LoginForm';
import SignupForm from './components/Forms/SignupForm/SignupForm';
import AboutPage from './components/About';
import InterestListPage from './components/OnboardingProcesses/InterestListPage';
import ProfileCreationPage from './components/OnboardingProcesses/ProfileCreationPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MobileMenu from './components/Menus/MobileMenu/MobileMenu';

function App() {
  // Utilize redux or context api to have global state or lift state up. Or else i will create a 'user' object in app to pass the data
  const [authToken, setAuthToken] = useState(false);
  const [newSignedUpUser, setNewSignedUpUser] = useState({
    email: '',
    interests: [],
  });

  const signIn = () => {
    // Store token in state to let the app know the user is logged in
    setAuthToken(localStorage.getItem('auth-token'));
  }
  const signOut = () => {
      // Delete token from local storage on sign out.
      setAuthToken(localStorage.removeItem('auth-token'));
  }
  return (
    <Router>
        <div className="App">
          <DesktopNavigation signOut={signOut} authToken={authToken}/>
          <MobileMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/profile" render={props => <ProfilePage {...props} newSignedUpUserEmail={newSignedUpUser.email}/> } />
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
