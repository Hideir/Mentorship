import React from 'react';
import {Route, Redirect} from 'react-router-dom';

let authToken = localStorage.getItem('auth-token');
export const ProtectedRoute = ({component: Component, newSignedUpUserEmail, ...restOfProps}) => (
    <Route {...restOfProps} render={props => (
        authToken 
        ? <Component {...props} /> 
        : <Redirect to={{pathname:'/login', state: {from: props.location} }} />
    )} />
)
