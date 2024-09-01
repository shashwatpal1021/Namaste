import React from 'react'

const Input = ({ type, setValue, placeholder, children }) => {
  return (
    <>
      {children}:
      <input type={type} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} className='p-1 text-black' />
    </>
  )
}

export default Input