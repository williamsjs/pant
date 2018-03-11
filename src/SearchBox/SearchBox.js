import React, { Component } from 'react';
import './SearchBox.css';

const SearchBox = (props) => {
  return (
    <div className="search-box-container">
      <input type="search" onChange={input => props.onChange(input.target.value)}/>
    </div>
  );
}

export default SearchBox;