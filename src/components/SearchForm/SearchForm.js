import './SearchForm.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router';

function SearchForm(props) {
  const [searchText, setSearchText] = useState("");
  const [isShort, setIsShort] = useState(false);
  const location = useLocation();
  
  function changeSearchText(e) {
    setSearchText(e.target.value);
  }

  function toggleIsShort() {
    setIsShort(!isShort);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(searchText, isShort);
    props.setIsSearched(true);
  }

  function handleFilter(isShort) {
    props.onSearch(searchText, isShort);
  }

  useEffect(() => {
    props.setIsSearched(false);
    if (location.pathname === '/saved-movies')
    {
      props.setIsSearched(true);
    }
  }, [])

  return (
    <form className="search" name="search-form" onSubmit={handleSubmit}>
      <div className="search__input-container">
        <input className="search__input-text" name="search-input" value={searchText} onChange={changeSearchText} type="text" placeholder="Фильм" />
        <button className="search__btn-submit" type="submit"></button>
      </div>
      <FilterCheckbox isShort={isShort} toggleIsShort={toggleIsShort} onSubmit={handleFilter} isSearched={props.isSearched} />
      <span className="search__line"></span>
    </form>
  );
}

export default SearchForm;