import React, { useState } from 'react'
import Input from '../utils/Input'
import Button from '../utils/Button'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const postRequest = async () => {
    const res = await axios.post(`http://localhost:3000/signup`, {
      name,
      email,
      password
    })
    navigate('/signin')
    console.log(res, "user successfully sign up")
  }
  return (
    <div className='flex flex-col item-start mt-5 text-2xl border-4 p-3 rounded-2xl '>
      <Input type={"text"} setValue={setName} placeholder='Name' >Name</Input>
      <Input setValue={setEmail}
        type="email" placeholder='Email' >Email</Input>
      <Input setValue={setPassword} type={"password"} placeholder='Password' >Password</Input>
      <Button onClick={postRequest}>Sign-Up</Button>
    </div>
  )
}

export default SignUp