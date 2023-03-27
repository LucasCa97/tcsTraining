import counterReducer from './counter';
import loggedReducer from './isLogged';
import fetchReducer from './fetch';
import tasksReducer from './taskFormReducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counter: counterReducer, 
    isLogged: loggedReducer,
    fetch: fetchReducer,
    formTask: tasksReducer
})

export default allReducers;