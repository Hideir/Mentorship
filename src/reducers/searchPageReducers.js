const initalState = {
    selectedTags: [],
    matchedUsers: [],
    numberOfUsers: 0,
}

export const searchPageReducer = (state = initalState, action) => {
    switch(action.type) {
        case 'SET_SELECTED_TAGS':
            return {...state, selectedTags:  action.payload};
        case 'REMOVE_SELECTED_TAGS':
            return {...state, selectedTags: action.payload};
        case 'SET_MATCHED_USERS':
            return {...state, matchedUsers: [...state.matchedUsers, action.payload]};
        case 'SET_NUMBER_OF_USERS':
            return {...state, numberOfUsers: action.payload};
        default:
            return state;
    }
}