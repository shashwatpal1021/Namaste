import { useRecoilValue } from "recoil"
import { doubleCountState } from "./state"


export const DisplayDoubleCount = () => { 
  const doubleCount = useRecoilValue(doubleCountState)

  return (
    <>
      <h1>Dispaly Double Count: {doubleCount}</h1>
    </>
  )
}