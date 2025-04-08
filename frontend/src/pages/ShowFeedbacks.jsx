import React from 'react'
import AdminNavBar from '../components/AdminNavBar'
import FeedBackCard from '../components/FeedBackCard'
import toast from 'react-hot-toast'
import { useState , useEffect } from 'react'
import axios from 'axios'

const ShowFeedbacks = () => {


       const[data, setData] = useState()
    
    
      async function getFeedbacks(){
    
            const toastid = toast.loading("Loading...")
    
            try{
    
                const response = await axios.get('https://feedback-collector-4s6x.onrender.com/api/v1/feedbacks')
                // console.log(response)
                setData(response.data.feedbacks)
    
            }
            catch(err){
                console.log("ERROR IN FETCHING FEEDBACKS..." , err)
                toast.error("Failed to fetch feedbacks")
            }
    
            toast.dismiss(toastid)
        }
    
        useEffect(()=>{
            getFeedbacks()
        },[])


  return (
    <div className='w-11/12 mx-auto flex flex-col gap-20'>

        <AdminNavBar data={data}/>

        <FeedBackCard getFeedbacks={getFeedbacks} data={data}/>


    </div>
  )
}

export default ShowFeedbacks