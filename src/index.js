import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import our Global State Provider
import {GlobalStateProvider} from './store';

// Wrap our App component in the GlobalStateProvider component
const app = (
    <GlobalStateProvider>
        <App />
    </GlobalStateProvider>
)

// Pump the newly wrapped App in the ReactDOM Render
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
