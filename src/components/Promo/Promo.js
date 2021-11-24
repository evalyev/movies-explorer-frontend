import './Promo.css';
import backLogo from '../../images/header__back.svg';
import React from 'react';

function Promo(props) {
  return (
    <div className="header__promo">
      <h1 className="header__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img className="header__land-logo" src={backLogo} alt="Фон" />
    </div>
  );
}

export default Promo;