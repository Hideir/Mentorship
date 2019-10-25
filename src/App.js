import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import DesktopNavigation from './components/DesktopNavigation';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>

        <div className="App">
          <DesktopNavigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
    </Router>

  );
}

export default App;
