import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './src/pages/Home'
import Header from './src/components/Header'
import ShowAllClient from './src/components/ShowAllClient'
import DeleteClient from './src/components/DeleteClient'
import EditClient from './src/components/EditClient'
import CreateClient from './src/components/CreateClient'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/showallclient' element={<ShowAllClient/>}/>
        <Route path='/create' element={<CreateClient/>}/>
        <Route path='/edit/:id' element={<EditClient/>}/>
        <Route path='/delete/:id' element={<DeleteClient/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App