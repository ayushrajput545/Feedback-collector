import React, { useState } from 'react'
import AdminModal from './AdminModal'

const HomeNavBar = () => {
   
    const[adminModal , setAdminModal] = useState(null)

    function handleClick(){
        setAdminModal(true)
    }


  return (
    <div className='mt-5 flex justify-between'>
        <h1 className='font-bold text-3xl '>FEEDBACK <span className='text-[#27AE60]'>COLLECTOR</span></h1>
        <button onClick={handleClick} className=' border p-3 rounded-lg  font-semibold hover:scale-95 transition-all duration-200 border-[#27AE60] hover:border-[#1e8348]'>View Feedbacks</button>

        {
            adminModal && (
                <AdminModal setAdminModal={setAdminModal}/>
            )
        }
    </div>

  )
}

export default HomeNavBar