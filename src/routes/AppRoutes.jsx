import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'

export default function AppRoutes() {
  return (
   <Routes> 
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Season3" element={<h1>404</h1>}/>
   </Routes>
  )
}
