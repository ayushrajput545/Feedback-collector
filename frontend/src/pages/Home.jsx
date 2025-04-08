import React from 'react'
import HomeNavBar from '../components/HomeNavBar'
import FeedBackForm from '../components/FeedBackForm'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col gap-20'>
          
        <HomeNavBar/>

        <FeedBackForm/>


    </div>
  )
}

export default Home