import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import DesktopNavigation from './components/DesktopNavigation';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import AboutPage from './components/About';

function App() {
  return (
    <Router>
        <div className="App">
          <DesktopNavigation />
          <Switch>
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignupForm} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
