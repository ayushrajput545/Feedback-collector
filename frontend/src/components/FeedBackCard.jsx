import React from 'react'
import { MdDeleteForever } from "react-icons/md";

const FeedBackCard = () => {
  return (
    <div className=''>

        <div className='md:w-6/12 w-full  bg-[#2A2B35] flex gap-5 justify-between items-center p-4 rounded-lg mx-auto'>
          
          <div className='flex flex-col gap-5'>
            <div>
              <h1 className='font-semibold text-xl'>Ayush Rajput</h1>
              <h2 className='text-slate-300'>rajputayush694@gmail.caom</h2>
              <h2 className='text-slate-300'>12 Feb 2023</h2>

            </div>
             
            <h3 className='text-slate-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
          </div>
            
            <div className='bg-red-400 text-3xl rounded-full p-2 cursor-pointer'>
               <MdDeleteForever />
            </div>
        </div>
    </div>
  )
}

export default FeedBackCard