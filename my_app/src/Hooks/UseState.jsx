import { useState } from 'react'


const UseState = () => {
  const [count, setCount] = useState(0)

  const increament = () => {
    setCount((preCount) => preCount + 1)
  }
  const decreament = () => {
    setCount((preCount) => preCount - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button className='bg-red-500' onClick={increament}>Increament</button>
        <br />
        <button className='bg-blue-500' onClick={decreament}>Decrement</button>
      </div>
    </>
  )
}

export default UseState;