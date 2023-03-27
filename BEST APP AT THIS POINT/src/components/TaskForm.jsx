import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';
import '../app.css';

const TaskForm = () => {
  const dispatch = useDispatch();

  const taskNameRef = useRef(null);
  const dateRef = useRef(null);
  const reminderRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskName = taskNameRef.current.value;
    const date = dateRef.current.value;
    const reminder = reminderRef.current.checked;
    dispatch(addTask({ taskName, date, reminder }));
    taskNameRef.current.value = '';
    dateRef.current.value = '';
    reminderRef.current.checked = false;
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="task-form__label">
        Task name
        <input className="task-form__input" type="text" ref={taskNameRef} />
      </label>
      <label className="task-form__label">
        Date
        <input className="task-form__input" type="date" ref={dateRef} />
      </label>
      <label className="task-form__label task-form__input--reminder">
        <input type="checkbox" ref={reminderRef} />
        Reminder
      </label>
      <button className="task-form__button" type="submit">Add task</button>
    </form>
  );
};

export default TaskForm;
