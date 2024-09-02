import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectReact = () => {
  const [data, setData] = useState(0)
  const [show, setShow] = useState(false)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data)
  //       // console.log(data)
  //     })
  // }, [])

  useEffect(() => {
    GetData()
  }, [])

  const toggle = () => {
    setShow(prev => !prev)
  }
  const GetData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    // console.log("async", res.data)
    setData(res.data)
  }
  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={toggle} className="bg-red-500">Get Data</button>
      <div>{data.length}</div>
      {!show ? <h1>Loading</h1> : data.map(item => <div key={item.id}>{item.name}</div>)}
      <hr />
    </>
  )
}

export default UseEffectReact;