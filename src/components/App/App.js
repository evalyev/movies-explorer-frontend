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

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [movies, setMovies] = useState([]);
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
        if (res) {
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
          setCurrentUser({...currentUser, data: {...currentUser.data, name: name, email: email}});
        }
        return res;
      }
      )
      .catch(err => console.log(err))
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
          <Header />
        }

        <Main onRegister={handleRegister} onLogin={handleLogin} onEditProfile={handleEditProfile} onLogout={handlgeLogout} changeCurrentUser={setCurrentUser} />

        {["/", "/movies", "/saved-movies"].includes(location.pathname) &&
          <Footer />
        }
      </LoggedInContext.Provider>

    </CurrentUserContext.Provider>
  );
}

export default App;
