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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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
          <ProtectedRoute
            onSaveMovie={props.onSaveMovie} onGetMyMovies={props.onGetMyMovies} onRemoveMovie={props.onRemoveMovie}
            movies={props.movies} myMovies={props.myMovies} setMovies={props.setMovies} setMyMovies={props.setMyMovies}
            getAllMovies={props.getAllMovies} isSearched={props.isSearched} setIsSearched={props.setIsSearched} component={Movies}
          />
          // <Movies onSaveMovie={props.onSaveMovie} onGetMyMovies={props.onGetMyMovies} onRemoveMovie={props.onRemoveMovie} />
        } />

        <Route path="/profile" element={
          <ProtectedRoute
            onLogout={props.onLogout} onEditProfile={props.onEditProfile} changeCurrentUser={props.changeCurrentUser}
            component={Profile}
          />
          // <Profile onLogout={props.onLogout} onEditProfile={props.onEditProfile} changeCurrentUser={props.changeCurrentUser} />
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