import './MoviesCard.css';
import cardImage from '../../images/card.jpg'
import { Link, Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';

function MoviesCard(props) {
  const location = useLocation();

  return (
    <article class="card">
      <div class="card__image-container">
        <img class="card__image" src={cardImage} alt="33 слова о дизайне" />
      </div>
      <div class="card__info">
        <h2 class="card__title">33 слова о дизайне</h2>
        {location.pathname === "/movies" &&
          <button class="card__btn-like" type="button"></button>
        }
        {location.pathname === "/saved-movies" &&
          <button class="card__btn-trash" type="button"></button>
        }
      </div>
      <span class="card__duration">1ч 47м</span>
    </article>
  );
}

export default MoviesCard;