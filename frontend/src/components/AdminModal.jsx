import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AdminModal = ({setAdminModal}) => {


    const[formData , setFormData] = useState({
        adminID :"",
        password:""
    })

    const navigate = useNavigate()


    function handleChange(e){

        const{name , value} = e.target

        setFormData((prev)=>({
            ...prev,
            [name]:value

        }))
    }

    function handleViewFeedbacks(e){
        e.preventDefault();

        if(formData.adminID !== "100" || formData.password != "ayy545"){
            toast.error("Please Enter Valid Credetials")
            return;
        }
        
        navigate('/feedbacks')
    }



  return (


 <div  className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
        <div  className="w-11/12 flex flex-col gap-5 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">

          <p onClick={()=>setAdminModal(false)} className='text-end cursor-pointer'>X</p>
          <div className='text-center space-y-3 font-semibold'>
             <h2>AdminID - 100</h2>
             <h2>Password- ayy545</h2>
          </div>
          <form onSubmit={handleViewFeedbacks} className='space-y-3 flex flex-col'>
            <input value={formData.adminID}  onChange={handleChange} name='adminID' placeholder='Enter AdminID' type="text" className='w-full p-3 rounded-full bg-[#2A2B35] outline-none' />
            <input value={formData.password} onChange={handleChange}  name='password' placeholder='Enter Password' type="password" className='w-full p-3 rounded-full bg-[#2A2B35] outline-none' />
            <button type='submit'  className=' border p-2 mx-auto rounded-lg  font-semibold hover:scale-95 transition-all duration-200 border-[#27AE60] hover:border-[#1e8348]'>View FeedBacks</button>
          </form>
             
        </div>

      
</div>
  )
}

export default AdminModal