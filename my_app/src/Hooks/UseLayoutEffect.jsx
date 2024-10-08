import { useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const ref = useRef(null)

  useLayoutEffect(() => {
    console.log(ref.current.getBoundingClientRect())
  }, [])

  return (
    <>
      <div ref={ref}>Measure this element</div>
    </>
  )
}
export default UseLayoutEffect;

