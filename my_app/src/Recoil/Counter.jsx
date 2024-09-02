import { useRecoilState } from "recoil"
import { countState } from "./state"

export const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <>
      <p>Recoil Count:  {count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
    </>
  )
}