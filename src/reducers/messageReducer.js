

const initalState = {
    messages: [],
    chatSessionMessages: [],
}

export const messageReducer = (state = initalState, action) => {
    console.log(action.payload)
    switch(action.type) {
        case 'SET_MESSAGES':
            return {...state, messages: [...state.messages, action.payload]}
        default:
            return state;
    }
}