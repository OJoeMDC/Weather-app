import React from 'react';
import './SearchBar.css';

function SearchBar({
    inputValue,
    setInputValue,
    setSelectedCity,
}) {
    return (
        <div className="searchBar">
            <input
                type="text"
                placeholder="Enter city"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={() => setSelectedCity(inputValue)}>
                Search
            </button>
        </div>
    )
}

export default SearchBar