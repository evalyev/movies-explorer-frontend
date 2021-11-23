import './Main.css';
import { Link, Route, Routes } from "react-router-dom";
import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main(props) {
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

      </Routes>

    </main>
  );
}

export default Main;