import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { routes } from '../../utils/constants';

function App() {
  const [isErrorPath, setIsErrorPath] = useState(false);
  const location = useLocation()

  function isErrorPathFunc() {
    if (routes.includes(location.pathname)) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    setIsErrorPath(isErrorPathFunc());
  });

  return (
    <>
      { !isErrorPath &&
      <Header />
      }
      
      <Main />

      {["/", "/movies", "/saved-movies"].includes(location.pathname) &&
        <Footer />
      }
      
    </>

    // <footer className="footer">
    //   <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
    //   <div className="footer__info">
    //     <span className="footer__copyright">&copy; 2021</span>
    //     <ul className="footer__links">
    //       <li>
    //         <a className="footer__link" href="#">Яндекс.Практикум</a>
    //       </li>
    //       <li>
    //         <a className="footer__link" href="#">Github</a>
    //       </li>
    //       <li>
    //         <a className="footer__link" href="#">Facebook</a>
    //       </li>
    //     </ul>
    //   </div>
    // </footer>
  );
}

export default App;
