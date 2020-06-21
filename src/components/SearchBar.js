import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <h1>Displaying forecast for: {props.city}</h1>
      <input
        onChange={props.handleChange}
        type="text"
        placeholder="Input city name"
        value={props.value}
      />
      <button className="button" onClick={props.handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
