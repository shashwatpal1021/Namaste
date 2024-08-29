import { useCallback, useState } from "react";

function ChildComponent({ onClick }) {
  console.log("childComponent render");

  return <button onClick={onClick}>Click</button>;
}

const UseCallBackReact = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log("Button was clicked!");
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <ChildComponent onClick={handleClick} />
    </>)
}

export default UseCallBackReact;

// Memoize callback functions to prevent unnecessary re - renders.