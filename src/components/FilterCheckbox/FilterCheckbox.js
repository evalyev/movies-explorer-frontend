import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox(props) {
  function handleChange() {
    if (props.isSearched) {
      props.onSubmit(!props.isShort);
    }
    props.toggleIsShort();
  }

  return (
    <label className="search__shortfilm-label">
      <input className="search__checkbox" type="checkbox" name="shortfilm" value="active" checked={props.isShort} onChange={handleChange} />
      <span className="search__shortfilm"></span>
      <span className="search__shortfilm-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;