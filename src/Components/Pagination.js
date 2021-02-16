import ReactPaginate from 'react-paginate';

import './Pagination.css';

const Pagination = ({pageClick,pageCount}) => {
  return (  
    
    <div className={"pagination"}>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={pageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"disable"}
        activeClassName={"active"}
      />
    </div>
  );
}
 
export default Pagination;