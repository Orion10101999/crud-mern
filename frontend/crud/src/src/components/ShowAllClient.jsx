import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const ShowAllClient = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/client/showall')
      const json = await res.json()
      setData(json)
    }
    fetchData()
  },[])
  
  return (
    <div className='p-3 max-2-lg mc-auto mt-5'>
      <h1 className='py-3 font-bold text-blue-500'>Clients</h1>
        <table className='border-2 border-blue-500'> 
            <thead className='bg-slate-300 py-2'>
                <tr >
                
                    <th className='py-1 mx-3 border border-gray-500 font-semibold'>Name</th>
                    <th className='py-1 mx-3 border border-gray-500 font-semibold'>Last Name</th>
                    <th className='py-1 mx-3 border border-gray-500 font-semibold'>Email</th>
                    <th className='py-1 mx-3 border border-gray-500 font-semibold' >Mobile No.</th>
                    <th className='py-1 mx-3 border border-gray-500 font-semibold'>Project</th>
                </tr>
            </thead>
            <tbody>
              {data.map((row,i) => (
                <tr key={row._id} className='border border-gray-500'>
                    <td className='py-1 mx-3 border border-gray-500'>{row.name}</td>
                    <td className='py-1 mx-3 border border-gray-500'>{row.lastname}</td>
                    <td className='py-1 mx-3 border border-gray-500'>{row.email}</td>
                    <td className='py-1 mx-3 border border-gray-500'>{row.mobile}</td>
                    <td className='py-1 mx-3 border border-gray-500'>{row.project}</td>
                    <td className='py-1 mx-1 border border-gray-500'><Link to={`/delete/${row._id}`} className='text-red-700 mx-2' >Delete</Link></td>
                    <td className='py-1 mx-1 border border-gray-500'><Link to={`/edit/${row._id}`} className='text-green-700 mx-2' >Edit</Link></td>
                </tr>
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowAllClient