import React,{useState, useEffect, createContext} from 'react';
import {useDarkMode} from './hooks/useDarkMode';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ProtectedRoute} from './ProtectedRoute';
import DesktopNavigation from './components/Menus/DesktopNavigation';
import HomePage from './components/HomePage';
import LoginForm from './components/Forms/LoginForm/LoginForm';
import SignupForm from './components/Forms/SignupForm/SignupForm';
import AboutPage from './components/About';
import SearchPage from './components/SearchPage';
import InterestListPage from './components/OnboardingProcesses/InterestListPage';
import ProfileCreationPage from './components/OnboardingProcesses/ProfileCreationPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MobileMenu from './components/Menus/MobileMenu/MobileMenu';
import AppContext from './context';

function App() {
  // Utilize redux or context api to have global state or lift state up. Or else i will create a 'user' object in app to pass the data
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [newSignedUpUser, setNewSignedUpUser] = useState({
    email: '',
    interests: [],
  });
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  console.log(darkMode);
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
  
  return (

    <Router>
        <AppContext.Provider value={darkMode}>
        <div className="App">
          <DesktopNavigation signOut={signOut} IsLoggedIn={IsLoggedIn} toggleMode={toggleMode} darkMode={darkMode}/>
          <MobileMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <ProtectedRoute exact path="/search" component={SearchPage} IsLoggedIn={IsLoggedIn}/>
            <Route exact path="/about" component={AboutPage} />
            <ProtectedRoute  path="/profile" component={ProfilePage} IsLoggedIn={IsLoggedIn}  newSignedUpUserEmail={newSignedUpUser.email} />
            <Route exact path="/login" render={props => <LoginForm {...props} signIn={signIn} /> } />
            <Route exact path="/signup" render={props => <SignupForm {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser} /> } />
            <Route exact path="/signup/interests" render={props => <InterestListPage {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser}/> } />
            <Route exact path="/signup/add-profile" render={props => <ProfileCreationPage {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser} /> } />
          </Switch>
        </div>
        </AppContext.Provider>
    </Router>


  );
}

export default App;
