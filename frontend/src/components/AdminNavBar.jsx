import React from 'react'

const AdminNavBar = ({data}) => {
  return (
    <div className='mt-5 flex justify-between'>
       <h1 className='font-bold text-3xl '>ADMIN <span className='text-[#27AE60]'>VIEW</span></h1> 
       <h1 className='font-semibold text-2xl '>Total FeedBacks: {data?.length}</h1>
    </div>
  )
}

export default AdminNavBar