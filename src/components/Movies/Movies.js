import './Movies.css';
import React, { useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';
import { useState } from 'react';
import moviesApi from '../../utils/MoviesApi';

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [maxMovies, setMaxMovies] = useState(0);
  const [moreCount, setMoreCount] = useState(0);

  function handleMoreMovies() {
    setMaxMovies(maxMovies + moreCount);
  }

  useEffect(() => {
    moviesApi.getMovies()
      .then(res => setMovies(res))
      .catch(err => console.log(err));

    if (document.documentElement.clientWidth > 768) {
      setMaxMovies(12);
      setMoreCount(3);
    }
    else if (document.documentElement.clientWidth > 600) {
      setMaxMovies(8);
      setMoreCount(2);
    }
    else {
      setMaxMovies(5);
      setMoreCount(2);
    }
  }, []);

  return (
    <>
      <section className="cards">

        {movies.map((movie, index) => {
          if (index < maxMovies) {
            return <MoviesCard movie={movie} />
          }
        })

        }

      </section>

      {movies.length > maxMovies &&
        <More handleClick={handleMoreMovies} />
      }

    </>
  );
}

export default Movies;