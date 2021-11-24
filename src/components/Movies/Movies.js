import './Movies.css';
import cardImage from '../../images/card.jpg'
import { Link, Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies(props) {
  const location = useLocation();

  return (
    <section class="cards">

      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />

    </section>
  );
}

export default Movies;