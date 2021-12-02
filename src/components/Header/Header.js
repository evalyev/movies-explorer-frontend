import './Header.css';
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import { LoggedInContext } from '../../contexts/LoggedInContext';

function Header(props) {
  const location = useLocation();
  const loggedIn = React.useContext(LoggedInContext);

  return (
    <>
      <header className={`header ${(location.pathname === "/" && !loggedIn) ? "header_type_blue" : ""} ${["/signup", "/signin"].includes(location.pathname) ? "header_type_auth" : ""}`}>

        <Navigation />

        <Routes>
          <Route path="/" element={
            <Promo />
          } />

          <Route path="/movies" element={
            <SearchForm onSearch={props.onSearch} isSearched={props.isSearched} setIsSearched={props.setIsSearched} />
          } />

          <Route path="/saved-movies" element={
            <SearchForm onSearch={props.onMySearch} isSearched={props.isSearched} setIsSearched={props.setIsSearched} />
          } />

          <Route path={["/signin", "/signup"].includes(location.pathname) ? location.pathname : "/signin"} element={
            <h1 className="header__auth-title">{location.pathname === "/signin" ? "Рады видеть!" : "Добро пожаловать!"}</h1>
          } />
        </Routes>

      </header >
    </>
  );
}

export default Header;