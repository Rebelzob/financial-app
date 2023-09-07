import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/stocks/stocksSlice';
import './searchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    dispatch(setSearchQuery(searchTerm));
  };

  return (
    <div className="input-group mb-3 input-container">
      <input
        type="text"
        className="form-control"
        placeholder="Search by company name"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
