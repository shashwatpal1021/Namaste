import { useRef } from "react";

const UseRefReact = () => {
  
  const inputRef = useRef(null)

  const handleClick = () => {
    // inputRef.current.focus();
    console.log(inputRef.current.value)
  }

  return (
    <>
      <div>
        <input type="text" ref={inputRef} onChange={handleClick} />
        {/* <div>{inputRef.current. }</div> */}
        {/* <button onClick={handleClick}>Focus on input</button> */}
    </div>
    </>
  )
}

export default UseRefReact