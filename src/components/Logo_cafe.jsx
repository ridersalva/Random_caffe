import React from 'react'
import { Image } from 'react-bootstrap'
import '../css/Logo_cafe.css'
import cafe_logo from '../img/reshot-icon-coffee-break-UR59EH28FN.svg'

 function Logo_cafe() {
  return (
    <div className='logo'>
        <Image src={cafe_logo} alt='cafe logo' />
    </div>
  )
}
export default Logo_cafe