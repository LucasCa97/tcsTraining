import counterReducer from './counter';
import loggedReducer from './isLogged';
import fetchReducer from './fetch';
import taskReducer from './taskFormReducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer, 
    isLogged: loggedReducer,
    fetch: fetchReducer,
    formTask: taskReducer
})

export default allReducers;