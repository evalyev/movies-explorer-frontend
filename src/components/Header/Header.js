import './Header.css';
import backLogo from '../../images/header__back.svg';
import { Link, Route } from "react-router-dom";
import React from 'react';

function Header(props) {
  return (
    <header className="header header_type_blue">
      <nav className="header__nav">
        <Link className="header__logo" to="/" />
        <div className="header__auth">
          <Link className="header__reg" to="/signup">
            Регистрация
          </Link>
          <Link className="header__login" to="/signin">
            Войти
          </Link>
        </div>

      </nav>
      <h1 className="header__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img className="header__land-logo" src={backLogo} alt="" />
    </header>
  );
}

export default Header;