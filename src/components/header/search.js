import React from 'react';
import { IoIosSearch } from "react-icons/io";
import './header.css'


const Search = ({ inputValue,setSearchTerm}) => {

    return (
    <div className='jss76'>
      <div className='jss77'>
        <IoIosSearch />
        </div>
      <input
        type="text"
        className='MuiInputBase-root'
        placeholder="Search"
        value={inputValue}
        onChange={setSearchTerm}
      />
    </div>
    );
};

export default Search; 