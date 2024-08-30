import { useId } from "react";


export const UseIdReact = () => {
  const id = useId()

  return (
    <>
      <div>
        <label htmlFor={id}>Name: </label>
        <input type="text" id={id} />
    </div>
    </>
  )
}