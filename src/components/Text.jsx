import React,{useState} from 'react'
import cafes from '../data/cafes.json'
import { Container,Row } from 'react-bootstrap'
import '../css/Text.css'


export default function Text() {
    const [cafess,setCafess] = useState(cafes);
    

  return (
    <>
        <Container className='text'>
           <Row className='textS'>
             
             <h5> Temporada 4 </h5> 
          
            </Row>
            <Row className='textH'>
        
                  {cafess.S4.slice(0,1).map((S4)=>( 
                 <>  {S4.number}  </> 
               ))} 
            
            </Row>
            
            <Row className='textB'>
            {cafess.S4.slice(0,1).map((S4)=>( 
             <>  {S4.cafe}  </> 
                 ))} 
            </Row>
           
          
        </Container>

    </>
  )
}
