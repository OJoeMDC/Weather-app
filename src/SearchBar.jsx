import React from 'react';
import './SearchBar.css';

function SearchBar({
    inputValue,
    setInputValue,
    setSelectedCity,
}) {
    return (
        <form className="searchBar" onSubmit={(e) => 
        { e.preventDefault(); setSelectedCity(inputValue.trim());}}>
            <input
                type="text"
                placeholder="Enter city"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button type='submit'>
                🔍
            </button>
        </form>
    )
}

export default SearchBar