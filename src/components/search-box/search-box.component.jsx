import React from 'react';
import './search-box.styles.css';

// A functional component, unlike a class component, is just a component that gets some props and returns some html
export const SearchBox = props => (
    <input
    className='search' 
    type='search' 
    placeholder = 'search monsters'
    onChange={props.onSearchChange}
  />
);