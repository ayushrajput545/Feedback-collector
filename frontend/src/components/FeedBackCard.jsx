import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";
import { formatDistanceToNow } from 'date-fns';

const FeedBackCard = ({data , getFeedbacks}) => {



    async function handleDelete(id){
        const toastid = toast.loading("Loading...")
        try{
            
            console.log( "id is",id)
            console.log(data)
            const response = await axios.post('https://feedback-collector-4s6x.onrender.com/api/v1/deletefeedback', {id})
            // console.log(response)
            toast.success("FeedBack Deleted")
            getFeedbacks()

        }
        catch(err){
            console.log("ERROR IN DELETEING ...", err)

        }
        toast.dismiss(toastid)
    }


    if(data?.length ===0){
        return (
            <div className='text-center flex justify-center items-center  h-[500px] font-bold text-slate-400 text-2xl'>
                No FeedBacks
            </div>
        )
    }


   
  return (


    <div className='flex flex-col gap-5'>

      {
        data?.map((item,i)=>(

            <div key={i} className='md:w-6/12 w-full  bg-[#2A2B35] flex gap-5 justify-between items-center p-4 rounded-lg mx-auto'>
          
                <div className='flex flex-col gap-5'>
                    <div>
                        <h1 className='font-semibold text-xl'>{item.name}</h1>
                        <h2 className='text-slate-300'>{item.email}</h2>
                        <h2 className='text-slate-300 text-sm'>{formatDistanceToNow(new Date(item.date), { addSuffix: true })}</h2>

                    </div>
                        
                    <h3 className='text-slate-400'>{item.message}</h3>
                </div>
                
                <div onClick={()=>handleDelete(item._id)} className='bg-red-400 text-3xl rounded-full p-2 cursor-pointer'>
                    <MdDeleteForever />
                </div>
        </div>

        ))
      }
         
    </div>
  )
}

export default FeedBackCard