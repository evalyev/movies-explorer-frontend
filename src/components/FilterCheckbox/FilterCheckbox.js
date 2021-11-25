import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox(props) {

  return (
    <label className="search__shortfilm-label">
      <input className="search__checkbox" type="checkbox" name="shortfilm" value="active" checked={props.isShort} onChange={props.toggleIsShort} />
      <span className="search__shortfilm"></span>
      <span className="search__shortfilm-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;