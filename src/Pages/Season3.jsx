
import React,{useState} from 'react'
import cafes from '../data/cafes.json'
import { Container,Row } from 'react-bootstrap'
import '../css/Text.css'

export default function Season3() {

  const [cafess,setCafess] = useState(cafes);
  return (
    <>
    <Container className='text'>
       <Row className='textS'>
         
         <h5> Temporada 3 </h5> 
      
        </Row>
        <Row className='textH'>
    
              {cafess.S3.slice(0,1).map((S3)=>( 
             <>  {S3.number}  </> 
           ))} 
        
        </Row>
        
        <Row className='textB'>
        {cafess.S3.slice(0,1).map((S3)=>( 
         <>  {S3.cafe}  </> 
             ))} 
        </Row>
       
    </Container>

</>
  )
}
