

const initalState = {
    messages: [],
    userRelations: [], // this is empty at first so an empty message box isn't on the front page.
    userSessions: {
        patients: [], // a list of patients id
        messages: [], // a list of message string. 
    }
}

export const messageReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'SET_MESSAGES':
            return {...state, messages: [...state.messages, action.payload]}
        case 'RESET_MESSAGES':
            return {...state, messages: [action.payload]}
        case 'START_MESSAGE_SESSION':
            return {...state, userRelations: [...state.userRelations, action.payload]};  
        case 'DELETE_MESSAGE_SESSION':
            return {...state, userRelations: [...state.userRelations.filter( deletedSession => deletedSession.id !== action.payload)]}
        default:
            return state;
    }
}