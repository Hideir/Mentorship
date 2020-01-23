let token = localStorage.getItem('auth-token');


export const initialState = {
    loggedInUser: {},
    isLoggedIn: token ? true : false,
    newSignedUpUser: {
        email: '',
        interests: [],
    },
    isLoading: false,
    messageSessions: [],
};


export const rootReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch(action.type) {
        case 'SET_LOGGEDIN_USER':
            return  {...state, loggedInUser : action.payload};
        case 'IS_LOGGED_IN':
            return {...state, isLoggedIn : true};
        case 'LOG_OUT':
            return {...state, loggedInUser: {}, isLoggedIn : false, newSignedUpUser: {} };
        case 'SET_NEW_USER_EMAIL':
            return {
            ...state, 
            newSignedUpUser: {
                ...state.newSignedUpUser, email: action.payload
            }};
        case 'SET_NEW_USER_INTERESTS':
            return {
            ...state, 
            newSignedUpUser: {
                ...state.newSignedUpUser, interests: [...state.newSignedUpUser.interests, action.payload],
            }};
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
            case 'START_MESSAGE_SESSION':
                return {...state, messageSessions: [...state.messageSessions, action.payload]};  
            case 'DELETE_MESSAGE_SESSION':
                return {...state, messageSessions: [...state.messageSessions.filter( deletedSession => deletedSession.id !== action.payload)]}
        default:
            return state;
    }
};
