import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { routes } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useState, useEffect } from 'react';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [movies, setMovies] = useState([]);

  function isErrorPath() {
    if (routes.includes(location.pathname)) {
      return false;
    }
    return true;
  }

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     Promise.all([mainApi.getUserInfo(), api.getInitialCards(), auth.getContent(token)])
  //       .then(([userInfo, cardItems, authInfo]) => {
  //         if (authInfo.data) {
  //           authInfo = authInfo.data;
  //           userInfo.email = authInfo.email;
  //           setCurrentUser(userInfo);
  //           setMovies(cardItems);
  //           // setLoggedIn(true);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err); // выведем ошибку в консоль
  //       });
  //   }

  // }, [isLoggOut]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      { !isErrorPath() &&
      <Header />
      }
      
      <Main />

      {["/", "/movies", "/saved-movies"].includes(location.pathname) &&
        <Footer />
      }
      
    </CurrentUserContext.Provider>
  );
}

export default App;
