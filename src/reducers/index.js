import {combineReducers} from 'redux';
import {searchPageReducer} from './searchPageReducers';
import {rootReducer} from './rootReducer';
import {messageReducer} from './messageReducer';

export const reducer = combineReducers({
    searchPage: searchPageReducer,
    root: rootReducer,
    messageReducer
});