import React, { useState } from 'react';

const SearchBar = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState("Dubai")

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleClick = () => {
    setCity(name)
  }
  return (
    <div className="searchBar">
      <h1>Showing forecast for {city}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Input city name"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default SearchBar