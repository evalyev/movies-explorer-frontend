import './Footer.css';
import React from 'react';

function Footer(props) {
  return (
    <footer className="footer">
    <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
    <div className="footer__info">
      <span className="footer__copyright">&copy; 2021</span>
      <ul className="footer__links">
        <li>
          <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
        </li>
        <li>
          <a className="footer__link" href="https://github.com/evalyev/">Github</a>
        </li>
        <li>
          <a className="footer__link" href="https://www.facebook.com/profile.php?id=100008211070260">Facebook</a>
        </li>
      </ul>
    </div>
  </footer>
  );
}

export default Footer;