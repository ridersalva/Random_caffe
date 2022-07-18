import React,{children} from 'react';
import '../css/White_paper.css';
import { Container} from 'react-bootstrap';
import Text from './Text';

function White_paper() {
  return (
    <div className='paper'>
      <Container fluid="md">
        <Text/>
      </Container>
    </div>
  )
}
export default White_paper;