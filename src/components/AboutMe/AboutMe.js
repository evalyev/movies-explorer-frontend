import './AboutMe.css';
import myPhoto from '../../images/student.jpg'
import React from 'react';

function AboutMe(props) {
  return (
    <section className="student">
      <h2 className="content__title">Студент</h2>
      <div className="student__two-columns">
        <div className="student__column">
          <h3 className="student__name">Евгений</h3>
          <p className="student__subtitle">Фронтенд-разработчик, 20 лет</p>
          <p className="student__paragraph">Я родился в Алексине, живу в Москве, заканчиваю Инженерную академию РУДН по
            направлению "Прикладная математика и информатика". Прошёл курс по веб-разработке, теперь могу выгружать свой
            код в интернет.</p>
          <ul className="student__soc-nets">
            <li>
              <a className="student__soc-net-link" href="https://www.facebook.com/profile.php?id=100008211070260">Facebook</a>
            </li>
            <li>
              <a className="student__soc-net-link" href="https://github.com/evalyev/">Github</a>
            </li>
          </ul>
        </div>

        <div className="student__column">
          <img className="student__image" src={myPhoto} alt="Студент Евгений" />
        </div>
      </div>

      <div className="student__portfolio">
        <h3 className="student__portfolio-title">Портфолио</h3>
        <ul className="student__links">
          <li className="student__link-container">
            <a className="student__link" href="https://github.com/evalyev/how-to-learn">Статичный сайт</a>
          </li>
          <li className="student__link-container">
            <a className="student__link" href="https://github.com/evalyev/russian-travel">Адаптивный сайт</a>
          </li>
          <li className="student__link-container">
            <a className="student__link" href="https://github.com/evalyev/react-mesto-api-full">Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;