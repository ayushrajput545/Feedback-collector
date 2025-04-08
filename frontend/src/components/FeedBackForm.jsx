import React from 'react'

const FeedBackForm = () => {
  return (
    <div className='flex flex-col gap-12'>

        <h1 className='text-center text-2xl font-semibold'>Give Your FeedBack Here !</h1>
        <form action="" className='mx-auto space-y-10 w-full md:w-6/12'>
            <input placeholder='YOUR FULL NAME' type="text" className='w-full p-4 rounded-full bg-[#2A2B35] outline-none' />
            <input placeholder='YOUR EMAIL' type="text" className='w-full p-4 rounded-full bg-[#2A2B35] outline-none' />
            <textarea placeholder='Message Here...' className='w-full h-60 resize-none p-4 rounded-[30px] bg-[#2A2B35] outline-none ' />
            <button className=' border p-3 rounded-lg  font-semibold hover:scale-95 transition-all duration-200 border-[#27AE60] hover:border-[#1e8348]'>Submit Message</button>

        </form>

    </div>
  )
}

export default FeedBackForm