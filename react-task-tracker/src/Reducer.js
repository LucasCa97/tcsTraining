import * as actions from "./actionTypes";

const initialState = {
    showAddTask: false,
    tasks: [],
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      case actions.SHOWADDTASK_HANDLED:
        return {
          ...state,
          showAddTask: !state.showAddTask,
        };
      case actions.TASK_ADDED:
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        };
      default:
        return state;
    }
  }
  