import React, { useCallback, useEffect, useState } from 'react';
import { MdArrowForwardIos , MdArrowBackIos } from "react-icons/md";


const PagePagination = ({startIndex,endIndex,setStartIndex,setEndIndex,initialData, setTableData}) => {

    const [selectedOption, setSelectedOption] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const numberOfItems = initialData.length;

    const handleDropdownChange = useCallback((event) => {
    setSelectedOption(event.target.value);
    setEndIndex(event.target.value);
},[]);

const totalPages = Math.ceil(initialData.length / selectedOption);

useEffect(() => {
    const startIndex = (currentPage - 1) * selectedOption;
    const endIndex = startIndex + selectedOption;
    
    setEndIndex(parseInt(endIndex));
    setStartIndex(startIndex);
},[setTableData,endIndex,currentPage]);

const handlePageChange = useCallback((newPage) => {
    if ( currentPage !== 1 || currentPage !== totalPages){
        setCurrentPage(newPage);
    }
},[]);

return (
    <div className='page-pagination'>
        <div className='pagination'>
        <label htmlFor="dropdown">Rows per page: </label>
        <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
           <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
        </select>
        <div className='MuiTablePagination-selectRoot'>
            {startIndex+1}-{endIndex>numberOfItems ? numberOfItems : endIndex} of {numberOfItems} 
        </div>
            {/* <span>{`items ${startIndex+1} of ${endIndex>numberOfItems ? numberOfItems : endIndex} `}</span> */}
        <div>
            <button className='pagination-button'  onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                <MdArrowBackIos className='pagination-arrow' style={{color:currentPage === 1 ? 'lightgrey': 'grey'}}/>
            </button>
            <button className='pagination-button' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                <MdArrowForwardIos className='pagination-arrow' style={{color:currentPage === totalPages ? 'lightgrey': 'grey'}}/>
            </button>
        </div>      
    </div>
    </div>
)
}

export default PagePagination;