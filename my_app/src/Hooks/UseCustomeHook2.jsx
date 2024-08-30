import { useState } from "react";



function useCounter(initalValue = 0) {
  const [count, setCount] = useState(initalValue)

  const increament = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return { count, increament, decrement, reset }
}

const UseCustomeHook2 = () => {
  const { count, increament, decrement, reset } = useCounter(0);
  return (

    <>
      <p>useCustomeHook: {count}</p>
      <button onClick={increament} type="button">Increament</button>
      <button onClick={decrement} type="button">Decredecrement</button>
      <button onClick={reset} type="button">Reset</button>
    </>
  )
}

export default UseCustomeHook2;