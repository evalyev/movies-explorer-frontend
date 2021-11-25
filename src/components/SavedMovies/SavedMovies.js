import './SavedMovies.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import React from 'react';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

function SavedMovies(props) {
  const [maxMovies, setMaxMovies] = useState(0);
  const location = useLocation();

  function handleDeleteMovie(movieId) {
    props.onRemoveMovie(movieId)
      .then(res => {
        if (res) {
          props.onGetMyMovies()
            .then(movies => props.setMyMovies(movies.data))
        }
        return res;
      })
  }

  useEffect(() => {
    props.onGetMyMovies()
      .then(res => props.setMyMovies(res.data))
      .catch(err => console.log(err));

    if (document.documentElement.clientWidth > 768) {
      setMaxMovies(12);
    }
    else if (document.documentElement.clientWidth > 480) {
      setMaxMovies(8);
    }
    else {
      setMaxMovies(5);
    }
  }, []);

  return (
    <>
      {
        props.myMovies.map((movie) => {
          return <SavedMoviesCard key={movie.movieId} movie={movie} onRemoveMovie={handleDeleteMovie} />
        })
      }

    </>
  );
}

export default SavedMovies;