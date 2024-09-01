import React, { useState } from 'react'
import Input from '../utils/Input'
import Button from '../utils/Button'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const naviagate = useNavigate()


  const postRequest = async () => {
    const res = await axios.post(`http://localhost:3000/signin`, {
      email,
      password
    })
    console.log(res, "user successfully signed in")
    naviagate('/')
  }
  return (
    <>
      <div className='flex flex-col item-start mt-5 text-2xl border-4 p-3 rounded-2xl  '>
        <Input type="email" placeholder='Email' setValue={setEmail} >Email</Input>
        <Input type={"password"} placeholder='Password' setValue={setPassword} >Password</Input>
        <Button onClick={postRequest}>Sign-In</Button>
      </div>
    </>
  )
}

export default SignIn