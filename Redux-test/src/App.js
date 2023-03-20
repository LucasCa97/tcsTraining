import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, logIn, fetchData } from './actions';
import { useEffect } from 'react'

const App = () => {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const data = useSelector(state => state.fetch)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return (
    <div>
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment())} >+</button>
      <button onClick={() => dispatch(decrement())} >-</button>
      <button onClick={() => dispatch(logIn())}>{isLogged ? "SIGN OFF" : "LOG IN"}</button>

      {isLogged ? <h3>You cannot see this if you are not logged in</h3> : ""}

      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>USER NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
