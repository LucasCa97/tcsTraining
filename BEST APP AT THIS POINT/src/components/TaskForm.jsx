import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, fetchTasks } from '../actions';
import '../app.css';
import Task from './Task';

const TaskForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const tasks = useSelector((state) => state.tasks);
  console.log(tasks)

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
    <div>
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
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className='title'>Tasks</h1>
          {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
          <Task key={task.id} task={task} />
          ))
          ) : (
          <p>No tasks to show</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default TaskForm;
