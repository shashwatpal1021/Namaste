import React from 'react'
import { PrimaryButton } from '../component/Buttons'

const navList = [
  {
    value: "Investor Relations",
    onClick: () => console.log("clicked")
  },
  {
    value: "Add Restaurant",
    onClick: () => console.log("clicked")
  },
  {
    value: "Log in",
    onClick: () => console.log("clicked")
  },
  {
    value: "Sign up",
    onClick: () => console.log("clicked")
  }
]

const Header = () => {
  const handleClick = () => {
    console.log('Button was clicked!');
  };
  return (
    <>
      <div className='flex justify-between item-center p-4 w-full text-white text-1xl rounded-md'>
        <PrimaryButton onClick={handleClick} style={"text-2xl"}>Get App</PrimaryButton>
        <div className='flex'>
          <div className='flex gap-2 '>
            {navList.map((item, index) => (
              <PrimaryButton key={index} onClick={item.onClick}>{ item.value}</PrimaryButton>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header