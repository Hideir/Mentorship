import React, {useState} from 'react';
import {Route, Redirect} from 'react-router-dom';

// grab our localStorage variable to check user is logged in
// let authToken = localStorage.getItem('auth-token');
// pass in an object, with the Component as a value to 'component' then spread the rest of the object in.
// We also pass in our individual props we prop drilled.
export const ProtectedRoute = ({component: Component, newSignedUpUserEmail, IsLoggedIn, ...restOfProps}) => {
    // const [isLoggedIn, setSome] = useState(false);
    // if(authToken) {

    // }
    return(
    <Route {...restOfProps} render={props => (
        IsLoggedIn 
        ? <Component {...props} /> 
        : <Redirect to={{pathname:'/login', state: {from: props.location} }} />
    )} />
    )
}
