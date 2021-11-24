import './MoviesCard.css';
import cardImage from '../../images/card.jpg'
import { useLocation } from 'react-router-dom';
import React from 'react';

function MoviesCard(props) {
  const location = useLocation();

  return (
    <article className="card">
      <div className="card__image-container">
        <img className="card__image" src={cardImage} alt="33 слова о дизайне" />
      </div>
      <div className="card__info">
        <h2 className="card__title">33 слова о дизайне</h2>
        {location.pathname === "/movies" &&
          <button className="card__btn-like" type="button"></button>
        }
        {location.pathname === "/saved-movies" &&
          <button className="card__btn-trash" type="button"></button>
        }
      </div>
      <span className="card__duration">1ч 47м</span>
    </article>
  );
}

export default MoviesCard;