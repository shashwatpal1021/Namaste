import React from 'react'
import { DefaultButton, PrimaryButton } from '../component/Buttons'

const cardList = [
  {
    name: "The Coldest Sunset",
    image: "https://media.istockphoto.com/id/1354066820/photo/gavieiro-or-el-silencio-beach-cudillero-asturias-spain.jpg?s=612x612&w=0&k=20&c=X6Q0YT2ay8brfNjAeaK4nUqzyeR9yALH4TCIndsqtOY=",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    name: "The Coldest Sunset",
    image: "https://media.istockphoto.com/id/1354066820/photo/gavieiro-or-el-silencio-beach-cudillero-asturias-spain.jpg?s=612x612&w=0&k=20&c=X6Q0YT2ay8brfNjAeaK4nUqzyeR9yALH4TCIndsqtOY=",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }, {
    name: "The Coldest Sunset",
    image: "https://media.istockphoto.com/id/1354066820/photo/gavieiro-or-el-silencio-beach-cudillero-asturias-spain.jpg?s=612x612&w=0&k=20&c=X6Q0YT2ay8brfNjAeaK4nUqzyeR9yALH4TCIndsqtOY=",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
]

const Restaurent = () => {

  return (


    <div className="flex  flex-wrap shadow-lg pt-5">
      {cardList.map((card, index) => (
        <div className='w-1/3 p-1' key={index}>
          <img src={card.image}
            className='outline-none rounded-lg w-full'
            alt="" />
          <div className="px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">{card.name}</div>
            <p className="text-gray-700 text-gray-500 text-base">
              {card.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      ))}
      <div className='flex p-4 w-full text-white justify-between rounded-md mx-auto'>
        <div className='flex w-1/2 justify-center items-center'>
          <img src="https://i.pinimg.com/736x/46/8a/0c/468a0c2c8d3d37966ee2181c9aa216ed.jpg" alt="" className='w-1/2 h-1/2 rounded-lg' />
        </div>

        <div className='flex flex-col w-1/2 justify-center'>
          <div className='flex text-2xl pt-4 pb-2 font-extrabold'>Get the Zomato app
          </div>
          <div className='flex text-1xl'>
            We will send you a link, open it on your phone to download the app
          </div>
          <div className='flex pt-4 w-full'>
            <input type="radio" id="email" name="fav_language" value="EMAIL" />
            <label htmlFor="email" className='p-2'>EMAIL</label>
            <input type="radio" id="phone" name="fav_language" value="PHONE" />
            <label htmlFor="phone" className='p-2'>PHONE</label>
          </div>
          <div className='flex pt-4 w-full'>
            <input type="text" className='bg-gray-100 outline-none text-black rounded-md flex-grow p-2' />
            <PrimaryButton style={"bg-blue-500 text-white"} onClick={() => console.log('search')}>Share App Link</PrimaryButton>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Restaurent