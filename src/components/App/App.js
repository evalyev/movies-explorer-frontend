import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { routes } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { useState, useEffect } from 'react';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { searchMovies } from '../../utils/filterFunction';

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  function isErrorPath() {
    if (routes.includes(location.pathname)) {
      return false;
    }
    return true;
  }

  function handleRegister(name, email, password) {
    return mainApi.register(name, email, password)
      .catch(err => console.log(err))
  }

  function handleLogin(email, password) {
    return mainApi.login(email, password)
      .then(res => {
        if (res.ok) {
          setLoggedIn(true);
        }
        return res;
      })
      .catch(err => console.log(err))
  }

  function handlgeLogout() {
    return mainApi.logout()
      .then(res => {
        if (res) {
          setLoggedIn(false);
          setCurrentUser(null);
        }
        return res;
      })
      .catch(err => console.log(err))
  }

  function handleEditProfile(name, email) {
    return mainApi.setUserInfo(name, email)
      .then(res => {
        if (res) {
          setCurrentUser({ ...currentUser, data: { ...currentUser.data, name: name, email: email } });
        }
        return res;
      }
      )
      .catch(err => console.log(err))
  }

  function handleSaveMovie(movie) {
    return mainApi.saveMovie(movie)
      .catch(err => console.log(err))
  }

  function handleGetMyMovies() {
    return mainApi.getMyMovies()
      .catch(err => console.log(err))
  }

  function handleRemoveMyMovie(movieId) {
    return mainApi.removeMovie(movieId)
      .catch(err => console.log(err))
  }

  function handleSearch(searchText, isShort) {
    moviesApi.getMovies()
      .then(res => {
        setMovies(searchMovies(res, searchText, isShort));
      })
      .catch(err => console.log(err));
  }

  function handleMySearch(searchText, isShort) {
    mainApi.getMyMovies()
      .then(res => {
        setMyMovies(searchMovies(res.data, searchText, isShort));
      })

  }

  useEffect(() => {
    mainApi.getUserInfo()
      .then(res => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
        }
      })
      .catch(err => console.log(err))

  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <LoggedInContext.Provider value={loggedIn}>
        {!isErrorPath() &&
          <Header movies={movies} myMovies={myMovies} onSearch={handleSearch} onMySearch={handleMySearch} />
        }

        <Main onRegister={handleRegister} onLogin={handleLogin} onEditProfile={handleEditProfile} onLogout={handlgeLogout}
          changeCurrentUser={setCurrentUser} onSaveMovie={handleSaveMovie} onGetMyMovies={handleGetMyMovies} onRemoveMovie={handleRemoveMyMovie}
          movies={movies} myMovies={myMovies} setMovies={setMovies} setMyMovies={setMyMovies} />

        {["/", "/movies", "/saved-movies"].includes(location.pathname) &&
          <Footer />
        }
      </LoggedInContext.Provider>

    </CurrentUserContext.Provider>
  );
}

export default App;
