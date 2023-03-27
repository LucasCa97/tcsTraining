import axios from 'axios';

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

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';

export const fetchTasks = () => async (dispatch) => {
  const res = await axios.get('http://localhost:5000/tasks');
  dispatch({
    type: 'FETCH_TASKS',
    payload: res.data,
  });
};

export const addTask = (task) => async (dispatch) => {
  const res = await axios.post('http://localhost:5000/tasks', task);
  dispatch({
    type: 'ADD_TASK',
    payload: res.data,
  });
};

export const deleteTask = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/tasks/${id}`);
  dispatch({
    type: 'DELETE_TASK',
    payload: id,
  });
};

export const updateTask = (id, updatedTask) => async (dispatch) => {
  const res = await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
  dispatch({
    type: 'UPDATE_TASK',
    payload: res.data,
  });
};
