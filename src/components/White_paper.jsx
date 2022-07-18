import React,{children} from 'react';
import '../css/White_paper.css';
import { Container} from 'react-bootstrap';

function White_paper(props) {
  return (
    <div className='paper'>
      <Container fluid="md">
        {props.children}
      </Container>
    </div>
  )
}
export default White_paper;