import React from 'react'
import AdminNavBar from '../components/AdminNavBar'
import FeedBackCard from '../components/FeedBackCard'

const ShowFeedbacks = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col gap-20'>

        <AdminNavBar/>

        <FeedBackCard/>


    </div>
  )
}

export default ShowFeedbacks