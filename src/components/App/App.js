import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import { routes } from '../../utils/constants';

function App() {
  const location = useLocation()

  function isErrorPath() {
    if (routes.includes(location.pathname)) {
      return false;
    }
    return true;
  }

  return (
    <>
      { !isErrorPath() &&
      <Header />
      }
      
      <Main />

      {["/", "/movies", "/saved-movies"].includes(location.pathname) &&
        <Footer />
      }
      
    </>
  );
}

export default App;
