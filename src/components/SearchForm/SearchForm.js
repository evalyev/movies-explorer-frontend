import './SearchForm.css';
import React from 'react';
import { routes } from '../../utils/constants';
import { useState, useEffect } from 'react';

function SearchForm(props) {

  return (
    <form className="search" name="search-form">
      <div className="search__input-container">
        <input className="search__input-text" name="search-input" type="text" placeholder="Фильм" />
        <button className ="search__btn-submit" type ="submit"></button>
      </div>
      <label className="search__shortfilm-label">
        <input className="search__checkbox" type="checkbox" name="shortfilm" value="active" />
        <span className ="search__shortfilm"></span>
        <span className ="search__shortfilm-text">Короткометражки</span>
      </label>
      <span className="search__line"></span>
    </form>
  );
}

export default SearchForm;