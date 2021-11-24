import './MoviesCard.css';
import cardImage from '../../images/card.jpg'
import { useLocation } from 'react-router-dom';
import React from 'react';

function MoviesCard(props) {
  const location = useLocation();

  return (
    <article className="card">
      <div className="card__image-container">
        <img className="card__image" src={props.movie.image.url} alt={props.movie.nameRU} />
      </div>
      <div className="card__info">
        <h2 className="card__title">{props.movie.nameRU}</h2>
        {location.pathname === "/movies" &&
          <button className="card__btn-like" type="button"></button>
        }
        {location.pathname === "/saved-movies" &&
          <button className="card__btn-trash" type="button"></button>
        }
      </div>
      <span className="card__duration">{props.movie.duration >= 60 ? 
      `${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60 === 0 ? "" : (props.movie.duration % 60) + "м"}` :
      `${props.movie.duration}м` }
      </span>
    </article>
  );
}

export default MoviesCard;