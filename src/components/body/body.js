import React, { useState , useCallback, useEffect} from 'react';
import Table from './table';
import Header from '../header/header';
import Filter from '../filter/datefilter';
import BarFilter from '../filter/barfilter';
import PagePagination from '../filter/pagepagination';
import './table.css'

const Body = ({initialData}) => {

  const [tableData, setTableData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex,setEndIndex] = useState(10);
  const [showFilter,setShowFilter] = useState(false)

  const handleSearch = useCallback((search) => {
    setSearchTerm(search.target.value);
  },[]);

  const handleTableData = useCallback((data) => {
    setTableData(data)
  },[]);

  useEffect(() => {
    if (searchTerm.length === 0) {
      setTableData(tableData) ;
    }
    else {
      const filteredData = tableData.filter(
        (row) =>
          row.name.toLowerCase().includes(searchTerm.toString().toLowerCase())
      );
      setStartIndex(0);
      setEndIndex(10);
      setTableData(filteredData);
    }
  },[searchTerm]);

  return (
    <div className='body'>
      <div className={showFilter? 'header-pagination active': 'header-pagination'}>
      <Header inputValue={searchTerm} setSearchTerm={handleSearch} />
      <div className='MuiPaper-elevation1'>
      <BarFilter
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        startDate={startDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setStartDate={setStartDate} 
        initialData={initialData} 
        setTableData={handleTableData}/>
      <Table data={tableData} startIndex={startIndex} endIndex={endIndex} />
      
      <PagePagination 
        initialData={tableData}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        endIndex={endIndex}
        setEndIndex={setEndIndex}
        setTableData={handleTableData} />
        {/* <TableWithPagination data={initialData} setTableData={handleTableData} itemsPerPage={3} /> */}
        </div>
      </div>
      <div className={showFilter? 'date-filter-parent active': 'date-filter-parent'}>
          <Filter 
          showFilter={showFilter}
          setShowFilter={setShowFilter}
          startDate={startDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
          initialData={tableData} 
          setTableData={handleTableData}/>

      </div>
    </div>
  );
};

export default Body;
