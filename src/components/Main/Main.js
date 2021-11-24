import './Main.css';
import { Route, Routes } from "react-router-dom";
import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import { useLocation } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Error from '../Error/Error';

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

        <Route path="/profile" element={
          <Profile onLogout={props.onLogout} onEditProfile={props.onEditProfile} />
        } />

        <Route path="/signup" element={
          <Register onRegister={props.onRegister} />
        } />

        <Route path="/signin" element={
          <Login onLogin={props.onLogin} />
        } />

        <Route path="/*" element={
          <Error />
        } />

      </Routes>

    </main>
  );
}

export default Main;