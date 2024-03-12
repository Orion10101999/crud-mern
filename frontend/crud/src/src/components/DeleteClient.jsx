import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios  from 'axios';
const DeleteClient = () => {
  const {id}= useParams() 
  const navigate = useNavigate()
  const handleDeleteClient = ()=>{
    axios
    .delete(`/api/client/delete/${id}`)
    .then(() => {
      navigate('/showallclient')
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Delete Client Details</h1>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this client details?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteClient}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteClient