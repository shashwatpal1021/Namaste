import React from 'react'

const Button = ({ onClick, children }) => {
  return (
    <div className='bg-yellow-500 mt-2 rounded-2xl '>
      <button type="button" className='p-2 w-full' onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button