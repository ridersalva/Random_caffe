import React from 'react'
import { Navbar as Nav } from 'react-bootstrap'
import LogoCafe from './LogoCafe'
import '../css/Navbar.css'
import GenerateRan from './GenerateRan'

function Navbar() {

  return (

    <>
      <Nav className='Navv'>
      <LogoCafe className='Round'/>
      <GenerateRan/>
      </Nav>
    
    </>


  )
}
export default Navbar