import { ADD_TASK, EDIT_TASK, DELETE_TASK, TOGGLE_REMINDER } from "./actionTypes";

export const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return{
        type: 'DECREMENT'
    }
}

export const logIn = () => {
    return{
        type: 'SIGN_IN'
    }
}

export const fetchData = () => {
    
    return async (dispatch, getState) => {
        const response = await fetch('https://reqres.in/api/users?page=2');
        const json = await response.json();

        dispatch({
            type: 'FETCH_DATA',
            payload: json.data
        })
    }
}

// Add task action
export const addTask = (task) => (dispatch) => {
  fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: ADD_TASK,
        payload: data,
      })
    );
};

// Edit task action
export const editTask = (id, task) => (dispatch) => {
  fetch(`http://localhost:5000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: EDIT_TASK,
        payload: data,
      })
    );
};

// Delete task action
export const deleteTask = (id) => (dispatch) => {
  fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  }).then(() =>
    dispatch({
      type: DELETE_TASK,
      payload: id,
    })
  );
};

// Toggle reminder action
export const toggleReminder = (id, task) => (dispatch) => {
  const updatedTask = { ...task, reminder: !task.reminder };

  fetch(`http://localhost:5000/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: TOGGLE_REMINDER,
        payload: data,
      })
    );
};
