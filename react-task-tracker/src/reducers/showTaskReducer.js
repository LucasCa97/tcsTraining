import * as actions from "../actions/actionTypes";

export function showTaskReducer(state = {
    showAddTask: false,
    tasks: [],
  }, action) {
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
  