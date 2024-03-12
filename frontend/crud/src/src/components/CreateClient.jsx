import React, { useState } from 'react'

const CreateClient = () => {
    const [name, setName] = useState('')
    const [formData , setFormData] = useState({})
    const [error,setError] = useState(false)
    // handle input change
    const changeHandler = (e) =>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }
    const submithandler = async (e) =>{
        e.preventDefault()
        try {
            const res = await fetch('/api/client/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                setError(true)
                return;
            }
            setName(data)
        } catch (error) {
            setError(true)
            console.log(error);
        }

    }
  return (
    <div className='p-3 max-w-lg mx-auto mt-5'>
        <h1 className='text-bold mt-3 text-lg'>Create Client</h1>
        <form onSubmit={submithandler} className='flex flex-col gap-1'>
            <label>Name</label>
            <input 
            className='p-2 bg-slate-200 rounded-sm'
            onChange={changeHandler}
            id='name' 
            placeholder='Name'/>
            <label>Last Name</label>
            <input 
            className='p-2 bg-slate-200 rounded-sm'
            onChange={changeHandler}
            id='lastname' 
            placeholder='Last Name'/>
            <label>Email</label>
            <input  
            className='p-2 bg-slate-200 rounded-sm'
            onChange={changeHandler}
            id='email' 
            placeholder='Email'/>
            <label>Mobile No.</label>
            <input 
            className='p-2 bg-slate-200 rounded-sm'
            onChange={changeHandler}
            id='mobile' 
            placeholder='Mobile No.'/>
            <label>Project</label>
            <input 
            className='p-2 bg-slate-200 rounded-sm'
            onChange={changeHandler}
            id='project' 
            placeholder='projects'/>
            <button
            className='p-3 bg-blue-600 text-white font-bold rounded-lg mt-4'
            >Create Client</button>
        </form>
        <p className='mt-2 text-bold text-red-800'>{ error ? 'Something Went Wrong' : name}</p>
    </div>
  )
}

export default CreateClient