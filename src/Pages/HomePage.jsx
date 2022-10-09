import React from 'react'
import { Container,Row,Button,Image} from 'react-bootstrap'
import WhitePaper from '../components/WhitePaper'
import '../css/Home.css'




export default function HomePage() {
  return (
<>
   <Container>
    <Row>
        <WhitePaper/>
    </Row>
   </Container>
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
