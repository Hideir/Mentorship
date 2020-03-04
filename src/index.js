import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {reducer} from './reducers/index.js';
import {composeWithDevTools} from 'redux-devtools-extension';


const configureStore = () => {
    return createStore(reducer, applyMiddleware(thunk));
}

const store = configureStore();
// Import our Global State Provider
// import {GlobalStateProvider} from './store';

// Wrap our App component in the GlobalStateProvider component
const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

// Pump the newly wrapped App in the ReactDOM Render
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
