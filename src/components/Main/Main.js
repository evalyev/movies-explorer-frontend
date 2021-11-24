import './Main.css';
import { Link, Route, Routes } from "react-router-dom";
import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import { useLocation } from 'react-router-dom';
import Movies from '../Movies/Movies';

function Main(props) {
  const location = useLocation();

  return (
    <main className="content">

      <Routes>

        <Route exact path="/" element={
          <>
            <AboutProject />
            <Techs />
            <AboutMe />
          </>
        } />

        <Route path={["/movies", "/saved-movies"].includes(location.pathname) ? location.pathname : "/movies"} element={
          <Movies />
        } />

      </Routes>

    </main>
  );
}

export default Main;