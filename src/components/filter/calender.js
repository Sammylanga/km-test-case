import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './barfilter.css'

const Calender = ({startDate, endDate, setEndDate ,setStartDate}) => {

  return (
    <div className='calender'>
      <DatePicker
        className='MuiFormControl-root'
        maxDate={endDate}
        selected={startDate}
        onChange={setStartDate}
        placeholderText="Start"
      />

      <DatePicker
        className='MuiFormControl-root'
        minDate={startDate}
        selected={endDate}
        onChange={setEndDate}
        placeholderText="End"
      /> 
    </div>
  );
};

export default Calender;
