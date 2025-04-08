import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const FeedBackForm = () => {

    const [formData , setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    function changeHandler(e){
        const{name , value} = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const isValidEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
      };

   async function submitHandler(e){
        e.preventDefault();

        const toastid = toast.loading("Loading...")
     try{

        if(!formData.name || !formData.email || !formData.message){
            toast.error('All fields are required')
            toast.dismiss(toastid)
            return
        }
        else if (!isValidEmail(formData.email)) {
            toast.error("Invalid email address ");
            toast.dismiss(toastid);
            return;
        }

        const response = await axios.post('https://feedback-collector-4s6x.onrender.com/api/v1/submit-feedback' , formData)
        console.log(response)
        toast.success("Thank You for Feedback !")
        setFormData({
            name:"",
            email:"",
            message:""
        })
     }
     catch(err){
        console.log("ERROR IN SUBMITTING FEEDBACK: " , err)
     }
     toast.dismiss(toastid)
    }
  return (
    <div className='flex flex-col gap-12'>

        <h1 className='text-center text-2xl font-semibold'>Give Your FeedBack Here !</h1>
        <form onSubmit={submitHandler} className='mx-auto space-y-10 w-full md:w-6/12'>
            <input onChange={changeHandler} value={formData.name} name='name' placeholder='YOUR FULL NAME' type="text" className='w-full p-4 rounded-full bg-[#2A2B35] outline-none' />
            <input onChange={changeHandler} value={formData.email} name='email' placeholder='YOUR EMAIL' type="text" className='w-full p-4 rounded-full bg-[#2A2B35] outline-none' />
            <textarea onChange={changeHandler} value={formData.message} name='message' placeholder='Message Here...' className='w-full h-60 resize-none p-4 rounded-[30px] bg-[#2A2B35] outline-none ' />
            <button type='submit' className=' border p-3 rounded-lg  font-semibold hover:scale-95 transition-all duration-200 border-[#27AE60] hover:border-[#1e8348]'>Submit Message</button>

        </form>

    </div>
  )
}

export default FeedBackForm