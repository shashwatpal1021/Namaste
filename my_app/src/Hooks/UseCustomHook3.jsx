import { useState } from "react";

function useForm(initalValue) {
  const [values, setValues] = useState(initalValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }


  const resetForm = () => setValues(initalValue);

  return [values, handleChange, resetForm]
}

function UseCustomHook3() {
  const [values, handleChange, resetForm] = useForm({
    username: "",
    email: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={values.username} name="username" onChange={handleChange} />
        <input value={values.email} name="email" onChange={handleChange} />
        <button type="submit">Submit</button>
        <button onClick={resetForm} type="submit">Reset</button>
      </form>
    </>
  )
}

export default UseCustomHook3;