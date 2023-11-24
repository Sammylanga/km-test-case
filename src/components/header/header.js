import React from 'react';
import Search from './search';
import './header.css';

const Header = ({inputValue, setSearchTerm}) => {

    return (
        <div className='header'>
        <h6>Campaings </h6>
        <Search inputValue={inputValue} setSearchTerm={setSearchTerm}/>
        </div>
    );
};

export default Header; 