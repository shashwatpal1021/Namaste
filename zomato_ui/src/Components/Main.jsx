import React from 'react'
import { PrimaryButton, DefaultButton } from '../component/Buttons'
// import DropDown from '../component/DropDown'

const Main = () => {
  return (
    <>
      {/* //search
      // restaurant countainer-- restaurant card */}
      <div className='flex flex-col gap-4 justify-center h-1/2 p-10'>
        <div className='flex justify-center text-8xl font-extrabold text-white'>
          Zomato
        </div>
        <div className='flex text-white justify-center text-3xl'>
          Discover the best food & drinks in Pune
        </div>
        <div className='flex justify-center pt-4 w-full'>
          {/* <DropDown /> */}
          <input type="text" className='p-2 bg-gray-100 w-full outline-none rounded-md' placeholder="Search for restaurant, cuisine or a dish" />
          <DefaultButton onClick={() => console.log('search')} style={"w-1/3"}>Search</DefaultButton>
        </div>
      </div>
    </>
  )
}

export default Main