import './SavedMoviesCard.css';
import React from 'react';

function SavedMoviesCard(props) {
  function handleRemoveMovie() {
    props.onRemoveMovie(props.movie.movieId)
  }

  return (
    <article className="card">
      <div className="card__image-container">
        <img className="card__image" src={props.movie.image} alt={props.movie.nameRU} />
      </div>
      <div className="card__info">
        <h2 className="card__title">{props.movie.nameRU}</h2>
        <button className="card__btn-trash" type="button" onClick={handleRemoveMovie}></button>
      </div>
      <span className="card__duration">{props.movie.duration >= 60 ?
        `${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60 === 0 ? "" : (props.movie.duration % 60) + "м"}` :
        `${props.movie.duration}м`}
      </span>
    </article>
  );
}

export default SavedMoviesCard;