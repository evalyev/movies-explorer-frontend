import './Header.css';
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';

function Header(props) {
  const location = useLocation()

  return (
    <>
      <header className={`header ${location.pathname === "/" ? "header_type_blue" : ""} ${["/signup", "/signin"].includes(location.pathname) ? "header_type_auth" : ""}`}>

        <Navigation />

        <Routes>
          <Route path="/" element={
            <Promo />
          } />

          <Route path={["/movies", "/saved-movies"].includes(location.pathname) ? location.pathname : "/movies"} element={
            <SearchForm />
          } />
        </Routes>

      </header >
    </>
  );
}

export default Header;