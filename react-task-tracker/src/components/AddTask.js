import { useRef } from 'react';

const AddTask = ({ onAdd }) => {  
  const textRef = useRef(null);
  const dateRef = useRef(null);
  const checkRef = useRef(null);

  const onSubmit = (e) => {
    const text = textRef.current.value;
    const date = dateRef.current.value;
    const reminder = checkRef.current.checked;
    e.preventDefault();

    if (!text || !date) {
      alert('Please fill the fields');
      return
    }

    onAdd(text, date, reminder);
    
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task' 
          ref={textRef}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time' 
          ref={dateRef}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'  
          ref={checkRef}
        />
      </div>

      <button type='submit' className='btn btn-block'>Save Task</button>
    </form>
  )
}

export default AddTask

// import { useDispatch, useSelector } from 'react-redux'
// import { addTask } from '../actions/actions'

// const AddTask = () => {
//   const dispatch = useDispatch()
//   const text = useSelector(state => state.text)
//   const day = useSelector(state => state.day)
//   const reminder = useSelector(state => state.reminder)

//   // const { text, day, reminder } = useSelector(state => state.addTask)
  

//   const onSubmit = (e) => {
//     e.preventDefault()
//     console.log(day, text)
//     // if (!text) {
//     //   alert('Please add a task')
//     //   return
//     // }

//     // dispatch({ type: 'ADD_TASK', payload: { text, day, reminder } })
//     if (text === "" || day === "") {
//       alert('Please fill out all fields')
//       return
//     }
    
//     dispatch(addTask({ text, day, reminder }))
    
//   }

//   return (
//     <form className='add-form' onSubmit={onSubmit}>
//       <div className='form-control'>
//         <label>Task</label>
//         <input
//           type='text'
//           placeholder='Add Task'
//           value={text}
//           onChange={(e) => dispatch({ type: 'SET_TEXT', payload: e.target.value })}
//         />
//       </div>
//       <div className='form-control'>
//         <label>Day & Time</label>
//         <input
//           type='text'
//           placeholder='Add Day & Time'
//           value={day}
//           onChange={(e) => dispatch({ type: 'SET_DAY', payload: e.target.value })}
//         />
//       </div>
//       <div className='form-control form-control-check'>
//         <label>Set Reminder</label>
//         <input
//           type='checkbox'
//           checked={reminder}
//           value={reminder}
//           onChange={(e) => dispatch({ type: 'SET_REMINDER', payload: e.currentTarget.checked })}
//         />
//       </div>

//       <button type='submit' value='Save Task' className='btn btn-block' >Save Task</button>
//     </form>
//   )
// }

// export default AddTask






