import React from 'react';
import '../css/White_paper.css';
import { Container} from 'react-bootstrap';
import Text from './Text';
//import Paginacion from './Pagination';

function WhitePaper() {
  return (
    <div className='paper'>
      <Container fluid="md">
        <Text/>
      </Container>
    </div>
  )
}
export default WhitePaper;