import React from 'react'
import {Link} from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import LogoCafe from './LogoCafe'
import '../css/Navbar.css'


function Navbara() {

  return (

    <>
      <Navbar className='Navv'>

      <Link to="#" >Home</Link>
        <Link to="#">Temporada</Link>
      <Link to="#" className='NavL' ><LogoCafe/></Link>
       <Link to="#">Definiciones</Link>
        <Link to="#">Contact</Link>
     
      </Navbar>
    
    </>


  )
}
export default Navbara