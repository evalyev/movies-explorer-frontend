import './Header.css';
import backLogo from '../../images/header__back.svg';
import { Link, Route, Routes } from "react-router-dom";
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import { routes } from '../../utils/constants';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';

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
        <header className={`header ${location.pathname === "/" ? "header_type_blue" : ""}`}>

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

              <Route path={["/movies", "/saved-movies", "/profile"].includes(location.pathname) ? location.pathname : "/movies"} element={
                <>
                  <button className="header__burger" type="button"></button>

                  <div className="header__menu">
                    <button className="header__btn-close" type="button"></button>
                    <ul className="header__films">
                      <li className="header__hidden-list">
                        <Link className="header__link" to="/">
                          Главная
                        </Link>
                      </li>
                      <li>
                        {location.pathname === "/movies" ? (
                          <h1 className="header__link header__link_active">
                            Фильмы
                          </h1>
                        ) :
                          (
                            <Link className="header__link" to="/movies">
                              Фильмы
                            </Link>
                          )
                        }

                      </li>
                      <li>
                        {location.pathname === "/saved-movies" ? (
                          <h1 className="header__link header__link_active">
                            Сохранённые фильмы
                          </h1>
                        ) :
                          (
                            <Link className="header__link" to="/saved-movies">
                              Сохранённые фильмы
                            </Link>
                          )
                        }                        
                      </li>
                    </ul>

                    <Link className="header__profile" to="/profile">
                      Аккаунт
                    </Link>
                  </div>
                </>
              } />
            </Routes>

          </nav>

          <Routes>
            <Route path="/" element={
              <>
                <h1 className="header__title">Учебный проект студента факультета Веб-разработки.</h1>
                <img className="header__land-logo" src={backLogo} alt="" />
              </>
            } />

            <Route path={["/movies", "/saved-movies"].includes(location.pathname) ? location.pathname : "/movies"} element={
              <SearchForm />
            } />
          </Routes>

        </header >

      }
    </>
  );
}

export default Header;