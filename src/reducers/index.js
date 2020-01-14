import {combineReducers} from 'redux';
import {searchPageReducer} from './searchPageReducers';
import {rootReducer} from './rootReducer';

export const reducer = combineReducers({
    searchPage: searchPageReducer,
    root: rootReducer
});