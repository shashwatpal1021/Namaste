import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetData = async () => {
    try {
      const res = await axios.get(url)
      setData(res.data)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetData()
  }, [url])

  return { data, loading, error }

}

const UseCustomHook1 = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')


  if (loading) return (
    <>
      <h1>Loading</h1>
    </>
  )
  if (error) return (
    <>
      <h1>Error</h1>
    </>
  )

  return (
    <>
      <h1>UseCustomHook1</h1>
      {data.map(item => <div key={item.id}>{item.name}</div>)}
    </>
  )
}
export default UseCustomHook1;