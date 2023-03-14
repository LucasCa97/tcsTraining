import * as actions from './actionTypes'

export const taskAdded = description => ({
        type: actions.TASK_ADDED,
        payload: {
            description
        }
})

export const setTask = description => ({
    type: actions.TASK_ADDED,
    payload: {
        description
    }
})