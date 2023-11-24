import React, { useCallback, useEffect, useState } from 'react';
import { IoFilter } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { MdOutlineCancel } from "react-icons/md";
import './barfilter.css';

const BarFilter = ({showFilter,setShowFilter,startDate, setStartDate, endDate, setEndDate ,initialData ,setTableData}) => {

    const [activeStartDate, setActiveStartDate] = useState(true);
    const [activeEndDate, setActiveEndDate] = useState(true);
    
    const itemStartDate = new Date(startDate);
    const itemEndDate = new Date(endDate);

    useEffect(() => {
        const startDateObj = activeStartDate ? new Date(startDate) : null ;
        const endDateObj = activeEndDate? new Date(endDate) : null;
        const filteredStartResults = initialData.filter((item) => {
          const itemStartDate = new Date(item.startDate) ;
          return activeStartDate && startDate!= null? itemStartDate >= startDateObj : true;
        });

        const filteredEndResults = filteredStartResults.filter((item) => {
            const itemEndDate = new Date(item.endDate);
            return activeEndDate && endDate!= null? itemEndDate <= endDateObj : true;
        });
        setTableData(filteredEndResults);

    },[startDate,endDate,activeStartDate,activeEndDate]);

    const handleStartDate = useCallback(() => {
        setActiveStartDate(false);
        setStartDate(null);
      },[]);

      const handleEndDate = useCallback(() => {
        setActiveEndDate(false);
        setEndDate(null);
      },[]);

    return (
        <div className='bar-filter'>
            <div >
              <div className='io-filter' onClick={() => setShowFilter(!showFilter)}><IoFilter />
                </div>
            </div>
            <div className='active-filter'>
                { startDate != null ? <div>
                    <button className='active-button' onClick={() => setActiveStartDate(!activeStartDate)}>{activeStartDate? <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>:''} Active since {itemStartDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} <MdOutlineCancel className='md-outline-cancel' onClick={ () => handleStartDate()} />
                    
</button>
                </div> : ("")} 
                { endDate != null ? <div>
                    <button className='active-button' onClick={() => setActiveEndDate(!activeEndDate)}>{activeEndDate? <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>:''}Active until {itemEndDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} <MdOutlineCancel className='md-outline-cancel' onClick={ () => handleEndDate()} />
</button>
                </div> : ("")}
            </div>
            <div className='sl-options-vertical'>
                <SlOptionsVertical />
            </div>
        </div>
    )
}

export default BarFilter;