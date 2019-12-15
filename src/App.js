import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import DesktopNavigation from './components/DesktopNavigation';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AboutPage from './components/About';
import InterestListPage from './InterestListPage';
import ProfileCreationPage from './components/ProfileCreationPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MobileMenu from './components/MobileMenu/MobileMenu';

function App() {
  // Utilize redux or context api to have global state or lift state up. Or else i will create a 'user' object in app to pass the data
  const [newSignedUpUser, setNewSignedUpUser] = useState({
    email: '',
    interests: [],
  });
  return (
    <Router>
        <div className="App">
          <DesktopNavigation />
          <MobileMenu />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/profile" render={props => <ProfilePage {...props} newSignedUpUserEmail={newSignedUpUser.email}/> } />
            <Route exact path="/login" render={props => <LoginForm {...props} /> } />
            <Route exact path="/signup" render={props => <SignupForm {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser} /> } />
            <Route exact path="/signup/interests" render={props => <InterestListPage {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser}/> } />
            <Route exact path="/signup/add-profile" render={props => <ProfileCreationPage {...props} newSignedUpUser={newSignedUpUser} setNewSignedUpUser={setNewSignedUpUser} /> } />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
