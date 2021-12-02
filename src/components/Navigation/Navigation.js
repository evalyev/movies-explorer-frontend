import './Navigation.css';
import { Link, Route, Routes, useLocation } from "react-router-dom";
import React from 'react';
import { LoggedInContext } from '../../contexts/LoggedInContext';

function Navigation(props) {
  const location = useLocation();
  const loggedIn = React.useContext(LoggedInContext);

  function handleOpenMenu() {
    document.querySelector('.header__menu').classList.add('header__menu_active');
  }

  function handleCloseMenu() {
    document.querySelector('.header__menu_active').classList.remove('header__menu_active');
  }

  return (
    <nav className={`header__nav ${["/signin", "/signup"].includes(location.pathname) ? "header__nav_type_auth" : ""}`}>
      <Link className="header__logo" to="/" />
      <Routes>
        {!loggedIn &&
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
        }
        

        <Route path={["/movies", "/saved-movies", "/profile", "/"].includes(location.pathname) ? location.pathname : "/movies"} element={
          (location.pathname === '/' && loggedIn || location.pathname !== '/') &&
          <>
            <button className="header__burger" type="button" onClick={handleOpenMenu}></button>

            <div className="header__menu">
              <button className="header__btn-close" type="button" onClick={handleCloseMenu}></button>
              <ul className="header__films">
                <li className="header__hidden-list">
                  <Link className={`header__link ${location.pathname === '/' ? "header__link_active" : ""}`} to="/">
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
  );
}

export default Navigation;