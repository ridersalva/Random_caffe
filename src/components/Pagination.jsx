
import { PageItem, Pagination  } from 'react-bootstrap';

function Paginacion() {
  return (
    <Pagination>
   
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Item>{20}</Pagination.Item>
      
    </Pagination>
  );
}

export default Paginacion;