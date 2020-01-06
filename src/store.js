import React,{createContext, useReducer} from 'react';

let token =localStorage.getItem('auth-token');


const initialState = {
    loggedInUser: {},
    isLoggedIn: token ? true : false,
};
// Create a context and pass in our empty object for our store
const store = createContext(initialState);

// Context returns a Provider and Consumer, we grab the Provider
const { Provider } = store;


// Create a HOC that will take in a component ( App )
const GlobalStateProvider = ( {children} ) => {

    // the state is our newly created state, the dispatch takes the action to create new state.
    const [state, dispatch] = useReducer( (initialState, action) => { // Inline Reducer function.
        switch(action.type) {
            case 'SET_LOGGEDIN_USER':
                return  {...initialState, loggedInUser : action.payload};
            case 'IS_LOGGED_IN':
                return {...initialState, isLoggedIn : true};
            case 'LOG_OUT':
                return {...initialState, loggedInUser: {}, isLoggedIn : false};   
            default:
                return initialState;
        };
    },
    initialState); // Our initalState we pass into our useReducer

     // Return our provider passing in the state and the dispatch from line 15.
     // The children here is whatever component is wraped around our GlobalStateProvider
    return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export {store, GlobalStateProvider};