import counterReducer from './counter';
import loggedReducer from './isLogged';
import fetchReducer from './fetch';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer, 
    isLogged: loggedReducer,
    fetch: fetchReducer
})

export default allReducers;