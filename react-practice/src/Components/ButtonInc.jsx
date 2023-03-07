import {useCounter} from '../Hooks/useCounter'

export const ButtonInc = () => {
    const {count, increment, decrement} = useCounter()
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

