import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import LogoCafe from './LogoCafe'
import '../css/Navbar.css'


function Navbara() {

  return (

    <>
      <Navbar className='Navv'>
        <Link to="#"><LogoCafe /></Link>
        <Link to="#">Home</Link>
        <Link to="#">Temporada</Link>
        <Link to="#">Cafes</Link>
        <Link to="#">Contact</Link>

      </Navbar>

    </>


  )
}
export default Navbara