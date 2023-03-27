import { useDispatch } from 'react-redux';
import { deleteTask, toggleReminder } from '../actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const { id, taskName, date, reminder } = task;

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const handleReminder = () => {
    dispatch(toggleReminder(id));
  };

  return (
    <div
      className={`task ${reminder ? 'reminder' : ''}`}
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
