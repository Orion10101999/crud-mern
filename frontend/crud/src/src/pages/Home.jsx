import React from 'react'
import CreateClient from '../components/CreateClient'
import ShowAllClient from '../components/ShowAllClient'

const Home = () => {
  return (
    <div className='flex'>
      <ShowAllClient/>
      <CreateClient/>
    </div>
  )
}

export default Home