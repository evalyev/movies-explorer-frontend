import './SearchForm.css';
import React from 'react';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
  const [searchText, setSearchText] = useState("");
  const [isShort, setIsShort] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  
  function changeSearchText(e) {
    setSearchText(e.target.value);
  }

  function toggleIsShort() {
    setIsShort(!isShort);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(searchText, isShort);
    setIsSearched(true);
  }

  function handleFilter(isShort) {
    props.onSearch(searchText, isShort);
  }

  return (
    <form className="search" name="search-form" onSubmit={handleSubmit}>
      <div className="search__input-container">
        <input className="search__input-text" name="search-input" value={searchText} onChange={changeSearchText} type="text" placeholder="Фильм" />
        <button className="search__btn-submit" type="submit"></button>
      </div>
      <FilterCheckbox isShort={isShort} toggleIsShort={toggleIsShort} onSubmit={handleFilter} isSearched={isSearched} />
      <span className="search__line"></span>
    </form>
  );
}

export default SearchForm;