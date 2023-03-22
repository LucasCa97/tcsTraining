import { showTaskReducer } from './showTaskReducer';
import { addTaskReducer } from './addTaskReducer';
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    showTask: showTaskReducer, 
    addTask: addTaskReducer
})

export default allReducers;