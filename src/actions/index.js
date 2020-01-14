export const setLoggedInUser = apiResponse => {
    return {type: 'SET_LOGGEDIN_USER', payload: apiResponse.data.loggedInUserData[0]};
}

export const toggleIsLoggedIn = (flag) => {
    return flag ? {type: 'SET_ISLOADING', payload: true} : {type: 'REMOVE_ISLOADING', payload: false};
}





