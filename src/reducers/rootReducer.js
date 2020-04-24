let token = localStorage.getItem('auth-token');


export const initialState = {
    loggedInUser: {},
    isLoggedIn: token ? true : false,
    newSignedUpUser: {
        email: '',
        username: '',
        interests: [],
    },
    isLoading: false,
};


export const rootReducer = (state = initialState, action) => {
    console.log({action: action.payload});
    switch(action.type) {
        case 'SET_LOGGEDIN_USER':
            return  {...state, loggedInUser : action.payload};
        case 'IS_LOGGED_IN':
            return {...state, isLoggedIn : true};
        case 'LOG_OUT':
            return {...state, loggedInUser: {}, isLoggedIn : false, newSignedUpUser: {} };
        case 'SET_NEW_USER_ALIAS':
            return {
            ...state, 
            newSignedUpUser: {
                ...state.newSignedUpUser, email: action.payload.email, username: action.payload.username
            }};
        case 'SET_NEW_USER_INTERESTS':
            console.log(state);
            console.log(state.newSignedUpUser);
            console.log(state.newSignedUpUser.interests);
            if(state.newSignedUpUser.interests.length === 0 || state.newSignedUpUser.interests.length === undefined) {
            return {
                ...state, 
                newSignedUpUser: {
                    ...state.newSignedUpUser, interests: [action.payload],
                }}; 
            } else {
            return {
                ...state, 
                newSignedUpUser: {
                    ...state.newSignedUpUser, interests: [...state.newSignedUpUser.interests, action.payload],
                }};
            }
        case 'REMOVE_NEW_USER_INTERESTS':
            return {
            ...state, 
            newSignedUpUser: {
                ...state.newSignedUpUser, interests:  state.newSignedUpUser.interests.filter( deselectedInterest  => deselectedInterest !== action.payload)
            }};
        case 'SET_ISLOADING':
            return {...state, isLoading: true};
        case 'REMOVE_ISLOADING':
            return {...state, isLoading: false};
    
        default:
            return state;
    }
};