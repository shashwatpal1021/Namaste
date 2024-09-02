import { useReducer } from "react";

const initialCount = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increament':
      return { count: state.count + 1 };
    case 'decreament':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const UseReducerReact = () => {

  const [state, dispatch] = useReducer(reducer, initialCount)

  const increament = () => {
    dispatch({ type: 'increament' })
  }
  const decrement = () => {
    dispatch({ type: 'decreament' })
  }
  return (
    <>
      <p>reducerCount:  {state.count}</p>
      <button className="bg-red-500" onClick={increament}>+</button>
      <button className="bg-blue-500" onClick={decrement}>-</button>
    </>
  )
}


export default UseReducerReact;