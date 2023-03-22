import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, logIn } from '../actions/index';

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
  return (
    <>
      <h1 className='title'>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())} >+</button>
      <button onClick={() => dispatch(decrement())} >-</button>
      <button onClick={() => dispatch(logIn())}>{isLogged ? "SIGN OFF" : "LOG IN"}</button>
      {isLogged ? <h3 className='title'>You cannot see this if you are not logged in</h3> : ""}

    </>
  )
}

export default Counter
