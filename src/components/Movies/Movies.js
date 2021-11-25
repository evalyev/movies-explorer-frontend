import './Movies.css';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import More from '../More/More';
import { useState } from 'react';
import moviesApi from '../../utils/MoviesApi';
import SavedMovies from '../SavedMovies/SavedMovies';

function Movies(props) {
  const [maxMovies, setMaxMovies] = useState(0);
  const [moreCount, setMoreCount] = useState(0);
  const location = useLocation();

  function handleMoreMovies() {
    setMaxMovies(maxMovies + moreCount);
  }

  function handleSaveMovie(movie) {
    props.onSaveMovie(movie)
      .then(res => {
        if (res) {
          props.onGetMyMovies()
            .then(res => props.setMyMovies(res.data))
        }
        return res;
      })
  }

  function handleRemoveMovie(movieId) {
    props.onRemoveMovie(movieId)
      .then(res => {
        if (res) {
          props.onGetMyMovies()
            .then(res => props.setMyMovies(res.data))
        }
        return res;
      })
  }

  useEffect(() => {
    // moviesApi.getMovies()
    //   .then(res => {
    //     return res;
    //   })
    //   .then(res => props.setMovies(res))
    //   .catch(err => console.log(err));

    props.onGetMyMovies()
      .then(res => props.setMyMovies(res.data))
      .catch(err => console.log(err));

    if (document.documentElement.clientWidth > 768) {
      setMaxMovies(12);
      setMoreCount(3);
    }
    else if (document.documentElement.clientWidth > 480) {
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

        {location.pathname === '/movies' ?
          props.movies.map((movie, index) => {
            if (index < maxMovies) {
              let saved = false;
              const copyMyMovie = props.myMovies.find(item => {
                if (item.movieId === movie.id) return true;
                else return false;
              })
              if (copyMyMovie) {
                saved = true;
              }

              return <MoviesCard key={movie.id} movie={movie} onSaveMovie={handleSaveMovie} onRemoveMovie={handleRemoveMovie} isSaved={saved} />
            }
          }) :
          (location.pathname === '/saved-movies' &&
            <SavedMovies onGetMyMovies={props.onGetMyMovies} onRemoveMovie={props.onRemoveMovie} setMyMovies={props.setMyMovies} myMovies={props.myMovies} />
          )



        }

      </section>

      {location.pathname === '/movies' && props.movies.length > maxMovies &&
        <More handleClick={handleMoreMovies} />
      }

      {location.pathname === '/saved-movies' && props.myMovies.length > maxMovies &&
        <More handleClick={handleMoreMovies} />
      }

    </>
  );
}

export default Movies;