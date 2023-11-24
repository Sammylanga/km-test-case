import React, {useEffect, useCallback} from 'react';
import Calender from './calender';
import { IoIosArrowForward } from "react-icons/io";
// import './datefilter.css'

const Filter = ({showFilter,setShowFilter,startDate, setStartDate, endDate, setEndDate ,initialData ,setTableData}) => {

  const handleStartDate = useCallback((date) => {
    setStartDate(date);
  },[]);

  const handleEndDate = useCallback((date) => {
    setEndDate(date);
  },[]);

  useEffect(() => {
   const startDateObj = new Date(startDate);
   const endDateObj = new Date(endDate);

   const filteredResults = initialData.filter((item) => {
     const itemStartDate = new Date(item.startDate);
     const itemEndDate = new Date(item.endDate);

     return itemStartDate >= startDateObj && itemEndDate <= endDateObj;
   });
   setTableData(filteredResults);
  },[startDate, endDate]);
  

  return (
    <div className='date-filter'>
        <div className='date-filter-results'>
          <div className='filter-results' onClick={() => setShowFilter(!showFilter)} >
             <IoIosArrowForward className='io-arrow-forward' />
            </div>
          <p>Filter results</p>
        </div>
          <p className='jss111'>Filter by Period</p>
      <Calender 
        className='calender'
        startDate={startDate}
        endDate={endDate}
        setEndDate={handleEndDate}
        setStartDate={handleStartDate} />
    </div>
  );
};

export default Filter;
