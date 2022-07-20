import React, { useContext } from 'react'
import { Navbar as Nav } from 'react-bootstrap'
import Logo_cafe from './Logo_cafe'
import '../css/Navbar.css'
import Generate_Ran from './Generate_Ran'

function Navbar() {

  return (

    <>
      <Nav className='Navv'>
      <Logo_cafe className='Round'/>
      <Generate_Ran/>
      </Nav>
    
    </>


  )
}
export default Navbar