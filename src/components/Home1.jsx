import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import WhitePaper from './WhitePaper'

export default function Home1() {
  return (

    <Container ClassName='new1'>
      <Row md={6}>
        <Col >
          <h1> columan</h1>
        </Col>
        <Col md={4}>
          <h1>hola Temporada</h1>
        </Col>
        <Col md={4}>
          <WhitePaper />
        </Col>
      </Row>



    </Container>
  )
}
