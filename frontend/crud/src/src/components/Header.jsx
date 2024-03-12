import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='text-bold text-white p-3 bg-slate-500 flex mx-auto gap-4'>
        <Link to={'/'}>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-600'>Clients</span>
            <span className='text-slate-800'>Panel</span>
          </h1>
        </Link>
        
        <Link to={'/showallclient'}>
          <p> Clients</p>
        </Link>
        <Link to={'/create'}>
        Create Client 
        </Link>
        </div>
  )
}

export default Header