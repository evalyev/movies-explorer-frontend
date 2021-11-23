import './Main.css';
import { Link, Route } from "react-router-dom";
import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main(props) {
  return (
    <main className="content">
      <AboutProject />

      <Techs />

      <AboutMe />

    </main>
  );
}

export default Main;