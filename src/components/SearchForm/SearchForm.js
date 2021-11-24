import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {

  return (
    <form className="search" name="search-form">
      <div className="search__input-container">
        <input className="search__input-text" name="search-input" type="text" placeholder="Фильм" />
        <button className="search__btn-submit" type="submit"></button>
      </div>
      <FilterCheckbox />
      <span className="search__line"></span>
    </form>
  );
}

export default SearchForm;