import * as actions from '../actions/actionTypes'

export const taskAdded = task => ({
  type: actions.TASK_ADDED,
  payload: task
})

export const setTask = task => ({
  type: actions.SET_TASKS,
  payload: task
})

