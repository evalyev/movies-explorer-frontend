import './Header.css';
import backLogo from '../../images/header__back.svg';
import { Link, Route, Routes } from "react-router-dom";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import { routes } from '../../utils/constants';
import { useState, useEffect } from 'react';

function Header(props) {
  const [isErrorPath, setIsErrorPath] = useState(false);
  let location = useLocation()

  function isErrorPathFunc() {
    if (routes.includes(location.pathname)) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    setIsErrorPath(isErrorPathFunc());
  });

  return (
    <>
      {!isErrorPath &&
        <header className={`header ${location.pathname === "/" && "header_type_blue"}`}>

          <nav className="header__nav">
            <Link className="header__logo" to="/" />
            <Routes>
              <Route exact path="/" element={
                <div className="header__auth">
                  <Link className="header__reg" to="/signup">
                    Регистрация
                  </Link>
                  <Link className="header__login" to="/signin">
                    Войти
                  </Link>
                </div>
              } />
            </Routes>
          </nav>

          <Routes>
            <Route exact path="/" element={
              <>
                <h1 className="header__title">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="header__land-logo" src={backLogo} alt="" />
              </>
            } />
          </Routes>


        </header >

      }
    </>
  );
}

export default Header;