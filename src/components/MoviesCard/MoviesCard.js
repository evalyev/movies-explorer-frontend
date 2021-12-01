import './MoviesCard.css';
import React from 'react';

function MoviesCard(props) {

  function handleSaveMovie() {
    props.onSaveMovie(props.movie)
  }

  function handleRemoveMovie() {
    props.onRemoveMovie(props.movie.id)
  }

  function toggleSaveMovie(e) {
    if (e.target.classList.contains("card__btn-like_active")) {
      handleRemoveMovie();
    }
    else {
      handleSaveMovie();
    }
  }

  return (
    <article className="card">
      <a className="card__image-container" href={props.movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="card__image" src={props.movie.image.url} alt={props.movie.nameRU} />
      </a>
      <div className="card__info">
        <h2 className="card__title">{props.movie.nameRU}</h2>

        <button className={`card__btn-like ${props.isSaved ? "card__btn-like_active" : ""}`} type="button" onClick={toggleSaveMovie}></button>

      </div>
      <span className="card__duration">{props.movie.duration >= 60 ?
        `${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60 === 0 ? "" : (props.movie.duration % 60) + "м"}` :
        `${props.movie.duration}м`}
      </span>
    </article>
  );
}

export default MoviesCard;