import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditClient = () => {
  const [name , setName] = useState('')
  const [lastname , setLastname] = useState('')
  const [email , setEmail] = useState('')
  const [mobile , setMobile] = useState('')
  const [project , setProject] = useState('')
  const [error,setError] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()

  
  useEffect(() => {
    
    axios.get(`/api/client/getone/${id}`)
    .then((response) => {
       setName(response.data.name)
       setLastname(response.data.lastname)
       setEmail(response.data.email)
       setMobile(response.data.mobile)
       setProject(response.data.project)
      }).catch((error) => {
        setError(true)
        console.log(error);
      });
  }, [])

  const submithandler = async (e) => {
    e.preventDefault()
    const data = {
      name,
      lastname,
      email,
      mobile,
      project
    }
    try {
      axios.put(`/api/client/edit/${id}`, data)
      .then((res)=>{
        console.log(res);
      })
      navigate(`/showallclient`)
    } catch (error) {
      setError(error)
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-bold mt-3 text-lg'>Update Client Details</h1>
        <form onSubmit={submithandler} className='flex flex-col gap-1'>
            <label>Name</label>
            <input 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className='p-2 bg-slate-200 rounded-sm'
            
            id='name' 
            placeholder='Name'/>
            <label>Last Name</label>
            <input 
            className='p-2 bg-slate-200 rounded-sm'
            value={lastname}
            onChange={(e)=>e.target.value}
            id='lastname' 
            placeholder='Last Name'/>
            <label>Email</label>
            <input  
            className='p-2 bg-slate-200 rounded-sm'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id='email' 
            placeholder='Email'/>
            <label>Mobile No.</label>
            <input 
            value={mobile}
            className='p-2 bg-slate-200 rounded-sm'
            onChange={(e)=>setMobile(e.target.value)}
            id='mobile' 
            placeholder='Mobile No.'/>
            <label>Project</label>
            <input 
            value={project}
            className='p-2 bg-slate-200 rounded-sm'
            onChange={(e)=>setProject(e.target.value)}
            id='project' 
            placeholder='project'/>
            <button
            
            className='p-3 bg-blue-600 text-white font-bold rounded-lg mt-4'
            >Edit Client Details</button>
        </form>
        <p className='mt-2 text-bold text-red-800'>{ error && 'Something Went Wrong'}</p>
    </div>
  )
}

export default EditClient