import { deleteTask, toggleReminder } from '../actions';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../actions/index';
import { useEffect } from 'react';


const Task = ({ task }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  const { id, taskName, date, reminder } = task;

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const handleReminder = () => {
    dispatch(toggleReminder(id));
  };

  return (
    <div
      className={`task-container task ${reminder ? 'reminder' : ''}`}
      onDoubleClick={handleReminder}
    >
      <h3>
        {taskName}{' '}
        <button className="delete-btn" onClick={handleDelete}>
          Eliminar
        </button>
      </h3>
      <p>{date}</p>
      <p>{reminder ? 'Recordatorio' : 'Sin recordatorio'}</p>
    </div>
  );
};

export default Task;
