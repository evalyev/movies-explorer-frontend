import './Movies.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';

function Movies(props) {
  return (
    <>
      <section className="cards">

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

      <More />
    </>
  );
}

export default Movies;