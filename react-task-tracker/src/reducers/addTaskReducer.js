import * as actions from "../actions/actionTypes";

const initialState = {
    text: '',
    day: '',
    reminder: false
  }
  
export const addTaskReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.ADD_TASK:
        return initialState
      case actions.SET_TEXT:
        return { ...state, text: action.payload }
      case actions.SET_DAY:
        return { ...state, day: action.payload }
      case actions.SET_REMINDER:
        return { ...state, reminder: action.payload }
      default:
        return state
    }
  }
  