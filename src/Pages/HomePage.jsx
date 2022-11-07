import React from 'react'
import { Container,Row,Button,Image, Col} from 'react-bootstrap'
import WhitePaper from '../components/WhitePaper'
import '../css/Home.css'
import Home1 from '../components/Home1'
import  Newcaffe from '../img/cafe-corretto-1024x731.jpg'

export default function HomePage() {
  return (
<>
  
    <Row  className='home1'>
        <WhitePaper/>
<Col className='new1'>
  <Image src={Newcaffe} alt="new caffee"/>
        <h1> Ultimo Cafe</h1>
          <p> Listo para que lo disfrutes, si quieres leer textos previos haz click abajo </p>
          <Button> Al Cafe 4</Button>
      </Col>
    </Row>
    <Row >
      <h1> hola</h1>
    </Row>
   <hr/>
   <Container>
    <Button ><Image src="../img/9791427ade68d2557154a25f2fefb5ac.jpg" alt ="Temporada 1"/></Button>
    <Button><Image src="../img/ba960744373b071e2fb622d7e825ff6c--coffee-percolator-great-coffee.jpg" alt ="Temporada 2"/></Button>
    <Button><Image src="../img/Bienvenido-GARDA-IMPORT-min.jpg" alt ="Temporada 3"/></Button>
    <Button><Image src="../img/cafe-corretto-1024x731.jpg" alt ="Temporada 4"/></Button>
   </Container>
   </>
  )
}
